# Verification evidence

Real Chromium renders (Playwright, headless, software WebGL) of `docs/index.html`, served from
`127.0.0.1` with `python3 -m http.server`. They are not mock-ups. Screenshots are stored as WebP
(resized to at most 1600 px wide); the SHA-256 is of the stored file.

| File | What it shows | Size | KB | SHA-256 |
|---|---|---|---|---|
| `desktop-hero.webp` | 1440x900 @2x, night scene playing (Temple Night + embers) | 1600x1000 | 78 | `26277640deadb314a194974e1f10cdd46f0daad5f191d6b99834eaa12b818707` |
| `desktop-forest.webp` | 1440x900 @1x, forest scene after scrolling to Projects (auto-switched) | 1440x900 | 54 | `d6fcb46e74e898811a873f74595621109ca4ac79d6d8172ed4613a39eb69d044` |
| `tablet-hero.webp` | 820x1180 @2x, 3D not auto-started (still poster, Play button) | 1600x2302 | 140 | `6ed209bc175e7a61fb886c66702a3d74c89c88410a3baeee2ee11c2c97145b12` |
| `mobile-hero.webp` | 390x844 @2x, 3D not auto-started (still poster, compact controls, Play button) | 780x1688 | 77 | `093472fd1c81771c77efd0f9269c5b242e1738a0f8291c0617d3739120624782` |
| `desktop-no-webgl.webp` | 1440x900, WebGL forced unavailable: posters only | 1440x900 | 86 | `7543ce667abfffef9e65df1b05ffa5a0261a46c3e22a67e0e13b60f40b75d867` |
| `desktop-reduced-motion.webp` | 1440x900, prefers-reduced-motion: reduce: posters only, 3D scripts not requested | 1440x900 | 86 | `3c62a970512da6c27f139d88c0d1e16c267f1e1224455919e139b4ff1500d6ff` |

## Checks that were run (2026-11-15, Chromium via Playwright)

| Check | Result |
|---|---|
| Horizontal overflow at 1440 / 820 / 390 px | none (`scrollWidth == innerWidth` at all three) |
| Page errors (`pageerror`) | 0 on desktop, tablet and phone |
| Requests to any host other than 127.0.0.1 | 0 |
| Images that failed to load | none visible; `dataguard-mobile.webp` is `display:none` below 720 px so it is never requested there |
| 3D auto-start policy | desktop (8 cores): starts after load; tablet 820 px (2 cores here) and phone: not started, no 3D script requested until Play is pressed |
| Animation loop (rAF callbacks per 4 s, software GL) | playing 3, after Pause 0, after Play 3 (software rendering is ~1 fps, so these counts only prove start/stop, not speed) |
| Scene switching | chip "雾林" -> forest, "夜庙" -> night; in Auto, nav links `#projects` -> forest, `#evidence` -> night, `#architecture` -> forest, back to top -> night |
| WebGL unavailable (only `webgl` contexts forced to null) | posters shown, no scene canvas visible, 0 page errors; the upstream Temple Night renderer logs 2 `console.error` lines when it fails |
| `prefers-reduced-motion: reduce` | no 3D script requested and no frame loop until the visitor presses Play; Play then starts it |
| Keyboard | first 9 tab stops all show a 3 px solid focus outline |
| Text contrast (computed from rendered background pixels with text hidden, brightest 1 % of pixels as worst case, scene paused) | night hero 7.4:1 to 14.0:1; forest projects 9.5:1 to 13.1:1 (the muted section subtitle measured 5.6:1 and was then lightened); night evidence 9.0:1 to 19.3:1; forest stack 6.7:1 to 14.4:1 |
| Mobile controls overlap | the fixed control bar starts at y=782, below the last hero button (bottom 749) at 390x844 |

## Not verified

- **Console warnings on desktop:** headless Chromium (software GL) logs 4 `GL Driver Message ... GPU stall due to ReadPixels` performance warnings when the canvas starts. They appear without any screenshot being taken and the page never calls `readPixels`; they come from the software GL path. Not checked on a real GPU.
- **Real-GPU frame rate, main-thread stalls and battery use.** Software GL here renders about 1 frame per second and the Temple Night set-up blocked the main thread for seconds; a real GPU is expected to be far faster but that was not measured. The Moss Forest shader itself renders a 1600x900 frame in well under a second even in software.
- Particle layer motion quality (checked only that it draws without errors).
- Firefox, Safari, real devices, screen readers.
- Pages deployment itself (not enabled by this change).
