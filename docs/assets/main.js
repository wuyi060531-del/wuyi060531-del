// Page behaviour: 3D background stage (two scenes + particles), scene switching by section,
// motion preferences, 3D card tilt, copy buttons.
import { createStage } from './stage.js';

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

// 3D tilt on project cards (fine pointers only, never with reduced motion).
if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !reduce.matches) {
  document.querySelectorAll('.project').forEach((card) => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
      card.style.setProperty('--ry', ((x - .5) * 5).toFixed(2) + 'deg');
      card.style.setProperty('--rx', ((.5 - y) * 4).toFixed(2) + 'deg');
      card.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
      card.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    });
    card.addEventListener('pointerleave', () => { card.style.setProperty('--rx', '0deg'); card.style.setProperty('--ry', '0deg'); });
  });
}

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
    } catch {
      button.textContent = '请手动选择 Select';
    }
    setTimeout(() => { button.textContent = '复制 Copy'; }, 1800);
  });
  block.appendChild(button);
});
