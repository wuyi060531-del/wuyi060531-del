# Verification evidence

Real Chromium renders (Playwright, headless, **software WebGL**, no GPU) of `docs/`, served at
`http://127.0.0.1:8793/wuyi060531-del/` to imitate the GitHub Pages project sub-path. They are not mock-ups.
Screenshots are stored as WebP (at most 1600 px wide); the SHA-256 is of the stored file and is re-checked by
`scripts/check_site.py`.

| File | What it shows | Size | KB | SHA-256 |
|---|---|---|---|---|
| `desktop-hero.webp` | 1440x900 @2x, night scene playing (Temple Night + embers) | 1600x1000 | 77 | `6d11c32a20d70df1ad9b036a9e7c375ab50cfa867eb707e5264578029e58582a` |
| `desktop-forest.webp` | 1440x900 @1x, forest scene after scrolling to Projects (auto-switched) | 1440x900 | 54 | `64ba7cf3591dacd5c745a0e38ebcb04de468e5c18699a140ba660b8fa341f465` |
| `tablet-hero.webp` | 820x1180 @2x, 3D not auto-started (still poster, Play button) | 1600x2302 | 140 | `6ed209bc175e7a61fb886c66702a3d74c89c88410a3baeee2ee11c2c97145b12` |
| `mobile-hero.webp` | 390x844 @2x, 3D not auto-started (still poster, compact controls, Play button) | 780x1688 | 77 | `093472fd1c81771c77efd0f9269c5b242e1738a0f8291c0617d3739120624782` |
| `desktop-no-webgl.webp` | 1440x900, WebGL forced unavailable: posters only | 1440x900 | 86 | `475b172a2508166ada350301d2a45288000750544cf5c24b2237b366d640f69c` |
| `desktop-reduced-motion.webp` | 1440x900, prefers-reduced-motion: reduce: posters only, 3D scripts not requested | 1440x900 | 86 | `3c62a970512da6c27f139d88c0d1e16c267f1e1224455919e139b4ff1500d6ff` |

## Checks that were run (2026-11-16, Chromium via Playwright)

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
| Keyboard | first 9 tab stops all show a 3 px solid focus outline |
| Text contrast (from rendered background pixels with text hidden, brightest 1 % of pixels as worst case, scene paused) | night hero 7.4:1 to 14.0:1; forest projects 9.5:1 to 13.1:1 (the muted subtitle measured 5.6:1 and was lightened); night evidence 9.0:1 to 19.3:1; forest stack 6.7:1 to 14.4:1. Measured before the blur radius was reduced from 14 px to 10 px; panels stay at 80 % opacity |
| Mobile control bar | starts at y=782, below the last hero button (bottom 749) at 390x844 |
| Ecommerce demo mirror | all 5 files are byte-identical (git blob hashes) to `docs/demo/` at commit `21017a1`, the head of ecommerce-order-pipeline PR #7 on 2026-11-16 |

## Not verified

- **Real-GPU performance.** Software GL here renders about 1 frame per second and Temple Night's start-up blocked the main thread for seconds. Frame rate, main-thread stalls, GPU memory and battery on real hardware were **not measured**. Translucent panels use `backdrop-filter` over the moving scene, which can be costly on weak GPUs; the watchdog and the poster fallback exist because of this uncertainty.
- **Safari / iOS.** A WebKit build could not be downloaded in this environment, so **Safari was not tested**. A code read found nothing Safari lacks without a fallback (`requestIdleCallback` has one, `-webkit-backdrop-filter` is set), but features such as `color-mix()`, `svh` and `aspect-ratio` need Safari 15.4-16.2 or newer, and Temple Night's WebGL2 path is untested there.
- Firefox, real phones and tablets (only emulated viewports), screen readers.
- Particle layer motion quality (only that it draws without errors); the 3D card tilt (mouse only).
- Console warnings: headless Chromium logs `GPU stall due to ReadPixels` performance warnings from its software GL path; the page never calls `readPixels`.
- Pages deployment itself (not enabled by this change).
