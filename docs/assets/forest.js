// "Moss Forest": an original full-screen fragment-shader scene written for this site.
// Layered trunks at five depths, drifting mist, canopy gaps, light shafts and a moss floor.
// The grey-green palette is inspired by the Sylva landing page in ThreeUI Community; no Sylva code is used.

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform float u_time;
uniform vec2 u_res;
uniform vec2 u_mouse;

float h11(float p){ p = fract(p * .1031); p *= p + 33.33; p *= p + p; return fract(p); }
float h21(vec2 p){ vec3 q = fract(vec3(p.xyx) * .1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float vn(vec2 p){
  vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(h21(i), h21(i + vec2(1., 0.)), f.x), mix(h21(i + vec2(0., 1.)), h21(i + vec2(1., 1.)), f.x), f.y);
}
float fbm(vec2 p){ float a = .5, s = 0.; for (int i = 0; i < 4; i++){ s += a * vn(p); p = p * 2.03 + 17.1; a *= .5; } return s; }

void main(){
  vec2 uv = gl_FragCoord.xy / u_res;
  float asp = u_res.x / u_res.y;
  vec2 p = vec2((uv.x - .5) * asp, uv.y);
  float t = u_time;

  vec2 S = vec2(.26 * asp, 1.12);                    // light source, upper right
  vec3 haze = mix(vec3(.50, .60, .44), vec3(.90, .93, .68), smoothstep(.05, 1., uv.y));
  vec3 col = haze;
  float occl = 0.;

  for (int i = 0; i < 5; i++){
    float d = float(i) / 4.;                         // 0 far ... 1 near
    float fi = float(i);
    float sc = mix(3.4, 1.15, d);
    float par = (u_mouse.x * .07 + t * .0025) * (.35 + d * 1.7);
    float x = (p.x + par) * sc + fi * 7.3;
    float cell = floor(x), f = fract(x);
    float seed = cell + fi * 13.7;
    float present = step(.36, h11(seed * 1.7));
    float cx = .22 + .56 * h11(seed * 3.3);
    float w = mix(.035, .12, d) * (.7 + .6 * h11(seed));
    w *= 1. + (1. - uv.y) * .35;                      // wider near the ground
    float sway = sin(uv.y * 2.4 + t * .32 + cell) * .014 * d;
    float tr = (1. - smoothstep(w * .55, w, abs(f - cx + sway))) * present;

    float bark = vn(vec2(f * 20., uv.y * 7. + cell));
    vec3 trunk = mix(vec3(.07, .11, .06), vec3(.20, .27, .14), bark);
    float side = clamp((f - cx) / max(w, .001), -1., 1.);
    trunk += vec3(.55, .6, .25) * max(0., side) * .22 * (1. - d * .3);   // rim light toward the source
    float fog = mix(.80, .06, d);
    vec3 lc = mix(trunk, haze * .98, fog);
    col = mix(col, lc, tr);
    if (d > .3) occl = max(occl, tr);

    // mist drifting between layers
    float m = fbm(vec2(p.x * 1.4 + t * .012 * (1. + d) + fi * 3.1, uv.y * 2.4 + fi));
    col = mix(col, haze * 1.04, m * .16 * (1. - d * .55));
  }

  // canopy with gaps
  float can = fbm(vec2(p.x * 2.1 + u_mouse.x * .05 + t * .004, uv.y * 3.2) + 3.);
  float cm = smoothstep(.60, .88, uv.y + (can - .5) * .42);
  col = mix(col, vec3(.05, .11, .05) + haze * .05, cm * .82);

  // moss floor
  float rim = uv.y + (fbm(vec2(p.x * 3., 2.)) - .5) * .05;
  float ground = 1. - smoothstep(.07, .22, rim);
  float mo = fbm(p * vec2(8., 26.) + 5.);
  vec3 moss = mix(vec3(.08, .14, .07), vec3(.30, .42, .19), mo);
  moss += vec3(.4, .45, .2) * pow(vn(p * vec2(30., 90.) + 1.), 3.) * .35;
  col = mix(col, moss * (.55 + .5 * exp(-abs(p.x - S.x) * .8)), ground);

  // light shafts
  vec2 q = p - S;
  float ang = atan(q.x, -q.y);
  float r = length(q);
  float ray = vn(vec2(ang * 15. + t * .05, 1.)) * .6 + vn(vec2(ang * 40. - t * .03, 4.)) * .4;
  ray = smoothstep(.34, .9, ray);
  col += vec3(.98, .94, .62) * ray * exp(-r * .85) * .34 * (1. - occl * .9) * (1. - ground * .6);
  col += vec3(1., .95, .7) * exp(-length(p - S) * 2.3) * .34;

  // grade, vignette, grain
  col = pow(col, vec3(.96));
  vec2 vc = uv - .5;
  col *= 1. - dot(vc, vc) * .85;
  col += (h21(gl_FragCoord.xy + fract(t) * 91.) - .5) * .028;
  gl_FragColor = vec4(col, 1.);
}
`;

function compile(gl, type, src) {
  const s = gl.createShader(type);
  gl.shaderSource(s, src);
  gl.compileShader(s);
  if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || 'shader compile failed');
  return s;
}

export function createForest(canvas, { scale = 1, onLost = () => {} } = {}) {
  const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'high-performance' });
  if (!gl) return null;
  const prog = gl.createProgram();
  gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog) || 'link failed');
  gl.useProgram(prog);
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, 'a');
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const uTime = gl.getUniformLocation(prog, 'u_time');
  const uRes = gl.getUniformLocation(prog, 'u_res');
  const uMouse = gl.getUniformLocation(prog, 'u_mouse');

  let mx = 0, my = 0, tx = 0, ty = 0, lost = false;
  const lostHandler = (e) => { e.preventDefault(); lost = true; onLost(); };
  canvas.addEventListener('webglcontextlost', lostHandler);

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5) * scale;
    const w = Math.max(2, Math.round(canvas.clientWidth * dpr));
    const h = Math.max(2, Math.round(canvas.clientHeight * dpr));
    if (canvas.width !== w || canvas.height !== h) { canvas.width = w; canvas.height = h; }
    gl.viewport(0, 0, w, h);
  }

  return {
    render(ms) {
      if (lost) return;
      mx += (tx - mx) * .06; my += (ty - my) * .06;
      gl.uniform1f(uTime, ms / 1000);
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform2f(uMouse, mx, my);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    },
    resize,
    setPointer(x, y, inside = true) { tx = inside ? x : 0; ty = inside ? y : 0; },
    dispose() {
      canvas.removeEventListener('webglcontextlost', lostHandler);
      gl.deleteBuffer(buf); gl.deleteProgram(prog);
      const ext = gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext();
    },
  };
}
