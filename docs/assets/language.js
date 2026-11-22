// Translation changes text nodes or known attributes. Existing markup, links and evidence stay in place.
const root = document.documentElement;
const controls = [...document.querySelectorAll('[data-language]')];
const fallback = document.querySelector('[data-language-status]');
const entries = [...document.querySelectorAll('[data-i], [data-i-alt], [data-i-label]')];
const original = entries.map((node) => [node.textContent, node.getAttribute('alt'), node.getAttribute('aria-label')]);
const originalTitle = document.title;
let english;
let pending;
let request = 0;

export const words = (zh, en) => root.lang === 'en' ? en : zh;

export async function setLanguage(lang) {
  const revision = ++request;
  if (lang === 'en' && !english) {
    try {
      pending ||= fetch(new URL('./english.json', import.meta.url)).then((response) => {
        if (!response.ok) throw new Error('Translation unavailable');
        return response.json();
      });
      english = await pending;
    } catch {
      pending = undefined;
      if (revision === request && fallback) fallback.textContent = '暂时无法加载英文。English is temporarily unavailable.';
      return;
    }
  }
  if (revision !== request) return;
  const active = lang === 'en';
  root.lang = active ? 'en' : 'zh-CN';
  const titleKey = document.body.dataset.title;
  document.title = active && english[titleKey] ? english[titleKey] : originalTitle;
  entries.forEach((node, index) => {
    const [text, alt, label] = original[index];
    if (node.dataset.i) node.textContent = active ? english[node.dataset.i] ?? text : text;
    if (node.dataset.iAlt) node.alt = active ? english[node.dataset.iAlt] ?? alt : alt;
    if (node.dataset.iLabel) node.setAttribute('aria-label', active ? english[node.dataset.iLabel] ?? label : label);
  });
  controls.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.language === lang)));
  if (fallback) fallback.textContent = '';
  try { localStorage.setItem('portfolio-language', lang); } catch { /* blocked storage */ }
  document.dispatchEvent(new Event('portfolio-language'));
}

for (const button of controls) {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
}
if (controls.length) {
  controls[0].parentElement.hidden = false;
  try { if (localStorage.getItem('portfolio-language') === 'en') setLanguage('en'); } catch { /* blocked storage */ }
}
