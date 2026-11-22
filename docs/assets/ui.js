// UI layer: pointer glow, magnetic buttons, edge light, click sparks, section state, reveal-on-scroll.
// Everything here is DOM/CSS or one tiny 2D canvas; no WebGL instance is created for any control.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
const root = document.documentElement;
const body = document.body;
const $$ = (sel) => [...document.querySelectorAll(sel)];

export function initUI() {
  root.classList.add('js');

  // Keep fragment navigation clear of the fixed header when the navigation reflows.
  const header = document.querySelector('.site-header');
  let anchorInset = Number.parseFloat(getComputedStyle(root).scrollPaddingTop);
  const updateAnchorInset = () => {
    const inset = Math.max(94, Math.ceil(header.getBoundingClientRect().bottom) + 16);
    if (inset === anchorInset) return;
    const target = document.getElementById(location.hash.slice(1));
    // A restored language may wrap the bar after the browser has already followed the fragment.
    const pinned = inset > anchorInset && target &&
      Math.abs(target.getBoundingClientRect().top - anchorInset) < 2;
    anchorInset = inset;
    root.style.setProperty('--site-header-inset', `${inset}px`);
    if (pinned) target.scrollIntoView({ block: 'start', behavior: 'instant' });
  };
  updateAnchorInset();
  if ('ResizeObserver' in window) new ResizeObserver(updateAnchorInset).observe(header);

  /* ---- reveal on scroll ---- */
  const revealEls = $$('.reveal');
  if (!('IntersectionObserver' in window) || reduce.matches) {
    revealEls.forEach((el) => el.classList.add('in'));
  } else {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---- current section in the nav + scroll progress ---- */
  const links = new Map($$('[data-nav]').map((a) => [a.dataset.nav, a]));
  const sections = [...links.keys()].map((id) => document.getElementById(id)).filter(Boolean);
  const setCurrent = (id) => links.forEach((a, key) => {
    if (key === id) a.setAttribute('aria-current', 'location'); else a.removeAttribute('aria-current');
    a.classList.toggle('is-current', key === id);
  });
  if ('IntersectionObserver' in window) {
    const so = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) setCurrent(e.target.id);
    }, { rootMargin: '-35% 0px -55% 0px' });
    sections.forEach((s) => so.observe(s));
    new IntersectionObserver(([e]) => { if (e.isIntersecting) setCurrent(''); }, { rootMargin: '0px 0px -60% 0px' }).observe(document.getElementById('hero'));
  }
  const progress = document.getElementById('progress');
  let ticking = false;
  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.setProperty('--p', max > 0 ? (window.scrollY / max).toFixed(4) : 0);
      ticking = false;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- pointer: parallax vars, glow / edge-light vars, magnetic buttons, card tilt ---- */
  if (finePointer.matches && !reduce.matches) {
    const glows = $$('.glow, .btn');
    const magnets = $$('.btn, .chip');
    const tilts = $$('.project');
    const visible = new Set([...glows, ...magnets]);
    if ('IntersectionObserver' in window) {
      const near = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          const el = entry.target;
          if (entry.isIntersecting) visible.add(el);
          else {
            visible.delete(el);
            for (const property of ['--tx', '--ty', '--rx', '--ry']) el.style.removeProperty(property);
          }
        }
      }, { rootMargin: '80px' });
      visible.forEach((el) => near.observe(el));
    }
    let px = 0, py = 0, queued = false;

    const frame = () => {
      queued = false;
      root.style.setProperty('--px', ((px / window.innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty('--py', ((py / window.innerHeight) * 2 - 1).toFixed(3));
      // read all rectangles first, then write, so the browser lays out once
      const rects = new Map();
      for (const el of visible) {
        const r = el.getBoundingClientRect();
        if (r.bottom < -80 || r.top > window.innerHeight + 80) continue;
        rects.set(el, r);
      }
      for (const el of glows) {
        const r = rects.get(el);
        if (!r) continue;
        const inside = px >= r.left && px <= r.right && py >= r.top && py <= r.bottom;
        if (inside) {
          el.style.setProperty('--gx', (((px - r.left) / r.width) * 100).toFixed(1) + '%');
          el.style.setProperty('--gy', (((py - r.top) / r.height) * 100).toFixed(1) + '%');
          el.style.setProperty('--mx', (px - r.left).toFixed(0) + 'px');
          el.style.setProperty('--my', (py - r.top).toFixed(0) + 'px');
        }
      }
      for (const el of magnets) {
        const r = rects.get(el);
        if (!r) continue;
        const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
        const dx = px - cx, dy = py - cy, reach = Math.max(r.width, 90) * 0.75 + 20;
        const d = Math.hypot(dx, dy);
        if (d < reach) {
          const k = (1 - d / reach) * 0.32;
          el.style.setProperty('--tx', (dx * k).toFixed(1) + 'px');
          el.style.setProperty('--ty', (dy * k).toFixed(1) + 'px');
        } else if (el.style.getPropertyValue('--tx') !== '0px') {
          el.style.setProperty('--tx', '0px');
          el.style.setProperty('--ty', '0px');
        }
      }
      for (const card of tilts) {
        const r = rects.get(card);
        if (!r) continue;
        const inside = px >= r.left && px <= r.right && py >= r.top && py <= r.bottom;
        card.style.setProperty('--ry', inside ? (((px - r.left) / r.width - .5) * 5).toFixed(2) + 'deg' : '0deg');
        card.style.setProperty('--rx', inside ? ((.5 - (py - r.top) / r.height) * 4).toFixed(2) + 'deg' : '0deg');
      }
    };
    window.addEventListener('pointermove', (e) => {
      if (reduce.matches || e.pointerType === 'touch') return;
      px = e.clientX; py = e.clientY;
      if (!queued) { queued = true; requestAnimationFrame(frame); }
    }, { passive: true });
    const resetPointer = () => {
      px = window.innerWidth / 2; py = window.innerHeight / 2;
      magnets.forEach((el) => { el.style.setProperty('--tx', '0px'); el.style.setProperty('--ty', '0px'); });
      tilts.forEach((c) => { c.style.setProperty('--rx', '0deg'); c.style.setProperty('--ry', '0deg'); });
      root.style.setProperty('--px', 0); root.style.setProperty('--py', 0);
    };
    window.addEventListener('pointerleave', resetPointer);
    reduce.addEventListener('change', resetPointer);
  }

  /* ---- click sparks: one small 2D canvas, drawn only while sparks are alive ---- */
  if (!reduce.matches) {
    const canvas = document.getElementById('sparks');
    const ctx = canvas.getContext('2d');
    if (ctx) {
      let sparks = [], raf = 0, last = 0;
      const size = () => {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(window.innerWidth * dpr); canvas.height = Math.round(window.innerHeight * dpr);
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      };
      size();
      window.addEventListener('resize', size);
      const palette = () => (body.dataset.scene === 'forest' ? ['#dcf585', '#a8e06a', '#f4ffc9'] : ['#ffb27a', '#ff7a59', '#ffe2a8']);
      const tick = (now) => {
        const dt = Math.min(.05, (now - last) / 1000); last = now;
        ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
        ctx.globalCompositeOperation = 'lighter';
        sparks = sparks.filter((p) => (p.age += dt) < p.life);
        for (const p of sparks) {
          p.vx *= 1 - 2.2 * dt; p.vy = p.vy * (1 - 2.2 * dt) + 60 * dt;       // drag + a little fall
          p.x += p.vx * dt; p.y += p.vy * dt;
          const t = 1 - p.age / p.life;
          ctx.globalAlpha = t * t;
          ctx.fillStyle = p.c;
          ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (.4 + t * .6), 0, 6.283); ctx.fill();
        }
        ctx.globalAlpha = 1;
        if (sparks.length) raf = requestAnimationFrame(tick); else { raf = 0; ctx.clearRect(0, 0, window.innerWidth, window.innerHeight); }
      };
      const burst = (x, y) => {
        const colors = palette();
        for (let i = 0; i < 14; i++) {
          const a = Math.random() * 6.283, v = 70 + Math.random() * 190;
          sparks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v - 30, r: 1.4 + Math.random() * 2.4, age: 0, life: .55 + Math.random() * .45, c: colors[i % 3] });
        }
        if (!raf) { last = performance.now(); raf = requestAnimationFrame(tick); }
      };
      document.addEventListener('click', (e) => {
        const target = e.target.closest('.btn, .chip, .copy, summary');
        if (!target || reduce.matches) return;
        if (e.detail === 0) {                       // keyboard activation: burst from the element itself
          const r = target.getBoundingClientRect();
          burst(r.left + r.width / 2, r.top + r.height / 2);
        } else burst(e.clientX, e.clientY);
      });
    }
  }
}
