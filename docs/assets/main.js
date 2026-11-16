// Page behaviour: 3D background stage (two scenes + particles), scene switching by section,
// motion preferences, copy buttons. Pointer/scroll UI effects live in ui.js.
import { createStage } from './stage.js';
import { initUI } from './ui.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const saveData = Boolean(navigator.connection && navigator.connection.saveData);
const lowPower = window.matchMedia('(max-width: 720px)').matches || (navigator.hardwareConcurrency || 4) <= 4;

const stage = createStage({ lowPower, maxFps: lowPower ? 30 : 60 });
const toggle = document.getElementById('stage-toggle');
const picks = [...document.querySelectorAll('[data-scene-pick]')];
let mode = 'auto';          // 'auto' follows the section being read; 'night' / 'forest' lock one scene

function renderControls() {
  const playing = stage.isPlaying();
  toggle.setAttribute('aria-pressed', String(playing));
  toggle.textContent = playing ? '暂停 Pause' : document.body.dataset.degraded ? '降级 · 播放 Play' : '播放 Play';
  toggle.title = !playing && document.body.dataset.degraded ? '设备较慢，已自动暂停 3D 以保证流畅；点击仍可强制播放。Slow device: 3D was paused automatically; press to play anyway.' : '';
  picks.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.scenePick === mode)));
}
stage.onChange(renderControls);

toggle.addEventListener('click', async () => {
  if (stage.isPlaying()) stage.pause(); else await stage.play(true);
  renderControls();
});
picks.forEach((b) => b.addEventListener('click', () => {
  mode = b.dataset.scenePick;
  if (mode !== 'auto') stage.show(mode); else follow();
  renderControls();
}));

// Which scene does the section under the middle of the viewport ask for?
const targets = [...document.querySelectorAll('[data-scene]')];
let wanted = 'night', settle = 0;
function follow() { if (mode === 'auto') stage.show(wanted); }
const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    if (!e.isIntersecting) continue;
    wanted = e.target.dataset.scene;
    clearTimeout(settle);
    settle = setTimeout(follow, 220);       // ignore fast fly-bys while scrolling
  }
}, { rootMargin: '-48% 0px -48% 0px' });
targets.forEach((t) => io.observe(t));

reduce.addEventListener('change', () => { if (reduce.matches) stage.pause(); });
renderControls();
if (!reduce.matches && !saveData && !lowPower) {
  // 3D is optional and heavy: start on its own only on capable devices, after load and when idle.
  // Phones and low-core machines keep the still posters until the visitor presses Play.
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 400));
  window.addEventListener('load', () => idle(() => stage.play()), { once: true });
}

initUI();

// Copy buttons for command blocks (clipboard may be unavailable; fail silently).
document.querySelectorAll('pre').forEach((block) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy';
  button.textContent = '复制 Copy';
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(block.querySelector('code').innerText);
      button.textContent = '已复制 Copied';
      button.classList.add('done');
    } catch {
      button.textContent = '请手动选择 Select';
    }
    setTimeout(() => { button.textContent = '复制 Copy'; button.classList.remove('done'); }, 1800);
  });
  block.appendChild(button);
});
