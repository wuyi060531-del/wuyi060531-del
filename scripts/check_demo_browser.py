#!/usr/bin/env python3
"""Use a disposable Chrome CDP session for the portfolio browser checks (optional websocket-client)."""
import argparse
import base64
import json
import time
import urllib.request
from pathlib import Path
from urllib.parse import urlsplit

import websocket


class Browser:
    def __init__(self, port):
        pages = json.load(urllib.request.urlopen(f"http://127.0.0.1:{port}/json/list", timeout=5))
        endpoint = next(p["webSocketDebuggerUrl"] for p in pages if p["type"] == "page")
        self.ws = websocket.create_connection(endpoint, timeout=35, suppress_origin=True)
        self.sequence = 0
        self.errors = []
        self.requests = set()
        for domain in ("Page", "Runtime", "Network"):
            self.call(domain + ".enable")
        self.call("Network.setCacheDisabled", {"cacheDisabled": True})

    def call(self, method, params=None):
        self.sequence += 1
        message = self.sequence
        self.ws.send(json.dumps({"id": message, "method": method, "params": params or {}}))
        while True:
            event = json.loads(self.ws.recv())
            if event.get("id") == message:
                assert "error" not in event, event
                return event.get("result", {})
            if event.get("method") == "Runtime.exceptionThrown":
                self.errors.append(event["params"]["exceptionDetails"]["text"])
            if event.get("method") == "Network.requestWillBeSent":
                self.requests.add(event["params"]["request"]["url"])

    def js(self, expression):
        result = self.call("Runtime.evaluate", {"expression": expression, "returnByValue": True,
                                                "awaitPromise": True, "userGesture": True})
        assert "exceptionDetails" not in result, result.get("exceptionDetails")
        return result["result"].get("value")

    def wait(self, expression):
        deadline = time.monotonic() + 30
        while time.monotonic() < deadline:
            if self.js(expression):
                return
            time.sleep(.15)
        raise TimeoutError(expression)

    def size(self, width, height=860):
        self.call("Emulation.setDeviceMetricsOverride",
                  {"width": width, "height": height, "deviceScaleFactor": 1, "mobile": width <= 390})

    def motion(self, value):
        self.call("Emulation.setEmulatedMedia", {"features": [{"name": "prefers-reduced-motion", "value": value}]})

    def visit(self, url):
        previous = self.js("performance.timeOrigin")
        self.call("Page.navigate", {"url": url})
        self.wait(f"location.href === {json.dumps(url)} && performance.timeOrigin !== {previous} && document.readyState === 'complete'")

    def click(self, selector):
        self.js(f"document.querySelector({json.dumps(selector)}).click()")

    def select(self, selector, value):
        self.js(f"(() => {{ const e = document.querySelector({json.dumps(selector)}); "
                f"e.value = {json.dumps(value)}; e.dispatchEvent(new Event('change')); }})()")

    def screenshot(self, output, name):
        result = self.call("Page.captureScreenshot", {"format": "webp", "quality": 86})
        (output / name).write_bytes(base64.b64decode(result["data"]))


def run(browser, base, baseline, output):
    b = browser
    results = {}
    begin = b.call("Page.addScriptToEvaluateOnNewDocument", {"source": """
        Object.defineProperty(navigator, 'hardwareConcurrency', {get: () => 8, configurable: true});
        window.draws = {};
        for (const prototype of [window.WebGLRenderingContext, window.WebGL2RenderingContext]) {
          if (!prototype) continue;
          for (const method of ['drawArrays', 'drawElements', 'drawArraysInstanced', 'drawElementsInstanced']) {
            const original = prototype.prototype[method];
            if (!original) continue;
            prototype.prototype[method] = function (...args) {
              const id = this.canvas.id;
              window.draws[id] = (window.draws[id] || 0) + 1;
              return original.apply(this, args);
            };
          }
        }
    """})["identifier"]
    b.size(1440, 900)
    b.motion("reduce")
    measure = """(() => {
        const navigation = performance.getEntriesByType('navigation')[0];
        const assets = performance.getEntriesByType('resource');
        return {htmlBytes:navigation.encodedBodySize, assetBytes:assets.reduce((n, r) => n + r.encodedBodySize, 0),
            requests:assets.length, loadMs:Math.round(navigation.loadEventEnd),
            stageBundle:assets.some(r => /temple-night|forest[.]js/.test(r.name))};
    })()"""
    if baseline:
        b.visit(baseline)
        results["baselineReduced"] = b.js(measure)
    b.visit(base)
    results["currentReduced"] = b.js(measure)
    assert not b.js("document.body.hasAttribute('data-playing')")
    assert not results["currentReduced"]["stageBundle"]

    b.motion("no-preference")
    b.visit(base + "?watchdog=0&q=low&dpr=1")
    b.wait("document.body.hasAttribute('data-playing') && document.querySelector('#scene-night').classList.contains('is-on')")
    b.wait("(draws['scene-night'] || 0) > 0")
    b.call("Input.dispatchMouseEvent", {"type": "mouseMoved", "x": 120, "y": 130})
    b.wait("Number(document.documentElement.style.getPropertyValue('--px')) < -0.5")
    b.screenshot(output, "integration-temple.webp")
    b.click('[data-scene-pick="forest"]')
    b.wait("document.querySelector('#scene-forest').classList.contains('is-on') && (draws['scene-forest'] || 0) > 0")
    b.screenshot(output, "integration-forest.webp")
    b.click('#stage-toggle')
    b.wait("!document.body.hasAttribute('data-playing')")
    draws = b.js("draws")
    time.sleep(.35)
    assert draws == b.js("draws"), "scene drew after pause"
    b.click('#stage-toggle')
    b.wait("document.body.hasAttribute('data-playing')")
    results["scenes"] = {"temple": True, "forest": True, "pauseResume": True, "pointer": True}

    for width in (320, 390):
        b.size(width)
        b.visit(base)
        b.wait("document.querySelector('#stage-toggle').textContent.includes('播放')")
        assert not b.js("document.body.hasAttribute('data-playing')")
        assert b.js("document.documentElement.scrollWidth") == width
    results["mobilePosterWidths"] = [320, 390]

    b.size(1440, 900)
    off = b.call("Page.addScriptToEvaluateOnNewDocument", {"source": """
        const context = HTMLCanvasElement.prototype.getContext;
        HTMLCanvasElement.prototype.getContext = function (kind, ...args) {
            return kind.includes('webgl') ? null : context.call(this, kind, ...args);
        };
    """})["identifier"]
    b.visit(base)
    b.wait("document.body.hasAttribute('data-playing')")
    assert b.js("!document.querySelector('.scene.is-on') && document.querySelector('#hero-title').offsetHeight > 0")
    b.call("Page.removeScriptToEvaluateOnNewDocument", {"identifier": off})
    b.call("Page.removeScriptToEvaluateOnNewDocument", {"identifier": begin})
    results["webglUnavailableReadable"] = True

    widths = (320, 390, 1440)
    for project in ("dataguard", "signalhub", "ecommerce-order-pipeline"):
        for width in widths:
            b.size(width)
            b.visit(base + f"demos/{project}/index.html")
            assert b.js("!document.querySelector('canvas')")
            assert b.js("document.documentElement.scrollWidth") == width, (project, width)
            assert b.js("[...document.querySelectorAll('a')].some(a => a.href.endsWith('/index.html#projects'))")
        if project == "dataguard":
            b.wait("document.querySelector('#metrics').textContent.includes('72.50%')")
            b.select("#rule", "DUPLICATE_ORDER")
            b.wait("document.querySelectorAll('#issues tr').length === 2")
            b.select("#sample", "warning")
            b.wait("document.querySelector('#issues').textContent.includes('WARNING')")
            b.select("#sample", "empty")
            b.wait("document.querySelector('#result-status').textContent.includes('EMPTY_FILE') && document.querySelector('#data-report').hidden")
            b.select("#sample", "orders")
            b.screenshot(output, "integration-dataguard.webp")
        elif project == "signalhub":
            b.wait("document.querySelectorAll('#catalog button').length === 3")
            b.click('#stages button[value="1"]')
            b.wait("document.querySelector('#timeline-score').textContent.includes('待重算')")
            b.click('#stages button[value="2"]')
            b.wait("""document.querySelector('#timeline-score').textContent.includes('84.5') &&
                document.querySelector('#stages button[aria-pressed="true"]').value === '2'""")
            b.select("#city", "成都")
            b.wait("document.querySelectorAll('#catalog button').length === 1")
            b.select("#category", "backend")
            b.wait("document.querySelectorAll('#catalog button').length === 0")
            b.select("#city", "")
            b.wait("document.querySelectorAll('#catalog button').length === 1")
            b.js("const q = document.querySelector('#query'); q.value='nothing-found'; q.dispatchEvent(new Event('input'));")
            b.wait("document.querySelector('#job-detail').textContent.includes('没有符合')")
            b.js("document.querySelector('#query').value = ''; document.querySelector('#query').dispatchEvent(new Event('input'));")
            b.select("#category", "")
            b.js("Promise.all(document.getAnimations().map(animation => animation.finished.catch(() => {})))")
            b.screenshot(output, "integration-signalhub.webp")
        else:
            b.wait("document.querySelectorAll('#tx-tabs button').length >= 2")
            b.click('#tx-tabs button:nth-child(2)')
            assert b.js("document.querySelector('#tx-panel').textContent.length > 12")
        b.click('a[href="../../index.html#projects"]')
        b.wait("location.hash === '#projects' && !!document.querySelector('#stage')")
    results["demoWidths"] = list(widths)
    results["projectViews"] = 3
    results["nonLoopbackRequests"] = sorted(url for url in b.requests
        if urlsplit(url).scheme in ("http", "https") and urlsplit(url).hostname != "127.0.0.1")
    results["browserErrors"] = b.errors
    results["browser"] = b.call("Browser.getVersion")["product"]
    assert not results["nonLoopbackRequests"] and not b.errors, results
    return results


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", type=int, required=True)
    parser.add_argument("--base", required=True)
    parser.add_argument("--baseline")
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    for url in (args.base, args.baseline):
        if url and (urlsplit(url).hostname != "127.0.0.1" or not url.endswith("/")):
            parser.error("Use a loopback site URL ending in /.")
    args.output.mkdir(parents=True, exist_ok=True)
    browser = Browser(args.port)
    try:
        result = run(browser, args.base, args.baseline, args.output)
        rendered = json.dumps(result, ensure_ascii=False, indent=2) + "\n"
        (args.output / "portfolio-integration.json").write_text(rendered, encoding="utf-8")
        print(rendered)
    finally:
        browser.ws.close()
