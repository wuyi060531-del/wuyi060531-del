// Runs ThreeUI's Temple Night world as the hero background.
// Same interface the page script expects: startHero(canvas, opts) -> { play, pause, destroy, isPlaying }.
export async function startHero(canvas, { lowPower = false, maxFps = 60, startPaused = true, onFail = () => {} } = {}) {
  let renderer = null;
  try {
    const { createTempleNightRenderer } = await import('./temple-night.js');
    // The upstream renderer reads its quality from the query string; set it only while it initialises.
    const original = location.href;
    if (lowPower) history.replaceState(null, '', location.pathname + '?q=low&dpr=1' + location.hash);
    try { renderer = createTempleNightRenderer(canvas); } finally { if (lowPower) history.replaceState(null, '', original); }
  } catch (e) { onFail(e); return null; }
  if (!renderer) { onFail(); return null; }

  const interval = 1000 / maxFps;
  let playing = false, visible = true, frame = 0, last = 0, dead = false;

  const loop = (t) => {
    frame = 0;
    if (dead || !playing || !visible || document.hidden) return;
    if (t - last >= interval - 1) { last = t; renderer.render(t); }
    frame = requestAnimationFrame(loop);
  };
  const kick = () => { if (!frame && playing && visible && !document.hidden && !dead) frame = requestAnimationFrame(loop); };
  const stop = () => { if (frame) { cancelAnimationFrame(frame); frame = 0; } };

  const ro = new ResizeObserver(() => { renderer.resize(); if (!playing) renderer.render(performance.now()); });
  ro.observe(canvas);
  const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? kick() : stop(); });
  io.observe(canvas);
  const onVis = () => (document.hidden ? stop() : kick());
  document.addEventListener('visibilitychange', onVis);
  const onLost = (e) => { e.preventDefault(); api.destroy(); onFail(); };
  canvas.addEventListener('webglcontextlost', onLost);
  const hero = canvas.closest('section') || canvas.parentElement;
  const onMove = (e) => { const b = hero.getBoundingClientRect(); renderer.setPointer(((e.clientX - b.left) / b.width) * 2 - 1, 1 - ((e.clientY - b.top) / b.height) * 2, true); };
  const onLeave = () => renderer.setPointer(0, 0, false);
  if (!lowPower) { hero.addEventListener('pointermove', onMove, { passive: true }); hero.addEventListener('pointerleave', onLeave); }

  const api = {
    play() { if (dead) return; playing = true; kick(); },
    pause() { playing = false; stop(); },
    isPlaying: () => playing,
    destroy() {
      if (dead) return; dead = true; playing = false; stop(); ro.disconnect(); io.disconnect();
      document.removeEventListener('visibilitychange', onVis); canvas.removeEventListener('webglcontextlost', onLost);
      hero.removeEventListener('pointermove', onMove); hero.removeEventListener('pointerleave', onLeave);
      try { renderer.dispose(); } catch { /* already gone */ }
    },
  };
  renderer.resize(); renderer.render(performance.now()); // first still frame even when paused
  if (!startPaused) api.play();
  return api;
}
