// Page behaviour: lazy-load the 3D hero, respect motion preferences, copy buttons.
const hero = document.getElementById('hero');
const canvas = document.getElementById('hero-canvas');
const toggle = document.getElementById('hero-toggle');
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const saveData = Boolean(navigator.connection && navigator.connection.saveData);
const lowPower = window.matchMedia('(max-width: 720px)').matches || (navigator.hardwareConcurrency || 4) <= 4;

let api = null;
let loading = null;
let failed = false;

function render(playing) {
  hero.classList.toggle('is-playing', playing);
  toggle.setAttribute('aria-pressed', String(playing));
  toggle.textContent = playing ? '暂停背景动画 · Pause' : '播放背景动画 · Play';
}

function fail() {
  failed = true;
  api = null;
  hero.classList.remove('is-live', 'is-playing');
  toggle.hidden = true; // static poster stays; nothing to control
}

function ensure() {
  if (api || failed) return Promise.resolve(api);
  if (!loading) {
    loading = import('./hero-webgl.js')
      .then((mod) => {
        api = mod.startHero(canvas, { scale: lowPower ? 0.5 : 0.75, maxFps: lowPower ? 30 : 60, startPaused: true, onFail: fail });
        if (api) hero.classList.add('is-live'); else fail();
        return api;
      })
      .catch(() => { fail(); return null; });
  }
  return loading;
}

toggle.addEventListener('click', async () => {
  const instance = await ensure();
  if (!instance) return;
  if (instance.isPlaying()) instance.pause(); else instance.play();
  render(instance.isPlaying());
});

reduce.addEventListener('change', () => { if (reduce.matches && api) { api.pause(); render(false); } });

render(false);
if (!reduce.matches && !saveData) {
  // 3D is optional: wait until the page is loaded and the browser is idle.
  const start = () => ensure().then((instance) => { if (instance) { instance.play(); render(true); } });
  const idle = window.requestIdleCallback || ((fn) => setTimeout(fn, 400));
  window.addEventListener('load', () => idle(start), { once: true });
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
