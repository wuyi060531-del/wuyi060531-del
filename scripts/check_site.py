#!/usr/bin/env python3
"""Static checks for the portfolio site in docs/. Python standard library + node (for syntax only).

    python3 scripts/check_site.py            # verify
    python3 scripts/check_site.py --update   # rewrite scripts/site-manifest.json after an intended change

Checks: every relative resource exists (HTML, CSS, JS imports), no root-absolute or external
resources, in-page anchors resolve, JavaScript parses, file integrity (SHA-256 manifest), hashes in
docs/evidence/README.md match the files, size budget, and a scan for private data.
"""
import hashlib, json, re, shutil, subprocess, sys, tempfile
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
MANIFEST = ROOT / "scripts" / "site-manifest.json"
MAX_FILE = 1_500_000          # bytes, per file
MAX_TOTAL = 8_000_000         # bytes, whole site
OUR_JS = ["main.js", "stage.js", "fx.js", "forest.js"]          # hand-written; the bundle is third-party
LINK_ALLOW = ("https://github.com/wuyi060531-del", "https://github.com/MengTo/threeui")
EMAIL_ALLOW = re.compile(r"@users\.noreply\.github\.com$|^noreply@")
errors: list[str] = []


def err(msg: str) -> None:
    errors.append(msg)


def sha(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def files() -> list[Path]:
    return sorted(p for p in DOCS.rglob("*") if p.is_file())


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs, self.ids, self.anchors = [], set(), []

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        for key in ("href", "src", "poster", "data-src"):
            if a.get(key):
                self.refs.append((tag, key, a[key]))
        if a.get("srcset"):
            for part in a["srcset"].split(","):
                self.refs.append((tag, "srcset", part.strip().split()[0]))


def resolve(base: Path, ref: str) -> Path | None:
    path = unquote(urlsplit(ref).path)
    return (base.parent / path).resolve() if path else None


def check_html() -> dict[Path, Page]:
    pages = {}
    for html in DOCS.rglob("*.html"):
        p = Page()
        p.feed(html.read_text(encoding="utf-8"))
        pages[html.resolve()] = p
    for html, page in pages.items():
        rel = html.relative_to(DOCS.resolve())
        for tag, key, ref in page.refs:
            u = urlsplit(ref)
            if tag == "link" and ref.startswith("data:image/"):
                continue                                # inline favicon
            if ref.startswith(("mailto:", "data:", "javascript:")):
                err(f"{rel}: <{tag} {key}={ref[:30]!r}> not allowed")
            elif u.scheme in ("http", "https"):
                if tag != "a":
                    err(f"{rel}: external <{tag} {key}> {ref} (assets must be local)")
                elif not ref.startswith(LINK_ALLOW):
                    err(f"{rel}: link to non-allow-listed host {ref}")
            elif ref.startswith("/"):
                err(f"{rel}: root-absolute path {ref!r} breaks under /<repo>/ (use a relative path)")
            elif ref.startswith("#"):
                if len(ref) > 1 and ref[1:] not in page.ids:
                    err(f"{rel}: anchor {ref} has no matching id")
            else:
                target = resolve(html, ref)
                if target is None or not target.exists():
                    err(f"{rel}: missing resource {ref}")
                elif target.is_file() and u.fragment and target in pages and u.fragment not in pages[target].ids:
                    err(f"{rel}: {ref} points to a missing id")
                elif DOCS.resolve() not in target.parents and target != DOCS.resolve():
                    err(f"{rel}: {ref} escapes docs/")
    return pages


def check_css() -> None:
    for css in DOCS.rglob("*.css"):
        text = css.read_text(encoding="utf-8")
        rel = css.relative_to(DOCS)
        for m in re.finditer(r"url\(\s*['\"]?([^'\")]+)['\"]?\s*\)", text):
            ref = m.group(1)
            if ref.startswith("data:"):
                continue
            if re.match(r"(https?:)?//", ref) or ref.startswith("/"):
                err(f"{rel}: external or root-absolute url({ref})")
            elif not (css.parent / unquote(urlsplit(ref).path)).exists():
                err(f"{rel}: missing url({ref})")
        if "@import" in text:
            err(f"{rel}: @import is not allowed")


def check_js() -> None:
    node = shutil.which("node")
    if not node:
        print("WARN node not found: skipping JavaScript syntax check")
    for js in sorted((DOCS / "assets").glob("*.js")):
        rel = js.relative_to(DOCS)
        text = js.read_text(encoding="utf-8")
        for m in re.finditer(r"""(?:from\s*|import\s*\(\s*|import\s+)['"](\.{1,2}/[^'"]+)['"]""", text):
            if not (js.parent / m.group(1)).exists():
                err(f"{rel}: missing module {m.group(1)}")
        if js.name in OUR_JS:
            for m in re.finditer(r"https?://[^\s'\"`)]+", text):
                err(f"{rel}: hand-written code must not reference {m.group(0)}")
        if node:
            with tempfile.TemporaryDirectory() as d:
                tmp = Path(d) / (js.stem + ".mjs")
                tmp.write_text(text, encoding="utf-8")
                r = subprocess.run([node, "--check", str(tmp)], capture_output=True, text=True)
                if r.returncode:
                    err(f"{rel}: syntax error: {r.stderr.strip().splitlines()[0] if r.stderr else '?'}")


def check_integrity(update: bool) -> None:
    current = {str(p.relative_to(DOCS)): sha(p) for p in files()}
    if update:
        MANIFEST.write_text(json.dumps(current, indent=1, sort_keys=True) + "\n", encoding="utf-8")
        print(f"manifest updated: {len(current)} files")
        return
    if not MANIFEST.exists():
        err("scripts/site-manifest.json missing (run with --update)")
        return
    saved = json.loads(MANIFEST.read_text(encoding="utf-8"))
    for name in sorted(set(saved) | set(current)):
        if name not in current:
            err(f"manifest lists {name} but the file is missing")
        elif name not in saved:
            err(f"{name} is not in the manifest (run with --update if intended)")
        elif saved[name] != current[name]:
            err(f"{name} changed since the manifest was written (run with --update if intended)")
    total = sum(p.stat().st_size for p in files())
    if total > MAX_TOTAL:
        err(f"site is {total} bytes, over the {MAX_TOTAL} budget")
    for p in files():
        if p.stat().st_size > MAX_FILE:
            err(f"{p.relative_to(DOCS)} is {p.stat().st_size} bytes, over the {MAX_FILE} per-file budget")


def check_evidence() -> None:
    readme = DOCS / "evidence" / "README.md"
    if not readme.exists():
        err("docs/evidence/README.md missing")
        return
    seen = 0
    for m in re.finditer(r"\|\s*`([^`|]+\.webp)`[^\n]*?`([0-9a-f]{64})`\s*\|", readme.read_text(encoding="utf-8")):
        seen += 1
        f = DOCS / "evidence" / m.group(1)
        if not f.exists():
            err(f"evidence: {m.group(1)} listed but missing")
        elif sha(f) != m.group(2):
            err(f"evidence: SHA-256 of {m.group(1)} does not match README")
    listed = {m.group(1) for m in re.finditer(r"\|\s*`([^`|]+\.webp)`", readme.read_text(encoding="utf-8"))}
    for f in (DOCS / "evidence").glob("*.webp"):
        if f.name not in listed:
            err(f"evidence: {f.name} is not documented in the README")
    if not seen:
        err("evidence: no hashes found in README")


def check_required(pages) -> None:
    for name in (".nojekyll", "THIRD_PARTY_NOTICES.md", "index.html"):
        if not (DOCS / name).exists():
            err(f"docs/{name} is required")
    index = (DOCS / "index.html").read_text(encoding="utf-8")
    if 'class="ai"' not in index or "AI" not in index:
        err("index.html: AI-assistance statement missing")
    if "THIRD_PARTY_NOTICES.md" not in index:
        err("index.html: must link THIRD_PARTY_NOTICES.md")
    notices = (DOCS / "THIRD_PARTY_NOTICES.md").read_text(encoding="utf-8")
    for needle in ("Meng To", "three.js authors", "Permission is hereby granted"):
        if needle not in notices:
            err(f"THIRD_PARTY_NOTICES.md must contain {needle!r}")
    src = DOCS / "demos" / "ecommerce-order-pipeline" / "SOURCE.md"
    if not src.exists() or not re.search(r"commit `[0-9a-f]{7,40}`", src.read_text(encoding="utf-8")):
        err("demo mirror: SOURCE.md must record the source commit")


def check_privacy() -> None:
    patterns = {
        "email": re.compile(r"[\w.+-]+@[\w-]+\.[A-Za-z][\w.-]*"),
        "phone/ID-like 11+ digits": re.compile(r"(?<![\w.-])\d{11,}(?![\w.-])"),
        "local path": re.compile(r"/home/[a-z]|/Users/[A-Za-z]|[A-Za-z]:\\Users\\|/root/"),
        "secret-like": re.compile(r"ghp_[A-Za-z0-9]{20,}|AKIA[0-9A-Z]{16}|-----BEGIN [A-Z ]*PRIVATE KEY|password\s*[:=]\s*\S{6,}", re.I),
    }
    skip = {".webp", ".png", ".jpg", ".ico", ".woff2"}
    for p in files():
        if p.suffix in skip or p.name == "temple-night.js":
            continue
        text = p.read_text(encoding="utf-8", errors="replace")
        for label, rx in patterns.items():
            for m in rx.finditer(text):
                if label == "email" and EMAIL_ALLOW.search(m.group(0)):
                    continue
                err(f"privacy: {label} in {p.relative_to(DOCS)}: {m.group(0)[:40]!r}")


def main() -> int:
    update = "--update" in sys.argv
    pages = check_html()
    check_css()
    check_js()
    check_evidence()
    check_required(pages)
    check_privacy()
    check_integrity(update)
    if update and not errors:
        return 0
    if errors:
        print(f"{len(errors)} problem(s):")
        for e in errors:
            print(" -", e)
        return 1
    print(f"OK: {len(files())} files, {len(pages)} HTML pages checked")
    return 0


if __name__ == "__main__":
    sys.exit(main())
