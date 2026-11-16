# Portfolio site

Static page for GitHub Pages (no build step, no dependencies, no network requests at runtime).

- Preview: `python3 -m http.server -d docs 8000`, then open http://127.0.0.1:8000
- To publish after review: repository Settings, Pages, "Deploy from a branch", branch `main`, folder `/docs`.
  Nothing is published by merging alone; Pages has to be switched on. The address would be
  `https://wuyi060531-del.github.io/wuyi060531-del/`.
- Link previews: `index.html` carries Open Graph / Twitter-card tags and `assets/og-image.jpg` (1200x630, a real frame of the page). `og:image` must be an absolute URL, so it points at the address above; if the site is served from another address or a custom domain, update that one URL.
- `assets/temple-night.js` is ThreeUI Community's Temple Night world bundled with Three.js (both MIT). `assets/stage.js` (scene manager), `assets/forest.js` (original forest shader), `assets/fx.js` (particles) and `assets/ui.js` (pointer glow, magnetic buttons, section state) are this site's own code. Licence text: `THIRD_PARTY_NOTICES.md`.
- `demos/ecommerce-order-pipeline/` is a snapshot of that project's static demo; see its `SOURCE.md`.
- Checks that were run, and the ones that were not: `evidence/README.md`.
- Built with AI assistance (Claude) at the owner's direction.
