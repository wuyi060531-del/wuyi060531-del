// Page behaviour: 3D background stage (two scenes + particles), scene switching by section,
// motion preferences, copy buttons. Pointer/scroll UI effects live in ui.js.
import { createStage } from './stage.js';
import { initUI } from './ui.js';
import { words } from './language.js';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const saveData = Boolean(navigator.connection && navigator.connection.saveData);
const lowPower = window.matchMedia('(max-width: 720px)').matches || (navigator.hardwareConcurrency || 4) <= 4;

const stage = createStage({ lowPower, maxFps: lowPower ? 30 : 60 });
const toggle = document.getElementById('stage-toggle');
const picks = [...document.querySelectorAll('[data-scene-pick]')];
let autoStart = true;
let mode = 'auto';          // 'auto' follows the section being read; 'night' / 'forest' lock one scene

function renderControls() {
  const playing = stage.isPlaying();
  toggle.setAttribute('aria-pressed', String(playing));
  const degraded = Boolean(document.body.dataset.degraded);
  toggle.textContent = playing ? words('暂停', 'Pause') : degraded ? words('恢复', 'Resume') : words('播放', 'Play');
  toggle.title = !playing && degraded ? words('帧率过低，已切换到海报。', 'Low frame rate. The scene is paused on its poster.') : '';
  picks.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.scenePick === mode)));
}
stage.onChange(renderControls);
document.addEventListener('portfolio-language', renderControls);

toggle.addEventListener('click', async () => {
  autoStart = false;
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

reduce.addEventListener('change', () => { if (reduce.matches) { autoStart = false; stage.pause(); } });
renderControls();
if (!reduce.matches && !saveData && !lowPower) {
  // 3D is optional and heavy: start on its own only on capable devices, after load and when idle.
  // Phones and low-core machines keep the still posters until the visitor presses Play.
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 400));
  window.addEventListener('load', () => requestAnimationFrame(() => requestAnimationFrame(() => idle(() => {
    if (autoStart && !reduce.matches && !stage.isStarted()) stage.play();
  }))), { once: true });
}

initUI();
const tourStart = document.querySelector('[data-tour-start]');
let tour;
tourStart.hidden = false;
tourStart.addEventListener('click', async () => {
  try {
    tour ||= import('./journey.js').then(({ initTour }) => initTour(tourStart));
    (await tour)();
  } catch {
    tour = undefined;
    document.querySelector('[data-tour-status]').textContent =
      words('导览加载失败，请重试。', 'The tour could not load. Try again.');
  }
});
document.querySelector('.stage-controls').hidden = false;

// Copy buttons for command blocks (clipboard may be unavailable; fail silently).
document.querySelectorAll('pre').forEach((block) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'copy';
  const reset = () => { button.textContent = words('复制', 'Copy'); button.classList.remove('done'); };
  let resetTimer;
  reset();
  document.addEventListener('portfolio-language', reset);
  button.addEventListener('click', async () => {
    clearTimeout(resetTimer);
    try {
      await navigator.clipboard.writeText(block.querySelector('code').innerText);
      button.textContent = words('已复制', 'Copied');
      button.classList.add('done');
    } catch {
      button.textContent = words('请手动选择', 'Select manually');
    }
    resetTimer = setTimeout(reset, 1800);
  });
  const wrap = document.createElement('div');       // the button lives outside the scrolling <pre>, so it never covers or scrolls with the code
  wrap.className = 'codebox';
  block.parentNode.insertBefore(wrap, block);
  wrap.append(block, button);
});
