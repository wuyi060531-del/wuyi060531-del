# Verification evidence

Real Chromium renders (Playwright, headless, software WebGL) of `docs/index.html`, served from
`127.0.0.1` with `python3 -m http.server`. They are not mock-ups. Screenshots are stored as WebP
(resized to at most 1600 px wide); the SHA-256 is of the stored file.

| File | What it shows | Size | KB | SHA-256 |
|---|---|---|---|---|
| `desktop-hero.webp` | 1440x900 @2x, 3D playing | 1600x1000 | 55 | `6d95ca07449f8ea691e3bb1dd6d45333ecb2831a6c39d99bb7defd2537f0d9c9` |
| `mobile-hero.webp` | 390x844 @2x, 3D playing (render scale 0.5, 30 fps cap) | 780x1688 | 80 | `295257933cf90a2b490351677dc0fd2f971a47e702306561e33a004d8dd334ec` |
| `desktop-full.webp` | 1440 wide full page | 1440x5641 | 346 | `12c352a1e72e056dffddd74c67cf05a218ceaf9fa7a127a03ca7fd82922466ea` |
| `tablet-full.webp` | 820 wide full page | 820x7575 | 364 | `65b5f0eec5dabc4373165ab0fbc8ae2514df8362f57aa22ef07ff3438157a6ba` |
| `mobile-full.webp` | 390 wide full page | 390x9412 | 295 | `d7c023d0346e0b0561b160984e6948ea5bb2cd0db144fd27f742ed8ce30f4b9e` |
| `desktop-no-webgl.webp` | 1440x900, getContext forced to null: poster only | 1440x900 | 47 | `96909cfc1d745ebb2e4850615dd9036d0d9e852c6fa2c16a0eb549760d4801f5` |
| `desktop-reduced-motion.webp` | 1440x900, prefers-reduced-motion: reduce: poster only, 3D script not requested | 1440x900 | 47 | `96909cfc1d745ebb2e4850615dd9036d0d9e852c6fa2c16a0eb549760d4801f5` |

## Checks that were run (2026-11-15, Chromium via Playwright)

| Check | Result |
|---|---|
| Horizontal overflow at 1440 / 820 / 390 px | none (`scrollWidth == innerWidth` at all three) |
| Page errors (`pageerror`) | 0 at all three widths |
| Requests to any host other than 127.0.0.1 | 0 |
| Images that failed to load | none visible; `dataguard-mobile.webp` is `display:none` below 720 px so it is never requested there |
| Animation loop (rAF callbacks per 600 ms) | playing 36, after Pause 0, after Play 37, after scrolling past the hero 0 |
| WebGL unavailable (`getContext` returns null) | poster shown, toggle hidden, no console output, no errors |
| `prefers-reduced-motion: reduce` | `hero-webgl.js` is not requested and no frame loop runs until the visitor presses Play |
| Keyboard | first 9 tab stops all show a 3 px solid focus outline |
| Text contrast | tokens 6.6:1 to 16.9:1; hero text over the brightest rendered background pixel 7.0:1 to 9.7:1 |

## Not verified

- **Console warnings on desktop:** headless Chromium (software GL) logs 4 `GL Driver Message ... GPU stall due to ReadPixels` performance warnings when the canvas starts. They appear without any screenshot being taken and the page never calls `readPixels`; they come from the software GL path. Not checked on a real GPU.
- Real-GPU frame rate and battery use on phones; only the loop logic and the reduced render scale / fps cap were verified.
- Firefox, Safari, real devices, screen readers.
- Pages deployment itself (not enabled by this change).
