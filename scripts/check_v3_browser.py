#!/usr/bin/env python3
"""V3 navigation, keyboard, responsive, and fallback checks on a loopback Pages preview."""
import argparse
import json
from pathlib import Path
from urllib.parse import urlsplit

from check_demo_browser import Browser, run


WIDTHS = (320, 375, 390, 768, 1024, 1440, 1920)
DEMOS = ("dataguard", "signalhub", "ecommerce-order-pipeline")


def key(browser, value, number):
    for kind in ("keyDown", "keyUp"):
        event = {"type": kind, "key": value, "code": value,
                 "windowsVirtualKeyCode": number, "nativeVirtualKeyCode": number}
        if kind == "keyDown" and value == "Enter":
            event["text"] = "\r"
        browser.call("Input.dispatchKeyEvent", event)


def check_hero_and_anchors(b, base, output):
    nav = 'a[data-nav="architecture"]'
    intro = '#architecture .section-head h2, #architecture .section-head p'
    card = "#flow-signalhub"
    measurements = {}

    for width, height in ((320, 700), (375, 812), (390, 844), (768, 900), (1440, 900)):
        b.size(width, height)
        b.visit(base)
        b.wait("!document.querySelector('.stage-controls').hidden")
        hero_gap = b.js("""Math.round(document.querySelector('#hero-title').getBoundingClientRect().top -
            document.querySelector('.site-header').getBoundingClientRect().bottom)""")
        assert b.js("""document.documentElement.lang === 'zh-CN' &&
            document.documentElement.scrollWidth === innerWidth &&
            [...document.querySelectorAll('.lead-phrase')].map(n => n.textContent).join('/') === '毕业/数据开发/Java 后端/AI 应用开发/在本机运行/、带测试' &&
            [...document.querySelectorAll('.lead-phrase')].every(n => n.getClientRects().length === 1) &&
            document.querySelector('.cta a[href="https://github.com/wuyi060531-del"]').getBoundingClientRect().height >= 44 &&
            document.querySelector('[data-tour-start]').getBoundingClientRect().height >= 44"""), width
        b.screenshot(output, "v3-polish-desktop.webp" if width == 1440 else f"v3-polish-{width}.webp")

        def visible_distance(selector):
            return b.js(f"""(() => {{
                const header = document.querySelector('.site-header').getBoundingClientRect().bottom;
                const elements = [...document.querySelectorAll({json.dumps(selector)})];
                const rects = elements.map(element => element.getBoundingClientRect());
                if (!rects.length || rects.some(rect => rect.bottom > innerHeight)) return -1;
                return Math.round(Math.min(...rects.map(rect => rect.top)) - header);
            }})()""")

        x, y = b.js(f"""(() => {{
            const r = document.querySelector({json.dumps(nav)}).getBoundingClientRect();
            return [r.x + r.width / 2, r.y + r.height / 2];
        }})()""")
        for kind in ("mousePressed", "mouseReleased"):
            b.call("Input.dispatchMouseEvent", {"type": kind, "button": "left", "x": x, "y": y, "clickCount": 1})
        b.wait("location.hash === '#architecture'")
        clicked = visible_distance(intro)
        if width == 1440:
            b.wait("document.body.dataset.scene === 'forest'")
            b.screenshot(output, "v3-polish-architecture.webp")

        b.visit(base + "index.html#architecture")
        direct = visible_distance(intro)
        b.visit(base)
        b.js(f"document.querySelector({json.dumps(nav)}).focus()")
        key(b, "Enter", 13)
        b.wait("location.hash === '#architecture'")
        keyboard = visible_distance(intro)
        key(b, "Tab", 9)
        assert b.js("document.activeElement === document.querySelector('#flow-signalhub summary')"), width
        assert min(clicked, direct, keyboard) >= 12, (width, clicked, direct, keyboard)

        b.click('a[href="#flow-signalhub"]')
        b.wait("location.hash === '#flow-signalhub'")
        card_click = visible_distance(card + " h3")
        assert b.js("document.querySelector('#flow-signalhub').getBoundingClientRect().top >= document.querySelector('.site-header').getBoundingClientRect().bottom + 12"), width
        b.visit(base + "index.html#flow-signalhub")
        card_direct = visible_distance(card + " h3")
        assert b.js("document.querySelector('#flow-signalhub').getBoundingClientRect().top >= document.querySelector('.site-header').getBoundingClientRect().bottom + 12"), width
        assert min(card_click, card_direct) >= 12, (width, card_click, card_direct)
        measurements[width] = {"heroGapPx": hero_gap, "introGapsPx": [clicked, direct, keyboard],
                               "cardHeadingGapsPx": [card_click, card_direct]}

    b.size(320, 700)
    b.visit(base)
    b.click('[data-language="en"]')
    b.wait("document.documentElement.lang === 'en'")
    assert b.js("document.querySelector('.hero .lead').textContent.includes('data engineering, Java backend, or applied AI.')")
    b.visit(base + "index.html#flow-signalhub")
    b.wait("document.documentElement.lang === 'en'")
    b.wait("document.querySelector('#flow-signalhub').getBoundingClientRect().top >= document.querySelector('.site-header').getBoundingClientRect().bottom + 12")
    b.click('[data-language="zh"]')
    return measurements


def check_v3(b, base, output):
    b.call("Page.bringToFront")
    b.motion("reduce")
    b.size(1440, 900)
    b.visit(base)
    b.wait("!document.querySelector('.language').hidden")
    assert b.js("document.documentElement.lang === 'zh-CN'")
    assert not b.js("performance.getEntriesByType('resource').some(x => x.name.endsWith('/english.json'))")
    assert b.js("document.querySelector('[data-tour-panel]').hidden")
    b.js("window.languageNavigationStart = performance.timeOrigin")
    b.click('[data-language="en"]')
    b.wait("document.documentElement.lang === 'en'")
    assert b.js("window.languageNavigationStart === performance.timeOrigin")
    assert b.js("document.querySelector('#hero-title').textContent.includes('Start with data.')")
    assert b.js("document.querySelectorAll('[data-language][aria-pressed=true]').length === 1")
    assert b.js("document.querySelector('.project img').alt.includes('synthetic')")
    assert b.js("document.querySelector('#about-title').textContent === 'About AI assistance'")
    for width in WIDTHS:
        for lang in ("en", "zh"):
            b.click(f'[data-language="{lang}"]')
            b.size(width, 840)
            assert b.js("""(() => {
                const root = document.documentElement;
                const nav = document.querySelector('.site-header nav');
                const stage = document.querySelector('.stage-controls').getBoundingClientRect();
                return root.scrollWidth === innerWidth && nav.scrollWidth <= nav.clientWidth + 1 &&
                    stage.left >= 0 && stage.right <= innerWidth &&
                    document.querySelector('.site-header').getBoundingClientRect().bottom <
                    document.querySelector('#hero-title').getBoundingClientRect().top;
            })()"""), (width, lang)
    b.size(844, 390)
    assert b.js("document.documentElement.scrollWidth === innerWidth")
    layout = check_hero_and_anchors(b, base, output)
    b.visit(base)
    b.size(1440, 900)
    b.click('[data-language="en"]')
    b.js("document.querySelector('[data-tour-start]').focus()")
    assert b.js("document.activeElement.matches('[data-tour-start]')")
    key(b, "Enter", 13)
    try:
        b.wait("document.activeElement.matches('[data-tour-panel] h2')")
    except TimeoutError:
        print(b.js("""({active:document.activeElement.outerHTML.slice(0,190),
            tour:document.querySelector('[data-tour-panel]').hidden,
            status:document.querySelector('[data-tour-status]').textContent,
            module:performance.getEntriesByType('resource').some(x=>x.name.endsWith('/journey.js'))})"""))
        raise
    for step in range(2, 7):
        b.click('[data-tour-next]')
        assert b.js(f"document.activeElement.textContent.startsWith('{step}/6')")
    b.click('[data-tour-back]')
    assert b.js("document.activeElement.textContent.startsWith('5/6')")
    key(b, "Escape", 27)
    assert b.js("document.querySelector('[data-tour-panel]').hidden && document.activeElement.hasAttribute('data-tour-start')")
    assert b.js("document.querySelectorAll('#projects .links a[href^=demos]').length === 3")

    b.click('[data-language="zh"]')
    b.js("document.querySelector('#flow-signalhub summary').focus()")
    key(b, "Enter", 13)
    assert b.js("document.querySelector('#flow-signalhub details').open")
    b.click('#flow-signalhub li:nth-child(2) summary')
    assert b.js("!document.querySelector('#flow-signalhub details').open && document.querySelector('#flow-signalhub li:nth-child(2) details').open")
    b.js("document.getElementById('flow-signalhub').scrollIntoView()")
    b.screenshot(output, "v3-project-flow.webp")

    b.click('[data-language="en"]')
    for project in DEMOS:
        b.size(390, 844)
        b.visit(base + f"demos/{project}/index.html")
        b.wait("document.documentElement.lang === 'en'")
        assert b.js("document.querySelector('[data-i=demoBack]').textContent === 'Back to portfolio'")
        assert b.js("document.querySelector('.demo-scope').textContent.includes('in Chinese')")
        assert b.js("document.documentElement.scrollWidth === innerWidth")
    b.click('[data-language="zh"]')

    b.call("Emulation.setScriptExecutionDisabled", {"value": True})
    for page, selector in (
        ("index.html", "#hero-title"),
        ("demos/dataguard/index.html", "noscript p"),
        ("demos/signalhub/index.html", "noscript p"),
        ("demos/ecommerce-order-pipeline/index.html", "#static-summary"),
    ):
        b.visit(base + page)
        assert b.js(f"document.querySelector({json.dumps(selector)}).offsetHeight > 0"), page
    b.visit(base + "index.html")
    b.click("#flow-dataguard summary")
    assert b.js("document.querySelector('#flow-dataguard details').open")
    b.size(320, 700)
    b.visit(base + "#flow-signalhub")
    assert b.js("document.querySelector('#flow-signalhub').getBoundingClientRect().top >= document.querySelector('.site-header').getBoundingClientRect().bottom + 12")
    b.call("Emulation.setScriptExecutionDisabled", {"value": False})

    b.motion("no-preference")
    b.size(1440, 900)
    slow = b.call("Page.addScriptToEvaluateOnNewDocument", {"source": """
Object.defineProperty(navigator, 'hardwareConcurrency', {get: () => 8});
const context = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function(kind, ...args) {
  return kind.includes('webgl') ? null : context.call(this, kind, ...args);
};
Object.defineProperty(document, 'hidden', {get: () => false});
window.slowFrames = 0;
window.requestAnimationFrame = (fn) => setTimeout(() => { slowFrames++; fn(performance.now()); }, 150);
window.cancelAnimationFrame = clearTimeout;
window.requestIdleCallback = (fn) => setTimeout(fn, 0);
"""})["identifier"]
    b.visit(base)
    try:
        b.wait("document.body.dataset.degraded === '1'")
    except TimeoutError:
        print(b.js("""({stage:document.body.dataset,available:!document.querySelector('.stage-controls').hidden,
          cores:navigator.hardwareConcurrency,width:innerWidth,reduced:matchMedia('(prefers-reduced-motion: reduce)').matches,
          hidden:document.hidden,slowFrames:window.slowFrames})"""))
        raise
    assert b.js("!document.body.hasAttribute('data-playing')")
    b.call("Page.removeScriptToEvaluateOnNewDocument", {"identifier": slow})

    save_data = b.call("Page.addScriptToEvaluateOnNewDocument", {"source": """
Object.defineProperty(navigator, 'hardwareConcurrency', {get: () => 8});
Object.defineProperty(navigator, 'connection', {get: () => ({ saveData:true })});
"""})["identifier"]
    b.visit(base)
    b.js("new Promise(resolve => setTimeout(resolve, 650))")
    assert not b.js("document.body.hasAttribute('data-playing')")
    assert not b.js("performance.getEntriesByType('resource').some(r => /temple-night|forest[.]js/.test(r.name))")
    b.call("Page.removeScriptToEvaluateOnNewDocument", {"identifier": save_data})

    # A normal unforced scene must stop when its context fails; inject a visibility change
    # to exercise the same scheduling handler without switching away from the CDP target.
    lose = b.call("Page.addScriptToEvaluateOnNewDocument", {"source": """
Object.defineProperty(navigator, 'hardwareConcurrency', {get: () => 8});
window.sceneContexts = {};
window.testHidden = false;
window.requestAnimationFrame = (fn) => setTimeout(() => fn(performance.now()), 25);
window.cancelAnimationFrame = clearTimeout;
Object.defineProperty(document, 'hidden', {get: () => testHidden});
const get = HTMLCanvasElement.prototype.getContext;
HTMLCanvasElement.prototype.getContext = function(kind, ...args) {
  const ctx = get.call(this, kind, ...args);
  if (ctx && kind.includes('webgl')) sceneContexts[this.id] = ctx;
  return ctx;
};
window.forestDraws = 0;
const draw = WebGLRenderingContext.prototype.drawArrays;
WebGLRenderingContext.prototype.drawArrays = function(...args) { forestDraws++; return draw.apply(this, args); };
"""})["identifier"]
    b.motion("reduce")
    b.visit(base + "?watchdog=0&q=low&dpr=1")
    b.click('[data-scene-pick="forest"]')
    b.click('#stage-toggle')
    b.wait("forestDraws > 0 && document.querySelector('#scene-forest').classList.contains('is-on')")
    b.js("window.testHidden=true; document.dispatchEvent(new Event('visibilitychange'))")
    count = b.js("forestDraws")
    assert b.js("new Promise(resolve => setTimeout(() => resolve(forestDraws), 350))") == count
    b.js("window.testHidden=false; document.dispatchEvent(new Event('visibilitychange'))")
    b.wait(f"forestDraws > {count}")
    assert b.js("Boolean(sceneContexts['scene-forest'].getExtension('WEBGL_lose_context'))")
    b.js("sceneContexts['scene-forest'].getExtension('WEBGL_lose_context').loseContext()")
    b.wait("!document.querySelector('#scene-forest').classList.contains('is-on')")
    b.call("Page.removeScriptToEvaluateOnNewDocument", {"identifier": lose})
    assert not b.errors, b.errors
    external = sorted(url for url in b.requests if urlsplit(url).scheme in ("https", "http") and urlsplit(url).netloc != urlsplit(base).netloc)
    assert not external, external
    return {"widths": WIDTHS, "languages": ["zh-CN", "en"], "landscape": [844, 390], "heroAndAnchors": layout,
            "tour": "keyboard, six steps, back and Escape", "architecture": "keyboard and no JavaScript",
            "demos": DEMOS, "noScriptPages": 4, "watchdog": "simulated low frame rate",
            "saveData": "no scene load", "contextLoss": "actual WEBGL_lose_context on forest",
            "visibilityPause": "simulated event", "pageExceptions": len(b.errors), "externalRequests": external}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--port", required=True, type=int)
    parser.add_argument("--base", required=True)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    if urlsplit(args.base).hostname != "127.0.0.1" or not args.base.endswith("/"):
        parser.error("Use a loopback Pages preview URL ending in /.")
    args.output.mkdir(parents=True, exist_ok=True)
    browser = Browser(args.port)
    try:
        result = check_v3(browser, args.base, args.output)
        browser.call("Page.bringToFront")
        inherited = run(browser, args.base, None, args.output)
        output = json.dumps({"v3": result, "retained": inherited}, ensure_ascii=False, indent=2) + "\n"
        (args.output / "v3-browser-results.json").write_text(output, encoding="utf-8")
        print(output)
    finally:
        browser.ws.close()
