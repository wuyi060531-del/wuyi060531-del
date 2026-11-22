import { words } from './language.js';

export function initTour(start) {
  const panel = document.querySelector('[data-tour-panel]');
  const title = panel.querySelector('h2');
  const description = panel.querySelector('p');
  const previous = panel.querySelector('[data-tour-back]');
  const next = panel.querySelector('[data-tour-next]');
  const leave = panel.querySelector('[data-tour-exit]');
  const stops = [
    ['hero-title', '先认识我', 'Meet the author', '方向是数据开发、Java 后端与 AI 应用。', 'My focus is data engineering, Java backend, and applied AI.'],
    ['p-signalhub', 'SignalHub', 'SignalHub', '追踪一条合成岗位的原文、版本和匹配结果。', 'Follow a synthetic job through its original text, versions, and match result.'],
    ['p-dataguard', 'DataGuard', 'DataGuard', '从报表回到 CSV 中触发规则的字段。', 'Trace a report finding back to its field in the CSV.'],
    ['p-ecommerce', '订单 ETL', 'Order pipeline', '看数据如何隔离、写库、对账和重跑。', 'See how rows are quarantined, loaded, reconciled, and replayed.'],
    ['evidence-title', '核对工程证据', 'Check the evidence', '打开快照或 CI，核对数据的来历。', 'Open a snapshot or CI run to check where the results came from.'],
    ['repro-title', '在本机复跑', 'Run it locally', '选一个项目，使用固定版本和隔离环境。', 'Pick a project and use the pinned version in an isolated environment.'],
  ];
  let step = 0;
  function render(move = false) {
    const [anchor, zh, en, detail, descriptionEn] = stops[step];
    title.textContent = `${step + 1}/${stops.length} · ${words(zh, en)}`;
    description.textContent = words(detail, descriptionEn);
    previous.textContent = words('上一步', 'Back');
    previous.disabled = step === 0;
    next.textContent = step === stops.length - 1 ? words('完成', 'Finish') : words('下一步', 'Next');
    leave.textContent = words('退出导览', 'Exit tour');
    if (move) {
      document.getElementById(anchor).after(panel);
      panel.hidden = false;
      title.focus({ preventScroll: true });
      panel.scrollIntoView({ block: 'nearest' });
    }
  }
  function exit() {
    panel.hidden = true;
    start.focus();
  }
  previous.addEventListener('click', () => { if (step > 0) { step--; render(true); } });
  next.addEventListener('click', () => { if (step === stops.length - 1) exit(); else { step++; render(true); } });
  leave.addEventListener('click', exit);
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && !panel.hidden) exit(); });
  document.addEventListener('portfolio-language', () => { if (!panel.hidden) render(); });
  return () => {
    document.querySelector('[data-tour-status]').textContent = '';
    step = 0;
    render(true);
  };
}
