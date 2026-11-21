#!/usr/bin/env python3
"""Capture read-only public demo projections from isolated, synthetic upstream runs."""
import argparse
import json
import re
import runpy
import subprocess
import sys
from pathlib import Path
from urllib.parse import urlsplit

DOCS = Path(__file__).resolve().parents[1] / "docs" / "demos"


def save(folder, payload):
    (DOCS / folder / "snapshot.json").write_text(
        json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


def dataguard(root, url, commit):
    import httpx

    address = urlsplit(url)
    if address.scheme != "http" or address.hostname != "127.0.0.1" or not address.port:
        raise ValueError("Use the fresh, loopback-only H2 demo on an explicit port.")
    folder = DOCS / "dataguard"
    fixtures = {
        "orders": (root / "data/raw/orders.csv").read_bytes(),
        "warning": (
            b"order_id,customer_id,product_id,quantity,unit_price,order_time,status\n"
            b"SYN-RANGE,SYN-C,SYN-P,100,10000,2026-10-19T09:00:00,PAID\n"
        ),
        "empty": b"",
    }
    cases = {}
    with httpx.Client(base_url=url, trust_env=False, timeout=20) as client:
        def read(response):
            response.raise_for_status()
            return response.json()

        if read(client.get("/api/datasets?limit=1")) or read(client.get("/api/tasks?limit=1")):
            raise ValueError("Capture requires an empty demonstration instance.")
        for key, data in fixtures.items():
            name = key + ".csv"
            dataset = read(client.post("/api/datasets", files={"file": (name, data, "text/csv")}))
            task = read(client.post("/api/tasks", json={"datasetId": dataset["id"]}))
            report = client.get(f"/api/tasks/{task['id']}/report")
            captured = {"status": task["status"], "reportHttpStatus": report.status_code,
                        "errorCode": task["errorCode"], "errorMessage": task["errorMessage"]}
            if report.is_success:
                captured["report"] = {k: v for k, v in report.json().items() if k != "generatedAt"}
            else:
                assert report.status_code == 409 and report.json()["code"] == "REPORT_NOT_AVAILABLE"
            cases[key] = captured
    report = cases["orders"]["report"]
    assert [report[k] for k in ("totalRecords", "validRecords", "invalidRecords", "totalIssues", "qualityScore")] == [40, 29, 11, 11, 72.5]
    assert cases["warning"]["report"]["issuesBySeverity"]["WARNING"] == 1
    assert cases["empty"]["errorCode"] == "EMPTY_FILE"
    for key, data in fixtures.items():
        (folder / (key + ".csv")).write_bytes(data)
    save("dataguard", {"sourceCommit": commit, "engine": "Java 21 / Spring Boot / H2", "cases": cases})


def signalhub(root, commit):
    upstream = runpy.run_path(str(root / "scripts/public_demo.py"))
    seed = upstream["seed"]
    run = upstream["run"]

    def capture(client, env, credentials):
        stages, imports = [], []

        class RecordingClient:
            def get(self, *args, **kwargs):
                return client.get(*args, **kwargs)

            def request(self, method, path, **kwargs):
                response = client.request(method, path, **kwargs)
                if response.is_success and method == "GET":
                    if re.fullmatch(r"/api/items/[0-9]+", path):
                        row = response.json()
                        stage = (len(row["versions"]), row["matching_status"])
                        if all((len(previous["versions"]), previous["matching_status"]) != stage for previous in stages):
                            stages.append(row)
                    if path.startswith("/api/tasks/"):
                        result = response.json().get("result") or {}
                        if "inserted" in result:
                            imports.append({k: result[k] for k in ("inserted", "deduplicated", "updated")})
                return response

        result = seed(RecordingClient(), env, credentials)
        assert imports == [
            {"inserted": 1, "deduplicated": 0, "updated": 0},
            {"inserted": 0, "deduplicated": 1, "updated": 0},
            {"inserted": 0, "deduplicated": 0, "updated": 1},
        ]
        assert [row["score"] is None for row in stages] == [False, True, False]
        page = client.get("/view/import").text
        def meta(name):
            return re.search(r'<meta[^>]+name="' + name + r'"[^>]+content="([^"]+)"', page).group(1)
        headers = {meta("csrf-header"): meta("csrf")}
        def request(method, path, **kwargs):
            response = client.request(method, "/api" + path, headers=headers, **kwargs)
            response.raise_for_status()
            return response.json()

        source = request("POST", "/sources", json=dict(name="合成作品集补充样本", adapter="manual", config={}, enabled=True))["id"]
        for key, title, city, skills, role in (
            ("backend", "[合成演示] Java 后端实习", "上海", "Java and SQL", "backend"),
            ("pipeline", "[合成演示] 批处理数据开发实习", "成都", "Python and SQL", "data_engineering"),
        ):
            row = dict(kind="job", external_id="portfolio-" + key, title=title, company="示例工程工坊（虚构）",
                       country="CN", city=city, categories=[role], employment_type="internship",
                       url=f"https://example.com/signalhub/{key}", is_demo=True,
                       body="Bachelor's degree required. Required: " + skills + ".")
            task_id = request("POST", "/imports", json=dict(sourceId=source, records=[row]))["taskId"]
            subprocess.run([sys.executable, "-m", "signalhub.cli", "tick"], cwd=root, env=env,
                           check=True, timeout=20, stdout=subprocess.DEVNULL)
            assert request("GET", f"/tasks/{task_id}")["state"] == "done"
        request("POST", "/matches/refresh")
        listing = request("GET", "/items", params={"includeDemo": "true"})
        assert listing["total"] == 3 and request("GET", "/items")["total"] == 0

        def project(row):
            assert row["recruitment"]["state"] == "synthetic"
            payload = row["payload"]
            explanation = row.get("explanation") or {}
            return {
                "title": payload["title"], "company": payload["company"], "city": payload["city"],
                "categories": payload["categories"], "body": payload["body"], "score": row["score"],
                "hardStatus": row["hard_status"], "matchingStatus": row["matching_status"],
                "breakdown": explanation.get("breakdown", []), "adjustments": explanation.get("adjustments", []),
                "qualifications": explanation.get("qualifications", []),
                "versions": [v["version"] for v in row["versions"]],
            }

        items = [project(request("GET", f"/items/{item['id']}")) for item in listing["items"]]
        save("signalhub", {"sourceCommit": commit, "engine": "Java 21 / Python 3.12 / PostgreSQL 17",
                           "imports": imports, "stages": [project(row) for row in stages], "items": items})
        return result

    run.__globals__["seed"] = capture
    run(True)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("project", choices=("dataguard", "signalhub"))
    parser.add_argument("checkout", type=Path)
    parser.add_argument("commit")
    parser.add_argument("--dataguard-url")
    args = parser.parse_args()
    if not re.fullmatch("[0-9a-f]{40}", args.commit):
        parser.error("Use the full upstream commit SHA.")
    checkout = args.checkout.resolve()
    if (checkout / ".git").exists():
        head = subprocess.check_output(["git", "-C", str(checkout), "rev-parse", "HEAD"], text=True).strip()
        if head != args.commit:
            parser.error("The upstream checkout does not match the requested SHA.")
    if args.project == "dataguard":
        if not args.dataguard_url:
            parser.error("--dataguard-url is required for DataGuard")
        dataguard(checkout, args.dataguard_url, args.commit)
    else:
        signalhub(checkout, args.commit)
