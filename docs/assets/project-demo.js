const id = (name) => document.getElementById(name);

function element(tag, text) {
  const node = document.createElement(tag);
  if (text !== undefined) node.textContent = text;
  return node;
}

function metrics(target, values) {
  id(target).replaceChildren(...values.map(([label, value]) => {
    const card = element('div');
    card.className = 'demo-metric';
    card.append(element('b', value), element('span', label));
    return card;
  }));
}

function appendOptions(select, values, label = (value) => value) {
  for (const value of values) select.add(new Option(label(value), value));
}

function dataguard(snapshot) {
  const sample = id('sample');
  const rule = id('rule');
  const renderIssues = () => {
    const issues = snapshot.cases[sample.value].report.issues;
    const matching = issues.filter((issue) => !rule.value || issue.rule === rule.value);
    id('issue-count').textContent = `显示 ${matching.length} / ${issues.length} 项问题`;
    id('issues').replaceChildren(...matching.map((issue) => {
      const row = element('tr');
      const reason = element('td');
      const field = element('td', `${issue.orderId || '—'} / ${issue.field}`);
      const observed = issue.field.split(',').filter((name) => Object.hasOwn(issue.record, name));
      if (observed.length) {
        field.append(element('br'), element('code', observed.map((name) =>
          `${name}=${issue.record[name] === '' ? '空值' : issue.record[name]}`).join(' · ')));
      }
      reason.append(element('b', `${issue.rule} · ${issue.severity}`), element('br'), document.createTextNode(issue.message));
      row.append(element('td', issue.lineNumber), field, reason);
      return row;
    }));
  };

  const renderSample = () => {
    const item = snapshot.cases[sample.value];
    id('input-file').href = sample.value + '.csv';
    id('data-report').hidden = !item.report;
    const state = id('result-status');
    if (!item.report) {
      state.textContent = `${item.status} / ${item.errorCode} · ${item.errorMessage} · 报告请求 HTTP ${item.reportHttpStatus}`;
      return;
    }
    state.textContent = `${item.status} · 检测任务成功保存 · 报告请求 HTTP ${item.reportHttpStatus}`;
    const report = item.report;
    metrics('metrics', [
      ['输入记录', report.totalRecords], ['正常记录', report.validRecords], ['异常记录', report.invalidRecords],
      ['问题数', report.totalIssues], ['质量分', `${report.qualityScore.toFixed(2)}%`],
    ]);
    rule.replaceChildren(new Option('全部规则', ''));
    appendOptions(rule, Object.keys(report.issuesByRule), (name) => `${name} · ${report.issuesByRule[name]}`);
    renderIssues();
  };
  sample.addEventListener('change', renderSample);
  rule.addEventListener('change', renderIssues);
  id('data-controls').hidden = false;
  renderSample();
}

const categories = {backend: '后端开发', data_engineering: '数据开发'};
const qualification = {eligible: '条件符合', insufficient_information: '信息不足', not_eligible: '明确不符合'};

function explain(row) {
  const summary = element('p', `规则评分 ${row.score} / 100 · 资格：${qualification[row.hardStatus] ?? row.hardStatus}`);
  summary.className = 'demo-flag';
  const evidence = element('ul');
  for (const part of row.breakdown) {
    const label = element('strong', `${part.label} · ${part.contribution} / ${part.maximum}`);
    const item = element('li');
    item.append(label, document.createTextNode(` · ${part.reason}`));
    evidence.append(item);
  }
  for (const part of row.adjustments) evidence.append(element('li', `${part.delta} · ${part.reason}`));
  const unknown = row.qualifications.filter((item) => item.status !== 'confirmed').map((item) => `${item.label}：${item.reason}`);
  const source = element('pre', row.body);
  source.className = 'demo-source';
  const details = element('details');
  details.append(element('summary', '查看所保存的 JD 原文'), source);
  const fragment = document.createDocumentFragment();
  fragment.append(element('h3', row.title), element('p', `${row.city} · ${row.company} · ${row.versions.map((v) => `V${v}`).join(' / ')}`),
    summary, evidence);
  if (unknown.length) fragment.append(element('p', unknown.join('；')));
  fragment.append(details);
  return fragment;
}

function signalhub(snapshot) {
  const controls = id('stages');
  const stageButtons = [...controls.querySelectorAll('button')];
  const phase = (index) => {
    const stage = snapshot.stages[index];
    const [first, replay, updated] = snapshot.imports;
    const notes = [
      `首次导入新建 ${first.inserted} 条；原样重放去重 ${replay.deduplicated} 条、更新 ${replay.updated} 条。`,
      `JD 增加 Spark 优先条件后更新 ${updated.updated} 条。旧分数已经失效，API 返回空值。`,
      '匹配刷新后，Java API 返回 V2 的新分数。JD 仍缺到岗时间证据。',
    ];
    stageButtons.forEach((button) => button.setAttribute('aria-pressed', String(Number(button.value) === index)));
    id('stage-detail').textContent = notes[index];
    id('timeline-body').textContent = stage.body;
    metrics('timeline-score', [
      ['当前版本', `V${stage.versions[0]}`],
      ['规则评分', stage.score === null ? '待重算' : `${stage.score} / 100`],
      ['匹配状态', stage.matchingStatus === 'current' ? '当前版本' : '旧分数已隐藏'],
    ]);
  };
  stageButtons.forEach((button) => button.addEventListener('click', () => phase(Number(button.value))));
  controls.hidden = false;
  phase(0);

  const query = id('query');
  const city = id('city');
  const category = id('category');
  const catalog = id('catalog');
  const detail = id('job-detail');
  let selected = snapshot.items[0];
  appendOptions(city, [...new Set(snapshot.items.map((row) => row.city))]);
  appendOptions(category, [...new Set(snapshot.items.flatMap((row) => row.categories))], (key) => categories[key] ?? key);

  const update = () => {
    const term = query.value.trim().toLocaleLowerCase();
    const rows = snapshot.items.filter((row) => (!city.value || row.city === city.value) &&
      (!category.value || row.categories.includes(category.value)) &&
      `${row.title} ${row.body} ${row.company}`.toLocaleLowerCase().includes(term));
    if (!rows.includes(selected)) selected = rows[0];
    id('catalog-count').textContent = `${rows.length} 条合成结果 · 标题、原文和企业名称可检索`;
    catalog.replaceChildren(...rows.map((row) => {
      const button = element('button', `${row.city} · ${row.title.replace('[合成演示] ', '')}`);
      button.type = 'button';
      button.className = 'btn sm';
      button.setAttribute('aria-pressed', String(row === selected));
      button.addEventListener('click', () => {
        selected = row;
        for (const sibling of catalog.children) sibling.setAttribute('aria-pressed', String(sibling === button));
        detail.replaceChildren(explain(row));
      });
      return button;
    }));
    detail.replaceChildren(selected ? explain(selected) : element('p', '没有符合条件的合成岗位。'));
  };
  query.addEventListener('input', update);
  city.addEventListener('change', update);
  category.addEventListener('change', update);
  id('search-controls').hidden = false;
  update();
}

const status = id('demo-load');
status.hidden = false;
status.textContent = '正在读取已记录的结果…';
try {
  const response = await fetch('snapshot.json');
  if (!response.ok) throw new Error('Snapshot unavailable');
  const snapshot = await response.json();
  if (document.body.dataset.project === 'dataguard') dataguard(snapshot);
  else signalhub(snapshot);
  status.hidden = true;
} catch {
  status.textContent = '结果快照暂不可读取，请刷新，或在工程证据区打开 JSON。';
}
