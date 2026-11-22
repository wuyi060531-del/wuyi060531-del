# Portfolio site

Static page for GitHub Pages (no build step, no runtime dependencies, no third-party runtime requests).

- Preview: `python3 -m http.server -d docs 8000`, then open http://127.0.0.1:8000
- To publish after review: repository Settings, Pages, "Deploy from a branch", branch `main`, folder `/docs`.
  Nothing is published by merging alone; Pages has to be switched on. The address would be
  `https://wuyi060531-del.github.io/wuyi060531-del/`.
- Link previews: `index.html` carries Open Graph / Twitter-card tags and `assets/og-image.jpg` (1200x630, a real frame of the page). `og:image` must be an absolute URL, so it points at the address above; if the site is served from another address or a custom domain, update that one URL.
- `assets/temple-night.js` is ThreeUI Community's Temple Night world bundled with Three.js (both MIT). `assets/stage.js` (scene manager), `assets/forest.js` (original forest shader), `assets/fx.js` (particles) and `assets/ui.js` (pointer glow, magnetic buttons, section state) are this site's own code. Licence text: `THIRD_PARTY_NOTICES.md`.
- `demos/ecommerce-order-pipeline/` is a snapshot of that project's static demo; see its `SOURCE.md`.
- Checks that were run, and the ones that were not: `evidence/README.md`.
- Built with AI assistance (Claude and Codex) at the owner's direction.

## 演示、出处与复核

- [订单 ETL](demos/ecommerce-order-pipeline/index.html) 复用上游候选 PR #7 的阶段、异常、对账和事务重放交互。四个数据与样式脚本文件保持原字节，HTML 增加作品集导航。 [镜像说明](demos/ecommerce-order-pipeline/SOURCE.md)
- [DataGuard](demos/dataguard/index.html) 回放 Java/H2 接收三份合成 CSV 后返回的报告和失败任务。站内筛选只读取已记录的规则、行号、原值和诊断。页面的打开状态与运行失败状态单独展示。 [快照](demos/dataguard/snapshot.json)
- [SignalHub](demos/signalhub/index.html) 回放 Java、Python Worker 和临时 PostgreSQL 产生的三个版本阶段，以及真实 API 返回的三个虚构岗位。检索、城市和方向过滤只作用于当前快照。 [快照](demos/signalhub/snapshot.json)

各演示页把未合并的上游 PR 与用于采集的固定提交分开。页面回放无需数据库、不上传输入、不执行规则检查或匹配计算，三套后端通过[首页运行说明](index.html#reproduce)单独启动、停止和重置。

### 重采两个快照

先按首页运行说明使用页面注明的上游 SHA。DataGuard 必须指向刚启动、没有任何资料的回环 H2 实例。SignalHub 需要在其 Python 环境运行采集器，并提供 JDK 21、已打包 JAR 和 PostgreSQL 17 工具。脚本只保留合成数据投影，忽略运行 ID 和报告时间。

```sh
python scripts/capture_project_demos.py dataguard /path/to/dataguard bcbabb0e9b4fca7cd26d3234e640d3f7a4a08cb3 --dataguard-url http://127.0.0.1:18094
python scripts/capture_project_demos.py signalhub /path/to/signalhub 5e3685912198fb5a4c5dc85eec59642d49690155
python3.12 scripts/check_site.py --update
python3.12 scripts/check_site.py
```

重采 DataGuard 时 Python 环境须有 `httpx`，SignalHub 使用项目本身的测试依赖即可。站点运行仍不需要这些依赖。新演示中的合成输入和结果来自两个 MIT 项目，上游代码与声明见各演示页的固定源码链接。PR 链接提供当前状态，发布工程代码不会自行变更本站的固定快照。

### 复跑浏览器检查

在仓库根目录运行站点检查。要测 GitHub Pages 子路径，将 `docs/` 挂在回环 HTTP 服务的 `/wuyi060531-del/` 下。用独立临时用户目录启动 Chrome，打开一个空白页并启用本地 CDP 端口。此脚本额外使用 Python 的 `websocket-client`。

```sh
python3.12 scripts/check_site.py
# 给 Chrome 加以下参数。将 CHROME 替换为本机 Chrome 可执行文件路径。
"$CHROME" --headless=new --remote-debugging-port=39231 --user-data-dir="$(mktemp -d)" \
  --use-gl=angle --use-angle=swiftshader --enable-unsafe-swiftshader about:blank
# 在另一终端中运行。--baseline 可选，指向相同服务上原 main 的独立站点路径。
python scripts/check_demo_browser.py --port 39231 \
  --base http://127.0.0.1:38601/wuyi060531-del/ --output /tmp/portfolio-evidence
```

[验收记录和实际截图](evidence/README.md#project-integration-checks-2026-11-21) 记录了本次操作、观察和未测试的环境。
