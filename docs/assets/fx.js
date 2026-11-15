// Particle layer drawn on a 2D canvas above the 3D scenes: embers over the night temple,
// drifting fireflies and pollen over the forest. Original code for this site.
const PALETTES = {
  night: [[255, 112, 62], [255, 172, 84], [255, 216, 152]],
  forest: [[214, 242, 122], [186, 240, 164], [255, 245, 178]],
};

function makeSprite(rgb) {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, `rgba(${rgb},1)`);
  grad.addColorStop(.25, `rgba(${rgb},.55)`);
  grad.addColorStop(1, `rgba(${rgb},0)`);
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return c;
}

export function createFx(canvas, { count = 90 } = {}) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return { resize() {}, step() {}, setKind() {}, setPointer() {}, clear() {} };   // particles are decoration only
  const sprites = {};
  for (const [name, list] of Object.entries(PALETTES)) sprites[name] = list.map((rgb) => makeSprite(rgb.join(',')));
  let W = 1, H = 1, dpr = 1, kind = 'night';
  const pointer = { x: -9999, y: -9999 };
  const rnd = (a, b) => a + Math.random() * (b - a);

  const spawn = (p, initial) => {
    p.kind = kind;
    p.z = rnd(.25, 1);                       // depth: small and slow far away, large and quick near
    p.ci = (Math.random() * 3) | 0;
    p.ph = rnd(0, 6.283);
    p.max = rnd(5, 11);
    p.age = initial ? rnd(0, p.max) : 0;
    p.x = rnd(0, 1);
    if (kind === 'night') { p.y = initial ? rnd(0, 1.05) : rnd(1, 1.08); p.vx = rnd(-.012, .02); p.vy = -rnd(.035, .1) * (.5 + p.z); p.sz = rnd(5, 15) * p.z; }
    else { p.y = rnd(.1, .95); p.vx = rnd(-.01, .01); p.vy = rnd(-.006, .006); p.sz = rnd(8, 22) * p.z; }
    return p;
  };
  const parts = Array.from({ length: count }, () => spawn({}, true));

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
  }

  function setKind(next) {
    if (next === kind) return;
    kind = next;
    for (const p of parts) p.age = Math.max(p.age, p.max - rnd(.3, 1.4));   // old particles fade out, new kind fades in
  }

  function step(dt, now) {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'lighter';
    for (const p of parts) {
      p.age += dt;
      if (p.age >= p.max) spawn(p, false);
      const fadeIn = Math.min(1, p.age / .9), fadeOut = Math.min(1, (p.max - p.age) / .9);
      let a = Math.max(0, Math.min(fadeIn, fadeOut));
      if (p.kind === 'night') {
        p.x += (p.vx + Math.sin(now / 900 + p.ph) * .012) * dt;
        p.y += p.vy * dt;
        a *= .55 + .45 * Math.sin(now / 160 + p.ph * 3);                   // ember flicker
      } else {
        p.x += (p.vx + Math.sin(now / 2600 + p.ph) * .016) * dt;
        p.y += (p.vy + Math.cos(now / 3100 + p.ph * 1.7) * .014) * dt;
        a *= .45 + .55 * (.5 + .5 * Math.sin(now / 900 + p.ph * 2));        // firefly pulse
      }
      let px = p.x * W, py = p.y * H;
      const dx = px - pointer.x, dy = py - pointer.y, d2 = dx * dx + dy * dy;
      if (d2 < 19600) { const d = Math.sqrt(d2) || 1, push = (140 - d) * .35; px += dx / d * push; py += dy / d * push; }
      if (a <= .01) continue;
      ctx.globalAlpha = a * (p.kind === 'night' ? .95 : .85);
      const s = p.sz;
      ctx.drawImage(sprites[p.kind][p.ci], px - s / 2, py - s / 2, s, s);
    }
    ctx.globalAlpha = 1;
  }

  return {
    resize, step, setKind,
    setPointer(x, y) { pointer.x = x; pointer.y = y; },
    clear() { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, canvas.width, canvas.height); },
  };
}
