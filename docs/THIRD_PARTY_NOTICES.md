# Third-party notices

## ThreeUI Community: Temple Night world

The animated hero background is the **Temple Night** world of
[ThreeUI Community](https://github.com/MengTo/threeui) (commit 68802d5, package
`@designcodeio/threeui`, file `src/shaders/temple-night/templeNightRenderer.js`). The renderer is
used unmodified; it was only bundled together with Three.js and minified into
`assets/temple-night.js`. `assets/stage.js` is this site's own scene manager (pause/resume,
frame-rate cap, visibility pausing, context-loss handling, low-quality mode on small or low-core
devices, cross-fade between scenes). The scene is fully procedural: no image, texture, font or video file is loaded. No ThreeUI
Pro or Beta component, remote thumbnail or preview is used, and this site makes no request to
threeui.com.

ThreeUI's repository states that its Community application code and component code are MIT licensed.
Its licence text follows, as the licence requires:

```text
MIT License

Copyright (c) 2026 Meng To

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Original scenes (not third-party code)

The second background, "Moss Forest" (`assets/forest.js`), and the particle layer (`assets/fx.js`) were
written for this site. The forest's grey-green mood is inspired by the Sylva landing page in ThreeUI
Community, but no Sylva code, image or font is used.

## Three.js

`assets/temple-night.js` includes Three.js r149, MIT License, Copyright © 2010-2023 three.js
authors. Licence: https://github.com/mrdoob/three.js/blob/dev/LICENSE

## Project screenshots and the mirrored demo

Screenshots and `demos/ecommerce-order-pipeline/` come from the author's own repositories
(SignalHub, DataGuard, ecommerce-order-pipeline), all MIT licensed, and show synthetic data only.
See `demos/ecommerce-order-pipeline/SOURCE.md` for the exact source commit of the mirrored demo.

## Fonts

No web fonts are loaded. The site uses the visitor's system fonts.
