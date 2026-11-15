/*!
 * Hero background: "Stream Convergence" fragment shader and WebGL setup adapted from
 * ThreeUI Community (https://github.com/MengTo/threeui), MIT License,
 * Copyright (c) 2026 Meng To. Ported from React to plain JavaScript; added pause/resume,
 * resolution scaling, frame-rate cap, visibility pausing and context-loss handling.
 * Full licence text: ../THIRD_PARTY_NOTICES.md
 */

const VERTEX = `
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
    vUv = position * 0.5 + 0.5;
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

// Shader body is the upstream Stream Convergence fragment shader (unchanged).
const FRAGMENT = `
  #ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  #else
  precision mediump float;
  #endif
  uniform float u_time;
  uniform vec2 u_resolution;
  uniform float u_interactive_fidelity;
  varying vec2 vUv;

  mat2 rotate2d(float _angle){
      return mat2(cos(_angle),-sin(_angle),
                  sin(_angle),cos(_angle));
  }

  void main() {
      vec2 p = vUv * 2.0 - 1.0;
      p.x *= u_resolution.x / u_resolution.y;
      p = rotate2d(0.55) * p;

      vec3 color = vec3(0.0);
      float spread = 0.06 * (0.3 + u_interactive_fidelity * 0.7);

      for(int i = 0; i < 3; i++) {
          float offset = float(1 - i) * spread;
          float y = p.y + offset + (sin(p.x * 2.5 - u_time * 1.5) * 0.12);
          float wave = smoothstep(0.85, 0.99, sin(y * 6.0 + u_time * 2.0) * 0.5 + 0.5);

          // Modulating color mixing logic for the violet-indigo theme
          if(i == 0) color.r += wave * 1.2;
          if(i == 1) color.g += wave * 0.5;
          if(i == 2) color.b += wave * 1.8;
      }

      float vignette = exp(-length(vUv * 2.0 - 1.0) * 0.8);
      color *= vignette;

      gl_FragColor = vec4(color, 1.0);
  }
`;

function compile(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('createShader failed');
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || 'shader compile failed');
  }
  return shader;
}

/**
 * Start the animated background on `canvas`.
 * options: scale (render-resolution factor, default 0.75), maxFps (default 60),
 *          fidelity (0..1), startPaused (draw one frame, do not loop), onFail (called on any failure).
 * Returns { play, pause, destroy, isPlaying }, or null when WebGL is unavailable.
 */
export function startHero(canvas, options = {}) {
  const { scale = 0.75, maxFps = 60, fidelity = 0.5, startPaused = false, onFail = () => {} } = options;
  const gl = canvas.getContext('webgl', { alpha: false, antialias: false, powerPreference: 'low-power' });
  if (!gl) return null;

  let program, buffer, vertex, fragment;
  try {
    vertex = compile(gl, gl.VERTEX_SHADER, VERTEX);
    fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT);
    program = gl.createProgram();
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(program) || 'link failed');
    gl.useProgram(program);
    buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    const position = gl.getAttribLocation(program, 'position');
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);
  } catch (error) {
    onFail(error);
    return null;
  }

  const uTime = gl.getUniformLocation(program, 'u_time');
  const uResolution = gl.getUniformLocation(program, 'u_resolution');
  const uFidelity = gl.getUniformLocation(program, 'u_interactive_fidelity');
  const minDelta = 1000 / maxFps;

  let raf = 0;
  let playing = false;
  let visible = true;
  let elapsed = 0; // ms of animation time; only advances while playing
  let previous = 0;
  let lastDraw = 0;

  const draw = () => {
    gl.uniform1f(uTime, elapsed * 0.0003);
    gl.uniform1f(uFidelity, fidelity);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  };

  const resize = () => {
    const box = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2) * scale;
    canvas.width = Math.max(1, Math.round(box.width * dpr));
    canvas.height = Math.max(1, Math.round(box.height * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uResolution, canvas.width, canvas.height);
    draw();
  };

  const loop = (now) => {
    raf = 0;
    if (!playing || !visible || document.hidden) return;
    if (now - lastDraw >= minDelta) {
      elapsed += now - previous;
      previous = now;
      lastDraw = now;
      draw();
    }
    raf = requestAnimationFrame(loop);
  };

  const schedule = () => {
    if (playing && visible && !document.hidden && !raf) {
      previous = performance.now();
      raf = requestAnimationFrame(loop);
    }
  };

  const observer = new IntersectionObserver(([entry]) => {
    visible = entry ? entry.isIntersecting : true;
    if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; }
    schedule();
  });
  const resizer = new ResizeObserver(resize);
  const onVisibility = () => { if (document.hidden && raf) { cancelAnimationFrame(raf); raf = 0; } schedule(); };
  const onLost = (event) => { event.preventDefault(); api.destroy(); onFail(new Error('webgl context lost')); };

  document.addEventListener('visibilitychange', onVisibility);
  canvas.addEventListener('webglcontextlost', onLost);
  observer.observe(canvas);
  resizer.observe(canvas);
  elapsed = 2400; // pleasant starting phase, also what the static poster shows
  resize();

  const api = {
    isPlaying: () => playing,
    play() { playing = true; schedule(); },
    pause() { playing = false; if (raf) { cancelAnimationFrame(raf); raf = 0; } },
    destroy() {
      api.pause();
      observer.disconnect();
      resizer.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      canvas.removeEventListener('webglcontextlost', onLost);
      gl.deleteBuffer(buffer);
      gl.deleteShader(vertex);
      gl.deleteShader(fragment);
      gl.deleteProgram(program);
    },
  };
  if (!startPaused) api.play();
  return api;
}
