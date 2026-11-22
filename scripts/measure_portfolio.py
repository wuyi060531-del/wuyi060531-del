#!/usr/bin/env python3
"""Compare two portfolio checkouts in identical scratch Chrome profiles."""
import argparse
import json
import os
import subprocess
import tempfile
import threading
import time
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

from check_demo_browser import Browser

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("source", type=Path, help="checkout or archive containing docs/")
parser.add_argument("destination", type=Path)
parser.add_argument("label", help="output filename prefix")
args = parser.parse_args()
source, destination, label = args.source.resolve(), args.destination, args.label
if not (source / "docs/index.html").is_file():
    parser.error("source must contain docs/index.html")
destination.mkdir(parents=True, exist_ok=True)
chrome = os.environ.get("CHROME_BIN", "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome")

class Handler(SimpleHTTPRequestHandler):
    def log_message(self, *_): pass
    def handle(self):
        try:
            super().handle()
        except (BrokenPipeError, ConnectionResetError):
            pass

with tempfile.TemporaryDirectory(prefix="portfolio-benchmark.", ignore_cleanup_errors=True) as tmp:
    root = Path(tmp)
    (root / "wuyi060531-del").symlink_to(source / "docs", target_is_directory=True)
    profile = root / "profile"
    with ThreadingHTTPServer(("127.0.0.1", 0), partial(Handler, directory=tmp)) as server, (destination / (label+"-chrome.log")).open("w") as log:
        threading.Thread(target=server.serve_forever, daemon=True).start()
        base = f"http://127.0.0.1:{server.server_port}/wuyi060531-del/"
        with subprocess.Popen([chrome, "--headless=new", "--remote-debugging-port=0", f"--user-data-dir={profile}", "--use-gl=angle", "--use-angle=swiftshader", "--enable-unsafe-swiftshader", "--disable-background-networking", "--no-first-run", "about:blank"], stdout=log, stderr=log) as proc:
            try:
                port_file = profile / "DevToolsActivePort"
                for _ in range(100):
                    if port_file.exists():
                        break
                    time.sleep(.1)
                b = Browser(int(port_file.read_text().splitlines()[0]))
                b.size(1440, 900)
                b.call("Page.addScriptToEvaluateOnNewDocument", {"source": """
Object.defineProperty(navigator,'hardwareConcurrency',{get:()=>8});
window.timeline={draw:{},long:[]};
new PerformanceObserver(list=>timeline.long.push(...list.getEntries().map(e=>e.duration))).observe({type:'longtask',buffered:true});
for(const c of [window.WebGLRenderingContext,window.WebGL2RenderingContext]){
  if(!c)continue;
  for(const name of ['drawArrays','drawElements','drawArraysInstanced','drawElementsInstanced']){
    const fn=c.prototype[name]; if(!fn)continue;
    c.prototype[name]=function(...args){
      const record=timeline.draw[this.canvas.id] ||= {at:performance.now(),frames:0,last:-1};
      const now=performance.now();
      if(now-record.last>4){record.frames++;record.last=now;}
      return fn.apply(this,args);
    };
  }
}"""})
                reduced = []
                b.motion("reduce")
                for _ in range(3):
                    b.visit(base)
                    b.wait("performance.getEntriesByName('first-contentful-paint').length > 0")
                    reduced.append(b.js(r"""(() => {
   const nav=performance.getEntriesByType('navigation')[0], res=performance.getEntriesByType('resource');
   const core=res.filter(e=>/\.(?:css|js)(?:\?|$)/.test(e.name));
   return {fcpMs:performance.getEntriesByName('first-contentful-paint')[0].startTime,
     loadMs:nav.loadEventEnd, html:nav.encodedBodySize,
     css:core.filter(e=>e.name.endsWith('.css')).reduce((n,e)=>n+e.encodedBodySize,0),
     js:core.filter(e=>e.name.endsWith('.js')).reduce((n,e)=>n+e.encodedBodySize,0),
     requests:res.length+1, transferBytes:res.reduce((n,e)=>n+e.transferSize,nav.transferSize),
     stageLoaded:res.some(e=>/temple-night|forest[.]js/.test(e.name)),
     heapBytes:performance.memory?.usedJSHeapSize, longTaskMs:timeline.long};
 })()"""))
                b.screenshot(destination,label+"-desktop.webp")
                normal=[]
                b.motion("no-preference")
                for _ in range(3):
                    b.visit(base+"?watchdog=0&q=low&dpr=1")
                    b.wait("!!timeline.draw['scene-night']")
                    b.js("new Promise(resolve=>setTimeout(resolve,300))")
                    night=b.js("""(() => {
 const t=timeline.draw['scene-night']; const mod=performance.getEntriesByType('resource').find(r=>r.name.includes('temple-night.js'));
 return {requestStart:mod.startTime, moduleCompleteMs:mod.responseEnd, moduleBytes:mod.encodedBodySize, firstDrawMs:t.at, initAfterDownloadMs:t.at-mod.responseEnd, fcpMs:performance.getEntriesByName('first-contentful-paint')[0]?.startTime};
})()""")
                    b.screenshot(destination,label+"-night.webp")
                    b.js("window.switchStarted=performance.now();document.querySelector('[data-scene-pick=forest]').click()")
                    b.wait("!!timeline.draw['scene-forest']")
                    b.js("new Promise(resolve=>setTimeout(resolve,1150))")
                    b.screenshot(destination,label+"-forest.webp")
                    switch=b.js("""(() => {
 const t=timeline.draw['scene-forest']; return {firstDrawMs:t.at-switchStarted, longTaskMs:timeline.long};
})()""")
                    scrolling=b.js("""new Promise(resolve=>{
 const start=performance.now(), frames=[];
 const root=document.documentElement; root.style.scrollBehavior='auto';
 const tick=now=>{
   frames.push(now); scrollTo(0,Math.min(2600,(now-start)*1.5));
   if(now-start<1500)requestAnimationFrame(tick);
   else{const intervals=frames.slice(1).map((t,i)=>t-frames[i]).sort((a,b)=>a-b);
     resolve({rafFps:(frames.length-1)*1000/(frames.at(-1)-frames[0]),
       p95Ms:intervals[Math.floor(intervals.length*.95)],longTaskMs:timeline.long,heapBytes:performance.memory?.usedJSHeapSize});}
 };requestAnimationFrame(tick);
})""")
                    normal.append({"night":night,"switch":switch,"scroll":scrolling})
                b.size(390, 844)
                b.visit(base)
                b.screenshot(destination,label+"-mobile.webp")
                mobile=b.js("""({posterOnly:!document.body.hasAttribute('data-playing'),stageLoaded:performance.getEntriesByType('resource').some(e=>/temple-night|forest[.]js/.test(e.name)),width:document.documentElement.scrollWidth})""")
                result={"browser":b.call("Browser.getVersion")["product"],"width":1440,"height":900,"renderer":"SwiftShader; both runs use q=low&dpr=1 in 3D","cache":"disabled; first sample starts a fresh browser","reduced":reduced,"normal":normal,"mobile":mobile}
                (destination/(label+"-metrics.json")).write_text(json.dumps(result,indent=2)+"\n")
                print(json.dumps(result))
                b.ws.close()
            finally:
                proc.terminate()
                try: proc.wait(8)
                except subprocess.TimeoutExpired: proc.kill(); proc.wait()
