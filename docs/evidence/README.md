# Verification evidence

Real Chromium renders (Playwright, headless, **software WebGL**, no GPU) of `docs/`, served at
`http://127.0.0.1:8793/wuyi060531-del/` to imitate the GitHub Pages project sub-path. They are not mock-ups.
Screenshots are stored as WebP (at most 1600 px wide); the SHA-256 is of the stored file and is re-checked by
`scripts/check_site.py`.

| File | What it shows | Size | KB | SHA-256 |
|---|---|---|---|---|
| `desktop-hero.webp` | V2 · 1440x900 @2x, Temple Night live + embers, new hero (title, kicker, CTAs, hero index) | 1600x1000 | 132 | `1eb259473b61b57dd34d5db19594bdacc0c27f83a6f356205e808069769e5459` |
| `desktop-forest.webp` | V2 · 1440x900 @1x, Moss Forest live, Projects section, fluorescent-green accent, card edge light | 1440x900 | 69 | `44aa0d058f6f6418eb1ae0d1d389d4f07427d19a675380695748829ad23a8a76` |
| `tablet-hero.webp` | V2 · 820x1180 @2x (cores overridden to 8 so 3D auto-starts), hero stacked layout | 1600x2302 | 322 | `a5f310b159ba2d9511a8fd6318bf3888ecc5ae9fee513fbaa4b212316625b2e9` |
| `mobile-hero.webp` | V2 · 390x844 @2x, poster mode (3D not auto-started), compact control bar | 780x1688 | 96 | `295df0ba5447a4c9c45749501ef4668f0ddcc2fddb1058d69ded4e7f835decbb` |
| `desktop-no-webgl.webp` | V2 · 1440x900, WebGL forced unavailable: posters only | 1440x900 | 130 | `9199fdda159422129437f934547fc9eedd710ffdf42e10cda33e51bb3ff926d1` |
| `desktop-reduced-motion.webp` | V2 · 1440x900, prefers-reduced-motion: reduce: posters, no effects | 1440x900 | 130 | `c34a0fbe6a1005b90ab11af780bfb152852eb3437ebdc081beadb89b86fe8780` |
| `full-desktop.webp` | V2 · full page, 1440 px wide (scaled to 1200), WebGL off, all sections revealed | 1200x5292 | 278 | `94d6a8acd0b4ff007667b3949e67852f557fc875027f39d105318b5b1b2a2cdd` |
| `full-mobile.webp` | V2 · full page, 390 px wide @2x scaled to 390, WebGL off | 390x9999 | 281 | `2e14079e3a02e878934fbe6e54820179559ad8106c2bde243be3b48222ca25f5` |
| `compare-hero-v1-v2.webp` | Side by side: V1 (81e886a) vs V2 desktop hero | 2590x860 | 128 | `390126f666456ca48f4f1852da553e2c361e3622d0238fe9c121480e273a5753` |
| `compare-mobile-v1-v2.webp` | Side by side: V1 vs V2 mobile hero | 1046x1160 | 106 | `8f5c895d8795af507e25415d730d7828cc3de906de7cb73e0d2e454dc153056c` |
| `v1-desktop-hero.webp` | V1 (81e886a) desktop hero, kept for comparison | 1600x1000 | 77 | `6d11c32a20d70df1ad9b036a9e7c375ab50cfa867eb707e5264578029e58582a` |
| `v1-desktop-forest.webp` | V1 forest, kept for comparison | 1440x900 | 54 | `64ba7cf3591dacd5c745a0e38ebcb04de468e5c18699a140ba660b8fa341f465` |
| `v1-tablet-hero.webp` | V1 tablet hero | 1600x2302 | 140 | `6ed209bc175e7a61fb886c66702a3d74c89c88410a3baeee2ee11c2c97145b12` |
| `v1-mobile-hero.webp` | V1 mobile hero | 780x1688 | 77 | `093472fd1c81771c77efd0f9269c5b242e1738a0f8291c0617d3739120624782` |
| `v1-desktop-no-webgl.webp` | V1 no-WebGL | 1440x900 | 86 | `475b172a2508166ada350301d2a45288000750544cf5c24b2237b366d640f69c` |
| `v1-desktop-reduced-motion.webp` | V1 reduced motion | 1440x900 | 86 | `3c62a970512da6c27f139d88c0d1e16c267f1e1224455919e139b4ff1500d6ff` |

## Checks that were run (2026-11-16, Chromium via Playwright; V2 re-run)

| Check | Result |
|---|---|
| Sub-path hosting | whole page, both scenes, posters, modules and the ecommerce demo load under `/wuyi060531-del/`; `scripts/check_site.py` also rejects any root-absolute path |
| Horizontal overflow at 1440 / 820 / 390 px | none (`scrollWidth == innerWidth` at all three) |
| Page errors (`pageerror`) | 0 on desktop, tablet and phone |
| Requests to any host other than 127.0.0.1 | 0 |
| Images that failed to load | none visible; `dataguard-mobile.webp` is `display:none` below 720 px so it is never requested there |
| 3D auto-start policy | desktop (8 cores): starts after load; tablet 820 px (2 cores here) and phone: not started, no 3D script requested until Play is pressed |
| **Only the visible scene draws** (draw calls counted per canvas) | night playing: forest 0; after switching to forest and the 1.1 s fade: night +0, forest +24 |
| Pause / resume | paused: 0 draw calls in 4 s; resumed: draws again |
| Hidden tab (`document.hidden`) | 0 draw calls while hidden; draws again when visible |
| WebGL contexts | 1 at start (Temple Night), 2 after the first switch (the forest one is created lazily); the inactive scene keeps its context so switching back is instant |
| Context loss (`WEBGL_lose_context` on the night canvas) | night canvas removed, no page error, forest still works; choosing night then shows the night poster instead of a stale frame |
| Slow-device watchdog | in software GL (about 1 fps) the page pauses itself after about 14 s, labels the button "降级 · 播放 Play" and keeps the posters; pressing Play yourself overrides it |
| Scene switching | chips lock forest / night; in Auto, nav links `#projects` -> forest, `#evidence` -> night, `#architecture` -> forest, back to top -> night |
| WebGL unavailable (only `webgl` contexts forced to null) | posters shown, no scene canvas visible, 0 page errors; the upstream Temple Night renderer logs 2 `console.error` lines when it fails |
| `prefers-reduced-motion: reduce` | no 3D script requested and no frame loop until the visitor presses Play; Play then starts it |
| Keyboard | focus ring visible on nav, buttons, chips (2 px solid outline); nav shows `aria-current="location"` for the section in view (architecture verified) |
| Text contrast (rendered background pixels with text hidden, brightest 1 % as worst case) | V2 desktop with live 3D: minimum 4.75:1 over 41 samples (hero, forest/night section heads, cards). V2 mobile poster mode: minimum 5.09:1 over 38 samples (the first measurement found the kicker at 2.96:1 and the English sub-line at 4.18:1; the mobile scrim was strengthened and re-measured) |
| Hero title wrapping | each title phrase stays on one line at 320, 360, 390, 600, 820, 1024, 1440 and 1920 px; no horizontal overflow at any of them |
| V2 interactions (desktop, Chromium) | magnetic button offsets (`--tx` 8.3 px next to the button); glow follows the pointer (`--mx/--my`); parallax variables update; card tilt (`--rx/--ry` ±5°/4° max); click burst draws 401 spark pixels, then the canvas is fully cleared after 1.4 s (loop stops); scroll progress bar and nav current-section update; reveal-on-scroll adds `.in` |
| V2 reduced motion | no magnetic offset, 0 spark pixels, 0 hidden `.reveal` elements, hero animation `none` |
| V2 touch (390x844, `hasTouch`) | tapping the Forest chip switches the scene; tapping the primary CTA scrolls to Projects; no magnetic variables are set; no overflow; 0 page errors |
| V2 resource tests re-run | only the visible scene draws; paused = 0 draws; hidden tab = 0 draws; context loss falls back to the poster and the other scene keeps working; watchdog still degrades after ~14 s in software GL |
| Mobile control bar | starts at y=782, below the last hero button (bottom 749) at 390x844 |
| Ecommerce demo mirror | all 5 files are byte-identical (git blob hashes) to `docs/demo/` at commit `21017a1`, the head of ecommerce-order-pipeline PR #7 on 2026-11-16 |

## Not verified

- **Real-GPU performance.** Software GL here renders about 1 frame per second and Temple Night's start-up blocked the main thread for seconds. Frame rate, main-thread stalls, GPU memory and battery on real hardware were **not measured**. Translucent panels use `backdrop-filter` over the moving scene, which can be costly on weak GPUs; the watchdog and the poster fallback exist because of this uncertainty.
- **Safari / iOS.** A WebKit build could not be downloaded in this environment, so **Safari was not tested**. A code read of the CSS and JS: `-webkit-` prefixes are present for `backdrop-filter`, `mask` (+ `-webkit-mask-composite`) and `background-clip: text`; `requestIdleCallback` and `100svh` have fallbacks; `@property` only animates the accent colour and is optional. Features without a fallback are `color-mix()` (Safari 16.2+; older versions lose the coloured hover borders and tags, the content stays usable), `overflow-x: clip` (16+) and Temple Night's WebGL2 path (Safari 15+); none of that was exercised on WebKit.
- Firefox, real phones and tablets (only emulated viewports), screen readers.
- **Subjective motion quality** of the V2 effects (particles, magnetic buttons, tilt, sparks): verified only that they run, update the expected variables and raise no errors; feel and smoothness on real hardware are for the reviewer to judge. Mouse-only effects are not exercised on touch.
- Console warnings: headless Chromium logs `GPU stall due to ReadPixels` performance warnings from its software GL path; the page never calls `readPixels`.
- Pages deployment itself (not enabled by this change; `docs/README.md` lists the steps).
