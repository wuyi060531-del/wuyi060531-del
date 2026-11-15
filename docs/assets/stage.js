// Background stage: two 3D scenes ("night" = ThreeUI Temple Night, "forest" = original Moss Forest)
// plus a particle layer. One loop renders only the visible scene; the other is paused after the cross-fade.
import { createFx } from './fx.js';

const $ = (id) => document.getElementById(id);
const canvases = { night: $('scene-night'), forest: $('scene-forest') };
const fxCanvas = $('fx');

export function createStage({ lowPower, maxFps }) {
  const ctl = { night: null, forest: null };
  const loading = {};
  const failed = { night: false, forest: false };
  const listeners = new Set();
  const interval = 1000 / maxFps;
  const fx = createFx(fxCanvas, { count: lowPower ? 38 : 90 });

  let current = 'night';          // scene the page wants right now
  let fading = null;              // { name, until } scene that is fading out and still draws
  let playing = false, started = false, raf = 0, last = 0, lastNow = 0;

  const emit = () => listeners.forEach((fn) => fn({ scene: current, playing, failed: { ...failed } }));

  async function create(name) {
    if (name === 'night') {
      const { createTempleNightRenderer } = await import('./temple-night.js');
      const original = location.href;
      // The upstream renderer reads its quality from the query string; set it only while it initialises.
      if (lowPower) history.replaceState(null, '', location.pathname + '?q=low&dpr=1' + location.hash);
      try { return createTempleNightRenderer(canvases.night); } finally { if (lowPower) history.replaceState(null, '', original); }
    }
    const { createForest } = await import('./forest.js');
    return createForest(canvases.forest, { scale: lowPower ? 0.6 : 1, onLost: () => fail(name) });
  }

  function ensure(name) {
    if (ctl[name] || failed[name]) return Promise.resolve(ctl[name]);
    if (!loading[name]) {
      loading[name] = create(name)
        .then((c) => { if (!c) throw new Error('no webgl'); ctl[name] = c; c.resize(); return c; })
        .catch(() => { fail(name); return null; });
    }
    return loading[name];
  }

  function fail(name) {
    failed[name] = true;
    try { ctl[name] && ctl[name].dispose(); } catch { /* already gone */ }
    ctl[name] = null;
    canvases[name].classList.remove('is-on');
    emit();
  }

  function loop(now) {
    raf = 0;
    if (!playing || document.hidden) return;
    if (now - last >= interval - 1) {
      const dt = Math.min(.1, (now - (lastNow || now)) / 1000);
      last = now; lastNow = now;
      if (fading && now > fading.until) fading = null;
      if (ctl[current]) ctl[current].render(now);
      if (fading && ctl[fading.name]) ctl[fading.name].render(now);
      fx.step(dt, now);
    }
    raf = requestAnimationFrame(loop);
  }
  const kick = () => { if (!raf && playing && !document.hidden) { lastNow = 0; raf = requestAnimationFrame(loop); } };

  function paint(name) {
    for (const n of Object.keys(canvases)) canvases[n].classList.toggle('is-on', n === name && Boolean(ctl[n]));
  }

  async function show(name) {
    if (name === current && started) return;
    const previous = current;
    current = name;
    document.body.dataset.scene = name;
    fx.setKind(name);
    if (started) {
      const c = await ensure(name);
      if (current !== name) return;                      // the visitor already moved on
      if (c) { fading = { name: previous, until: performance.now() + 1100 }; paint(name); c.resize(); c.render(performance.now()); }
    }
    emit(); kick();
  }

  async function play() {
    if (!started) {
      started = true;
      const c = await ensure(current);
      if (c) { paint(current); c.render(performance.now()); }
      else if (!failed.night || !failed.forest) { /* the other scene can still run */ }
    }
    playing = true;
    document.body.dataset.playing = '1';
    emit(); kick();
  }

  function pause() {
    playing = false;
    delete document.body.dataset.playing;
    if (raf) { cancelAnimationFrame(raf); raf = 0; }
    emit();
  }

  const onVis = () => (document.hidden ? (raf && (cancelAnimationFrame(raf), (raf = 0))) : kick());
  document.addEventListener('visibilitychange', onVis);

  const onResize = () => { Object.values(ctl).forEach((c) => c && c.resize()); fx.resize(); if (!playing) { fx.clear(); Object.entries(ctl).forEach(([n, c]) => c && n === current && c.render(performance.now())); } };
  new ResizeObserver(onResize).observe(document.documentElement);
  fx.resize();

  window.addEventListener('pointermove', (e) => {
    const nx = (e.clientX / window.innerWidth) * 2 - 1, ny = 1 - (e.clientY / window.innerHeight) * 2;
    Object.values(ctl).forEach((c) => c && c.setPointer(nx, ny, true));
    fx.setPointer(e.clientX, e.clientY);
  }, { passive: true });
  window.addEventListener('pointerleave', () => { Object.values(ctl).forEach((c) => c && c.setPointer(0, 0, false)); fx.setPointer(-9999, -9999); });

  document.body.dataset.scene = current;
  return {
    show, play, pause,
    isPlaying: () => playing,
    isStarted: () => started,
    scene: () => current,
    onChange(fn) { listeners.add(fn); },
  };
}
