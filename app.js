
(() => {
  'use strict';

  const EXAMPLE_WORKBOOK_B64 = "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";
  const $ = (id) => document.getElementById(id);
  const setText = (id, value) => { const el = $(id); if (el) el.textContent = value; };
  const setHtml = (id, value) => { const el = $(id); if (el) el.innerHTML = value; };
  const setClass = (id, value) => { const el = $(id); if (el) el.className = value; };

  const state = {
    workbookName: '-',
    sheetName: '-',
    cleanedRows: [],
    grouped: [],
    validation: [],
    ranking: [],
    sensitivity: [],
    selectedControl: null,
    selectedTreatment: null,
    sideA: null,
    sideB: null,
    lastRun: null,
    reportHtml: '',
    reportNarrative: ''
  };

  const COST_HEADERS = [
    'Seed cost_ha','Labour__total_per_ha','Machinery_total_per_ha','Fertiliser_total cost_per_ha',
    'Pesticides_total cost_per_ha','Fuel_total cost_per_ha','Marketing_total cost_ha','Repairs_and_maitenance_per_ha',
    'Support services_per_ha','Electricity_per_ha','Water_per_ha','Insurance services_per_ha','Overheads_per_ha',
    'Interest paid on loans_per_ha','Structure maintenance_per_ha','Other costs_per_ha'
  ];

  function escapeHtml(v) {
    return String(v ?? '').replace(/[&<>"']/g, (m) => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' })[m]);
  }
  function n(v) {
    if (v === null || v === undefined || v === '') return null;
    const x = Number(String(v).replace(/,/g, '').trim());
    return Number.isFinite(x) ? x : null;
  }
  function fmtMoney(v) {
    return v === null || v === undefined || Number.isNaN(v) ? '-' : new Intl.NumberFormat('en-AU', { style:'currency', currency:'AUD', maximumFractionDigits:2 }).format(v);
  }
  function fmtNum(v, d=2) {
    return v === null || v === undefined || Number.isNaN(v) ? '-' : Number(v).toLocaleString('en-AU', { minimumFractionDigits:d, maximumFractionDigits:d });
  }
  function fmtPct(v) {
    return v === null || v === undefined || Number.isNaN(v) ? '-' : `${fmtNum(v, 1)}%`;
  }
  function base64ToArrayBuffer(b64) {
    const binary = atob(b64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
    return bytes.buffer;
  }

  function ensureToastStack() {
    let stack = $('toastStack');
    if (!stack) {
      stack = document.createElement('div');
      stack.id = 'toastStack';
      stack.className = 'toast-stack';
      stack.setAttribute('aria-live', 'polite');
      stack.setAttribute('aria-atomic', 'true');
      document.body.appendChild(stack);
    }
    stack.style.position = 'fixed';
    stack.style.right = 'max(18px, env(safe-area-inset-right))';
    stack.style.bottom = 'max(18px, env(safe-area-inset-bottom))';
    stack.style.zIndex = '99999';
    stack.style.display = 'flex';
    stack.style.flexDirection = 'column';
    stack.style.gap = '10px';
    stack.style.maxWidth = 'min(420px, calc(100vw - 36px))';
    stack.style.pointerEvents = 'none';
    return stack;
  }

  function toast(title, message, kind='info') {
    const stack = ensureToastStack();
    const el = document.createElement('div');
    el.className = `toast ${kind}`;
    el.setAttribute('role', 'status');
    el.innerHTML = `<div class="title">${escapeHtml(title)}</div><div>${escapeHtml(message)}</div>`;
    el.style.pointerEvents = 'auto';
    el.style.opacity = '0';
    el.style.transform = 'translateY(10px)';
    stack.appendChild(el);
    void el.offsetWidth;
    requestAnimationFrame(() => {
      el.classList.add('show');
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
    window.setTimeout(() => {
      el.classList.remove('show');
      el.classList.add('hide');
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      window.setTimeout(() => el.remove(), 260);
    }, 4200);
  }

  function activateTab(name) {
    document.querySelectorAll('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === name));
    document.querySelectorAll('.panel').forEach((p) => p.classList.toggle('active', p.id === `tab-${name}`));
  }

  async function inflateRaw(data) {
    const ds = new DecompressionStream('deflate-raw');
    const stream = new Blob([data]).stream().pipeThrough(ds);
    return new Uint8Array(await new Response(stream).arrayBuffer());
  }

  function readU16(view, o) { return view.getUint16(o, true); }
  function readU32(view, o) { return view.getUint32(o, true); }
  function decode(bytes) { return new TextDecoder('utf-8').decode(bytes); }

  async function unzipEntries(arrayBuffer) {
    const view = new DataView(arrayBuffer);
    const bytes = new Uint8Array(arrayBuffer);
    let eocd = -1;
    for (let i = bytes.length - 22; i >= Math.max(0, bytes.length - 66000); i--) {
      if (readU32(view, i) === 0x06054b50) { eocd = i; break; }
    }
    if (eocd < 0) throw new Error('The workbook structure could not be read. Please save the Excel file and upload it again.');
    const cdOffset = readU32(view, eocd + 16);
    const total = readU16(view, eocd + 10);
    let p = cdOffset;
    const out = new Map();
    for (let i = 0; i < total; i++) {
      if (readU32(view, p) !== 0x02014b50) break;
      const method = readU16(view, p + 10);
      const compSize = readU32(view, p + 20);
      const nameLen = readU16(view, p + 28);
      const extraLen = readU16(view, p + 30);
      const commentLen = readU16(view, p + 32);
      const localOffset = readU32(view, p + 42);
      const name = decode(bytes.slice(p + 46, p + 46 + nameLen));
      const localNameLen = readU16(view, localOffset + 26);
      const localExtraLen = readU16(view, localOffset + 28);
      const start = localOffset + 30 + localNameLen + localExtraLen;
      let content = bytes.slice(start, start + compSize);
      if (method === 8) content = await inflateRaw(content);
      else if (method !== 0) throw new Error('The workbook uses a compression method that this browser could not read.');
      out.set(name, decode(content));
      p += 46 + nameLen + extraLen + commentLen;
    }
    return out;
  }

  function xmlText(s) {
    return String(s || '').replace(/<[^>]+>/g, '').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
  }

  function sharedStrings(xml) {
    if (!xml) return [];
    const list = [];
    const items = xml.match(/<si[\s\S]*?<\/si>/g) || [];
    items.forEach((si) => {
      const parts = [...si.matchAll(/<t(?:\s+xml:space="preserve")?>([\s\S]*?)<\/t>/g)].map((m) => xmlText(m[1]));
      list.push(parts.join(''));
    });
    return list;
  }

  function normaliseXlsxPath(target) {
    const raw = String(target || '').replace(/\\/g, '/');
    if (!raw) return '';
    if (raw.startsWith('/')) return raw.slice(1);
    if (raw.startsWith('xl/')) return raw;
    if (raw.startsWith('worksheets/') || raw.startsWith('sharedStrings') || raw.startsWith('styles') || raw.startsWith('theme/')) return `xl/${raw}`.replace(/\/+/g, '/');
    if (raw.startsWith('../')) return `xl/${raw.replace(/^\.\.\//, '')}`.replace(/\/+/g, '/');
    return `xl/${raw}`.replace(/\/+/g, '/');
  }

  function workbookSheets(workbookXml, relsXml) {
    const rels = {};
    const relTags = relsXml.match(/<Relationship\b[^>]*\/>/g) || [];
    relTags.forEach((tag) => {
      const id = (tag.match(/\bId="([^"]+)"/) || [])[1];
      const target = (tag.match(/\bTarget="([^"]+)"/) || [])[1];
      if (id && target) rels[id] = normaliseXlsxPath(target);
    });
    return [...workbookXml.matchAll(/<sheet[^>]*name="([^"]+)"[^>]*r:id="([^"]+)"/g)].map((m) => ({ name:m[1], path: rels[m[2]] }));
  }

  function colIndex(ref) {
    const letters = ref.replace(/[0-9]/g,'');
    let x = 0;
    for (let i = 0; i < letters.length; i++) x = x * 26 + (letters.charCodeAt(i) - 64);
    return x - 1;
  }

  function parseSheet(xml, sst) {
    const rows = [];
    const rowXml = xml.match(/<row[\s\S]*?<\/row>/g) || [];
    rowXml.forEach((rx) => {
      const row = [];
      const cells = rx.match(/<c[\s\S]*?<\/c>/g) || [];
      cells.forEach((cx) => {
        const ref = (cx.match(/ r="([A-Z]+[0-9]+)"/) || [])[1];
        if (!ref) return;
        const idx = colIndex(ref);
        const t = (cx.match(/ t="([^"]+)"/) || [])[1] || 'n';
        const inline = cx.match(/<is>[\s\S]*?<t(?:\s+xml:space="preserve")?>([\s\S]*?)<\/t>[\s\S]*?<\/is>/);
        let value = '';
        if (inline) value = xmlText(inline[1]);
        else {
          const raw = (cx.match(/<v>([\s\S]*?)<\/v>/) || [])[1] || '';
          value = xmlText(raw);
          if (t === 's') value = sst[Number(value)] ?? '';
          if (t === 'b') value = value === '1' ? 'TRUE' : 'FALSE';
        }
        row[idx] = value;
      });
      rows.push(row);
    });
    return rows;
  }

  async function readWorkbook(fileOrBuffer) {
    const buffer = fileOrBuffer instanceof ArrayBuffer ? fileOrBuffer : await fileOrBuffer.arrayBuffer();
    const files = await unzipEntries(buffer);
    const workbookXml = files.get('xl/workbook.xml');
    const relsXml = files.get('xl/_rels/workbook.xml.rels');
    if (!workbookXml || !relsXml) throw new Error('The workbook did not contain the required Excel files.');
    const sst = sharedStrings(files.get('xl/sharedStrings.xml'));
    const sheets = workbookSheets(workbookXml, relsXml);
    const target = sheets.find((s) => s.name === 'Trial_Data') || sheets[0];
    if (!target || !target.path || !files.get(target.path)) {
      throw new Error('The Trial_Data sheet could not be found.');
    }
    return { sheetName: target.name, rows: parseSheet(files.get(target.path), sst) };
  }

  function findHeaderRow(rows) {
    for (let i = 0; i < Math.min(rows.length, 25); i++) {
      const row = rows[i].map((v) => String(v || '').trim());
      if (row.includes('Treatment ID') && row.includes('Amendment Name') && row.includes('Crop_yield_t_ha')) return i;
    }
    return -1;
  }

  function boolish(v) {
    const s = String(v ?? '').trim().toLowerCase();
    return ['true','1','yes','y'].includes(s);
  }

  function standardiseRows(rows) {
    const headerIndex = findHeaderRow(rows);
    if (headerIndex < 0) throw new Error('The workbook could not find the standard header row. Please use the standard template file.');
    const headers = rows[headerIndex].map((h) => String(h || '').trim());
    const idx = Object.fromEntries(headers.map((h, i) => [h, i]));
    const needed = ['Treatment ID','Replicate ID','Amendment Name','Practice Change Label','Crop_yield_t_ha'];
    const missing = needed.filter((h) => !(h in idx));
    if (missing.length) throw new Error(`Missing required columns: ${missing.join(', ')}`);
    const cleaned = [];
    for (let r = headerIndex + 1; r < rows.length; r++) {
      const row = rows[r] || [];
      const treatmentName = String(row[idx['Amendment Name']] || '').trim();
      const treatmentId = String(row[idx['Treatment ID']] || '').trim();
      const replicateId = String(row[idx['Replicate ID']] || '').trim();
      if (!treatmentName && !treatmentId && !replicateId) continue;
      const totalDirectCosts = COST_HEADERS.reduce((sum, h) => sum + (n(row[idx[h]]) || 0), 0);
      const controlFlag = idx['Is Control'] !== undefined ? boolish(row[idx['Is Control']]) : false;
      const practiceLabel = String(row[idx['Practice Change Label']] || '').trim();
      const isControl = /^t0+$/i.test(treatmentId) || /^control$/i.test(treatmentName) || controlFlag;
      cleaned.push({
        treatmentId,
        replicateId,
        treatmentName,
        practiceLabel,
        isControl,
        cropYield: n(row[idx['Crop_yield_t_ha']]),
        totalDirectCosts,
        reportedTotalFarmCosts: idx['Total Farm Costs_per_ha'] !== undefined ? n(row[idx['Total Farm Costs_per_ha']]) : null
      });
    }
    return cleaned;
  }

  function validate(rows) {
    const messages = [];
    if (!rows.length) {
      messages.push('No data rows were found in the workbook.');
      return messages;
    }
    const controlCount = rows.filter((r) => r.isControl).length;
    if (!controlCount) messages.push('No control rows were identified. Use Treatment ID T00, Amendment Name Control, or an Is Control column.');
    const missingYield = rows.filter((r) => r.cropYield === null).length;
    if (missingYield) messages.push(`${missingYield} row(s) have no crop yield value.`);
    const missingCost = rows.filter((r) => r.totalDirectCosts === null).length;
    if (missingCost) messages.push(`${missingCost} row(s) have no direct cost value.`);
    const costDiffRows = rows.filter((r) => r.reportedTotalFarmCosts !== null && Math.abs((r.reportedTotalFarmCosts || 0) - (r.totalDirectCosts || 0)) > 0.5).length;
    if (costDiffRows) messages.push(`${costDiffRows} row(s) have a difference between reported total farm costs and the summed cost components. The tool uses the summed cost components for analysis.`);
    const keyMap = new Map();
    rows.forEach((r) => {
      const key = r.treatmentId || r.treatmentName;
      if (!keyMap.has(key)) keyMap.set(key, new Set());
      keyMap.get(key).add(r.treatmentName);
    });
    [...keyMap.entries()].forEach(([key, names]) => {
      if (names.size > 1) messages.push(`Treatment ID ${key} is linked to more than one treatment name.`);
    });
    return messages;
  }

  function group(rows) {
    const map = new Map();
    rows.forEach((r) => {
      const key = r.treatmentName || r.treatmentId;
      if (!map.has(key)) {
        map.set(key, {
          treatmentName: key,
          treatmentId: r.treatmentId,
          practiceLabel: r.practiceLabel,
          isControl: r.isControl,
          rows: []
        });
      }
      const g = map.get(key);
      g.rows.push(r);
      g.isControl = g.isControl || r.isControl;
    });
    return [...map.values()].map((g) => {
      const y = g.rows.map((r) => r.cropYield).filter((v) => v !== null);
      const c = g.rows.map((r) => r.totalDirectCosts).filter((v) => v !== null);
      return {
        treatmentName: g.treatmentName,
        treatmentId: g.treatmentId,
        practiceLabel: g.practiceLabel,
        isControl: g.isControl,
        avgYield: y.length ? y.reduce((a,b) => a+b, 0) / y.length : null,
        avgCost: c.length ? c.reduce((a,b) => a+b, 0) / c.length : null,
        replicateCount: g.rows.length
      };
    });
  }

  function populateSelect(el, items, selected) {
    if (!el) return;
    el.innerHTML = '';
    items.forEach((item) => {
      const option = document.createElement('option');
      const value = typeof item === 'string' ? item : item.treatmentName;
      option.value = value;
      option.textContent = value;
      if (value === selected) option.selected = true;
      el.appendChild(option);
    });
  }

  function updateSummary() {
    setText('workbookName', state.workbookName);
    setText('sheetName', state.sheetName);
    setText('rowsCount', String(state.cleanedRows.length || '-'));
    setText('treatmentsCount', String(state.grouped.length || '-'));
    setText('controlsCount', String(state.cleanedRows.filter((r) => r.isControl).length || '-'));
    setText('yieldCount', String(state.cleanedRows.filter((r) => r.cropYield !== null).length || '-'));
    const box = $('validationBox');
    if (!box) return;
    if (!state.cleanedRows.length) {
      box.className = 'message info';
      box.textContent = 'Upload a workbook to see validation messages.';
      return;
    }
    if (state.validation.length) {
      box.className = 'message warning';
      box.innerHTML = state.validation.map((m) => `<div>${escapeHtml(m)}</div>`).join('');
    } else {
      box.className = 'message info';
      box.textContent = 'The workbook was read successfully. Direct costs were calculated from the individual cost components in the workbook.';
    }
  }

  function renderPreview(rows) {
    const thead = document.querySelector('#previewTable thead');
    const tbody = document.querySelector('#previewTable tbody');
    if (!thead || !tbody) return;
    const cols = ['Treatment ID','Replicate ID','Amendment Name','Practice Change Label','Is Control','Crop yield (t/ha)','Calculated direct costs ($/ha)'];
    thead.innerHTML = `<tr>${cols.map((c) => `<th>${escapeHtml(c)}</th>`).join('')}</tr>`;
    tbody.innerHTML = '';
    rows.slice(0, 14).forEach((r) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${escapeHtml(r.treatmentId)}</td><td>${escapeHtml(r.replicateId)}</td><td>${escapeHtml(r.treatmentName)}</td><td>${escapeHtml(r.practiceLabel)}</td><td>${r.isControl ? 'TRUE' : 'FALSE'}</td><td>${fmtNum(r.cropYield,2)}</td><td>${fmtMoney(r.totalDirectCosts)}</td>`;
      tbody.appendChild(tr);
    });
  }

  function refreshSelectors() {
    const all = state.grouped;
    if (!all.length) return;
    const controls = all.filter((x) => x.isControl);
    const nonControls = all.filter((x) => !x.isControl);
    state.selectedControl = controls.find((x) => x.treatmentName === state.selectedControl)?.treatmentName || controls[0]?.treatmentName || all[0].treatmentName;
    state.selectedTreatment = nonControls.find((x) => x.treatmentName === state.selectedTreatment)?.treatmentName || nonControls[0]?.treatmentName || all[0].treatmentName;
    state.sideA = all.find((x) => x.treatmentName === state.sideA)?.treatmentName || all[0].treatmentName;
    state.sideB = all.find((x) => x.treatmentName === state.sideB)?.treatmentName || all[Math.min(1, all.length - 1)].treatmentName;
    populateSelect($('controlSelect'), controls.length ? controls : all, state.selectedControl);
    populateSelect($('treatmentSelect'), nonControls.length ? nonControls : all, state.selectedTreatment);
    populateSelect($('sideTreatmentA'), all, state.sideA);
    populateSelect($('sideTreatmentB'), all, state.sideB);
  }

  function currentMode() {
    return document.querySelector('input[name="compareMode"]:checked')?.value || 'control';
  }

  function discountSchedule() {
    const years = Math.max(1, n($('analysisYears').value) || 10);
    const mode = $('discountMode').value;
    const initial = (n($('discountInitial').value) || 0) / 100;
    const later = (n($('discountLater').value) || 0) / 100;
    const switchYear = Math.max(1, n($('discountSwitchYear').value) || 1);
    const rates = [];
    for (let y = 1; y <= years; y++) {
      if (mode === 'constant') rates.push(initial);
      else rates.push(y <= switchYear ? initial : later);
    }
    return { years, mode, initial, later, switchYear, rates };
  }

  function describeSchedule(s) {
    if (s.mode === 'constant') return `Constant annual discount rate of ${fmtNum(s.initial * 100, 1)}%.`;
    const label = s.mode === 'increasing' ? 'Increasing' : 'Declining';
    return `${label} schedule with ${fmtNum(s.initial * 100, 1)}% up to year ${s.switchYear}, then ${fmtNum(s.later * 100, 1)}% from year ${s.switchYear + 1}.`;
  }

  function pvFactor(rates) {
    let total = 0;
    let disc = 1;
    for (const r of rates) {
      disc *= 1 + r;
      total += 1 / disc;
    }
    return total;
  }

  function computeMetrics(avgYield, avgCost, sched, price, benefitAdj=0, costAdj=0) {
    if (avgYield === null || avgCost === null) return null;
    const factor = pvFactor(sched.rates);
    const annualBenefits = avgYield * price * (1 + benefitAdj / 100);
    const annualCosts = avgCost * (1 + costAdj / 100);
    const pvBenefits = annualBenefits * factor;
    const pvCosts = annualCosts * factor;
    const npv = pvBenefits - pvCosts;
    const bcr = pvCosts === 0 ? null : pvBenefits / pvCosts;
    const gpm = pvBenefits === 0 ? null : ((pvBenefits - pvCosts) / pvBenefits) * 100;
    const roi = pvCosts === 0 ? null : ((pvBenefits - pvCosts) / pvCosts) * 100;
    return { pvBenefits, pvCosts, npv, bcr, gpm, roi };
  }

  function buildTable(rows) {
    return `<table><tbody>${rows.map((r) => `<tr><th>${escapeHtml(r[0])}</th><td>${escapeHtml(r[1])}</td>${r[2] !== undefined ? `<td>${escapeHtml(r[2])}</td>` : ''}</tr>`).join('')}</tbody></table>`;
  }

  function renderControl(control, treatment, sched, price) {
    if (!control || !treatment || !control.metrics || !treatment.metrics) return;
    const delta = treatment.metrics.npv - control.metrics.npv;
    $('sameTreatmentWarning')?.classList.add('hidden');
    setText('headlineSummary', `${treatment.treatmentName} is being compared with ${control.treatmentName}. Under the current assumptions, the estimated net present value is ${fmtMoney(treatment.metrics.npv)} per hectare and the difference relative to the control is ${fmtMoney(delta)} per hectare.`);
    setText('pvBenefits', fmtMoney(treatment.metrics.pvBenefits));
    setText('pvCosts', fmtMoney(treatment.metrics.pvCosts));
    setText('npvValue', fmtMoney(treatment.metrics.npv));
    setText('bcrValue', fmtNum(treatment.metrics.bcr, 2));
    setText('gpmValue', fmtPct(treatment.metrics.gpm));
    setText('roiValue', fmtPct(treatment.metrics.roi));
    setText('deltaValue', fmtMoney(delta));
    setHtml('comparisonDetails', buildTable([
      ['Reference control', control.treatmentName],
      ['Selected treatment', treatment.treatmentName],
      ['Average yield of selected treatment', `${fmtNum(treatment.avgYield,2)} t/ha`],
      ['Average direct costs of selected treatment', fmtMoney(treatment.avgCost)],
      ['Grain price used', `${fmtMoney(price)} per tonne`],
      ['Discount schedule', describeSchedule(sched)]
    ]));
  }

  function renderSide(a, b, control, sched, price) {
    if (!a || !b || !a.metrics || !b.metrics || a.treatmentName === b.treatmentName) {
      $('sameTreatmentWarning')?.classList.remove('hidden');
      setText('headlineSummary', 'Choose two different treatments to view a side by side comparison.');
      return;
    }
    $('sameTreatmentWarning')?.classList.add('hidden');
    setText('headlineSummary', `${a.treatmentName} and ${b.treatmentName} are being compared side by side. The first treatment has an estimated NPV of ${fmtMoney(a.metrics.npv)} per hectare, while the second treatment has an estimated NPV of ${fmtMoney(b.metrics.npv)} per hectare.`);
    setText('pvBenefits', `${fmtMoney(a.metrics.pvBenefits)} vs ${fmtMoney(b.metrics.pvBenefits)}`);
    setText('pvCosts', `${fmtMoney(a.metrics.pvCosts)} vs ${fmtMoney(b.metrics.pvCosts)}`);
    setText('npvValue', `${fmtMoney(a.metrics.npv)} vs ${fmtMoney(b.metrics.npv)}`);
    setText('bcrValue', `${fmtNum(a.metrics.bcr,2)} vs ${fmtNum(b.metrics.bcr,2)}`);
    setText('gpmValue', `${fmtPct(a.metrics.gpm)} vs ${fmtPct(b.metrics.gpm)}`);
    setText('roiValue', `${fmtPct(a.metrics.roi)} vs ${fmtPct(b.metrics.roi)}`);
    setText('deltaValue', control?.metrics ? `${fmtMoney(a.metrics.npv - control.metrics.npv)} vs ${fmtMoney(b.metrics.npv - control.metrics.npv)}` : '-');
    setHtml('comparisonDetails', `<table><thead><tr><th>Metric</th><th>${escapeHtml(a.treatmentName)}</th><th>${escapeHtml(b.treatmentName)}</th></tr></thead><tbody>
      <tr><th>Average yield (t/ha)</th><td>${fmtNum(a.avgYield,2)}</td><td>${fmtNum(b.avgYield,2)}</td></tr>
      <tr><th>Average direct costs ($/ha)</th><td>${fmtMoney(a.avgCost)}</td><td>${fmtMoney(b.avgCost)}</td></tr>
      <tr><th>PV benefits ($/ha)</th><td>${fmtMoney(a.metrics.pvBenefits)}</td><td>${fmtMoney(b.metrics.pvBenefits)}</td></tr>
      <tr><th>PV costs ($/ha)</th><td>${fmtMoney(a.metrics.pvCosts)}</td><td>${fmtMoney(b.metrics.pvCosts)}</td></tr>
      <tr><th>NPV ($/ha)</th><td>${fmtMoney(a.metrics.npv)}</td><td>${fmtMoney(b.metrics.npv)}</td></tr>
      <tr><th>BCR</th><td>${fmtNum(a.metrics.bcr,2)}</td><td>${fmtNum(b.metrics.bcr,2)}</td></tr>
      <tr><th>Gross profit margin (%)</th><td>${fmtPct(a.metrics.gpm)}</td><td>${fmtPct(b.metrics.gpm)}</td></tr>
      <tr><th>ROI (%)</th><td>${fmtPct(a.metrics.roi)}</td><td>${fmtPct(b.metrics.roi)}</td></tr>
      <tr><th>Difference versus control ($/ha)</th><td>${control?.metrics ? fmtMoney(a.metrics.npv - control.metrics.npv) : '-'}</td><td>${control?.metrics ? fmtMoney(b.metrics.npv - control.metrics.npv) : '-'}</td></tr>
      <tr><th>Grain price used</th><td>${fmtMoney(price)} per tonne</td><td>${fmtMoney(price)} per tonne</td></tr>
      <tr><th>Discount schedule</th><td>${escapeHtml(describeSchedule(sched))}</td><td>${escapeHtml(describeSchedule(sched))}</td></tr>
    </tbody></table>`);
  }

  function renderRanking() {
    const tbody = document.querySelector('#rankingTable tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    state.ranking.forEach((r) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${r.rank}</td><td>${escapeHtml(r.treatmentName)}</td><td>${fmtNum(r.avgYield,2)}</td><td>${fmtMoney(r.avgCost)}</td><td>${fmtMoney(r.metrics?.pvBenefits)}</td><td>${fmtMoney(r.metrics?.pvCosts)}</td><td>${fmtMoney(r.metrics?.npv)}</td><td>${fmtNum(r.metrics?.bcr,2)}</td><td>${fmtPct(r.metrics?.gpm)}</td><td>${fmtPct(r.metrics?.roi)}</td><td>${fmtMoney(r.deltaVsControl)}</td>`;
      tbody.appendChild(tr);
    });
  }

  function getProjectInfo() {
    return {
      projectName: $('projectName')?.value?.trim() || 'Not provided',
      collaborators: $('collaborators')?.value?.trim() || 'Not provided',
      fundingAgency: $('fundingAgency')?.value?.trim() || 'Not provided',
      projectSummary: $('projectSummary')?.value?.trim() || 'Not provided',
      methodology: $('projectMethodology')?.value?.trim() || 'Not provided'
    };
  }

  function updateProjectSummaryBox() {
    const info = getProjectInfo();
    setHtml('reportProjectSummary', `
      <div class="report-meta-grid">
        <div><strong>Name of project</strong><div>${escapeHtml(info.projectName)}</div></div>
        <div><strong>Name of collaborators</strong><div>${escapeHtml(info.collaborators)}</div></div>
        <div><strong>Funding agency</strong><div>${escapeHtml(info.fundingAgency)}</div></div>
        <div class="full"><strong>Project summary</strong><div>${escapeHtml(info.projectSummary)}</div></div>
        <div class="full"><strong>Brief description of methodology of project</strong><div>${escapeHtml(info.methodology)}</div></div>
      </div>`);
  }

  function buildPrompt() {
    const assumptions = `Current analysis settings
Grain price: ${fmtMoney(n($('grainPrice')?.value) || 0)} per tonne
Analysis years: ${n($('analysisYears')?.value) || 10}
Discount schedule: ${describeSchedule(discountSchedule())}`;
    const info = getProjectInfo();
    const rankingRows = state.ranking.map((r) => `| ${r.rank} | ${r.treatmentName} | ${fmtNum(r.avgYield,2)} | ${fmtMoney(r.avgCost)} | ${fmtMoney(r.metrics.pvBenefits)} | ${fmtMoney(r.metrics.pvCosts)} | ${fmtMoney(r.metrics.npv)} | ${fmtNum(r.metrics.bcr,2)} | ${fmtPct(r.metrics.gpm)} | ${fmtPct(r.metrics.roi)} | ${fmtMoney(r.deltaVsControl)} |`).join('\n');
    const sensRows = state.sensitivity.map((s) => `| ${s.name} | ${fmtNum(s.rate,1)} | ${fmtMoney(s.price)} | ${fmtNum(s.benefit,1)} | ${fmtNum(s.cost,1)} | ${fmtMoney(s.metrics?.npv)} | ${fmtNum(s.metrics?.bcr,2)} | ${fmtPct(s.metrics?.gpm)} |`).join('\n');
    return `Use the results below to write a professional and human sounding report for farmers, advisers, project stakeholders and policy audiences. Use Australian spelling. Do not use em dashes. Prefer full paragraphs over bullet points. The writing should sound natural and not artificial.

Project details
Name of project: ${info.projectName}
Name of collaborators: ${info.collaborators}
Funding agency: ${info.fundingAgency}
Project summary: ${info.projectSummary}
Brief description of methodology of project: ${info.methodology}

Prepare the report with the following sections in this order.
1. Description of Project based on the brief methodology and integrated with the treatments.
2. Interpretation of Main Findings.
3. Treatment Ranking.
4. Sensitivity Analysis.
5. Report to inform farming practices.
6. Report to inform policy decision-making.

${assumptions}

Treatment ranking
| Rank | Treatment | Average yield (t/ha) | Average direct costs ($/ha) | PV benefits ($/ha) | PV costs ($/ha) | NPV ($/ha) | BCR | Gross profit margin (%) | ROI (%) | Difference versus control ($/ha) |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
${rankingRows || 'No ranking available yet.'}

Sensitivity analysis
| Scenario | Discount rate (%) | Grain price ($/t) | Benefits change (%) | Costs change (%) | NPV ($/ha) | BCR | Gross profit margin (%) |
|---|---:|---:|---:|---:|---:|---:|---:|
${sensRows || 'No sensitivity results available yet.'}`;
  }

  function updatePrompt() {
    const el = $('aiPromptPreview');
    if (el) el.value = buildPrompt();
  }

  function renderSensitivity(notify=true) {
    if (!state.ranking.length) return;
    const targetName = currentMode() === 'control' ? state.selectedTreatment : state.sideA;
    const target = state.ranking.find((r) => r.treatmentName === targetName) || state.ranking[0];
    const tbody = document.querySelector('#sensitivityTable tbody');
    if (!tbody || !target) return;
    const scenarios = [1,2,3].map((i) => ({
      name: `Scenario ${i}`,
      rate: n($(`s${i}Rate`).value) || 0,
      price: n($(`s${i}Price`).value) || 0,
      benefit: n($(`s${i}Benefit`).value) || 0,
      cost: n($(`s${i}Cost`).value) || 0
    }));
    state.sensitivity = scenarios.map((s) => {
      const years = Math.max(1, n($('analysisYears').value) || 10);
      const sched = { ...discountSchedule(), rates: Array.from({ length: years }, () => s.rate / 100) };
      return { ...s, metrics: computeMetrics(target.avgYield, target.avgCost, sched, s.price, s.benefit, s.cost) };
    });
    tbody.innerHTML = '';
    state.sensitivity.forEach((s) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${s.name}</td><td>${fmtNum(s.rate,1)}</td><td>${fmtMoney(s.price)}</td><td>${fmtNum(s.benefit,1)}</td><td>${fmtNum(s.cost,1)}</td><td>${fmtMoney(s.metrics?.pvBenefits)}</td><td>${fmtMoney(s.metrics?.pvCosts)}</td><td>${fmtMoney(s.metrics?.npv)}</td><td>${fmtNum(s.metrics?.bcr,2)}</td><td>${fmtPct(s.metrics?.gpm)}</td>`;
      tbody.appendChild(tr);
    });
    updatePrompt();
    if (notify) toast('Sensitivity updated', 'Sensitivity results have been refreshed.', 'info');
  }


  function miniLabel(text, max=20) {
    const t = String(text || '');
    return t.length > max ? `${t.slice(0, max - 1)}…` : t;
  }

  function renderBarChart(id, rows, valueFn, formatter) {
    const el = $(id);
    if (!el) return;
    if (!rows.length) {
      el.innerHTML = '<div class="chart-empty">Run the analysis to display this graph.</div>';
      return;
    }
    const values = rows.map(valueFn).map((v) => (v === null || v === undefined || Number.isNaN(v) ? 0 : Number(v)));
    const min = Math.min(...values, 0);
    const max = Math.max(...values, 0);
    const range = max - min || 1;
    const width = 820;
    const barH = 26;
    const gap = 14;
    const margin = { top: 20, right: 70, bottom: 20, left: 220 };
    const height = margin.top + margin.bottom + rows.length * (barH + gap);
    const zeroX = margin.left + ((0 - min) / range) * (width - margin.left - margin.right);
    const bars = rows.map((row, i) => {
      const v = values[i];
      const y = margin.top + i * (barH + gap);
      const x = margin.left + ((Math.min(v, 0) - min) / range) * (width - margin.left - margin.right);
      const w = Math.max(2, Math.abs(v / range) * (width - margin.left - margin.right));
      const label = formatter(v);
      const textX = v >= 0 ? x + w + 6 : x - 6;
      const anchor = v >= 0 ? 'start' : 'end';
      return `
        <text x="${margin.left - 10}" y="${y + 17}" text-anchor="end" class="chart-label">${escapeHtml(miniLabel(row.treatmentName))}</text>
        <rect x="${x}" y="${y}" width="${w}" height="${barH}" rx="8" fill="${v >= 0 ? '#1b7f4a' : '#a13a2c'}"></rect>
        <text x="${textX}" y="${y + 17}" text-anchor="${anchor}" class="chart-value">${escapeHtml(label)}</text>`;
    }).join('');
    el.innerHTML = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Chart"><line x1="${zeroX}" x2="${zeroX}" y1="10" y2="${height - 10}" stroke="#8ea48e" stroke-width="1.5"></line>${bars}</svg>`;
  }

  function renderCharts() {
    const rows = state.ranking.slice(0, 12);
    renderBarChart('chartBcr', rows, (r) => r.metrics?.bcr ?? 0, (v) => fmtNum(v, 2));
    renderBarChart('chartNpv', rows, (r) => r.metrics?.npv ?? 0, (v) => fmtMoney(v));
    renderBarChart('chartDelta', rows, (r) => r.deltaVsControl ?? 0, (v) => fmtMoney(v));
    renderBarChart('chartGpm', rows, (r) => r.metrics?.gpm ?? 0, (v) => fmtPct(v));
    renderBarChart('chartRoi', rows, (r) => r.metrics?.roi ?? 0, (v) => fmtPct(v));
  }

  function generateLocalSummary() {
    if (!state.ranking.length || !state.lastRun) return '';
    const top = state.ranking[0];
    const sensNpvs = state.sensitivity.map((s) => s.metrics?.npv).filter((v) => v !== null && v !== undefined && !Number.isNaN(v));
    const sensMin = sensNpvs.length ? Math.min(...sensNpvs) : null;
    const sensMax = sensNpvs.length ? Math.max(...sensNpvs) : null;
    const info = getProjectInfo();
    return [
      `Description of Project\n${info.projectName !== 'Not provided' ? info.projectName + '. ' : ''}${info.projectSummary !== 'Not provided' ? info.projectSummary + ' ' : ''}${info.methodology !== 'Not provided' ? info.methodology : 'Project methodology details were not entered in the Data tab.'}`,
      `Interpretation of Main Findings\nUnder the current analysis settings, ${top.treatmentName} is ranked first with an estimated net present value of ${fmtMoney(top.metrics.npv)} per hectare, a benefit-cost ratio of ${fmtNum(top.metrics.bcr,2)}, a gross profit margin of ${fmtPct(top.metrics.gpm)}, and a return on investment of ${fmtPct(top.metrics.roi)}. Relative to the control treatment, the estimated difference in net present value is ${fmtMoney(top.deltaVsControl)} per hectare.`,
      `Treatment Ranking\nThe ranking table reports all treatments using average yield, average direct costs, present value of benefits, present value of costs, net present value, benefit-cost ratio, gross profit margin, return on investment, and the difference in net present value from the control. Treatments at the top of the table combine stronger discounted benefits with lower or more efficient direct costs.`,
      `Sensitivity Analysis\nThe sensitivity analysis tests alternative discount rates, grain prices, benefit assumptions, and cost assumptions for the selected treatment. The estimated net present value ranges from ${sensMin === null ? '-' : fmtMoney(sensMin)} per hectare to ${sensMax === null ? '-' : fmtMoney(sensMax)} per hectare across the scenarios currently entered in the tool.`,
      `Report to inform farming practices\nFrom a farming perspective, the results indicate which treatment delivers the strongest financial performance under the assumptions entered into the tool. Farmers and advisers should interpret the ranking alongside agronomic feasibility, local prices, seasonal conditions, and operational fit.`,
      `Report to inform policy decision-making\nFrom a policy perspective, the tool highlights which trial treatments generate stronger discounted gains relative to the control and how sensitive those gains are to price, benefit, cost, and discounting assumptions. This can help prioritise practices for extension, demonstration, and future evaluation.`
    ].join('\\n\\n');
  }

  function narrativeToHtml(text) {
    return String(text || '').split(/\\n\\n+/).map((block) => {
      const parts = block.split(/\\n/);
      const heading = parts.shift();
      return `<section class="report-section"><h4>${escapeHtml(heading || '')}</h4><p>${escapeHtml(parts.join(' '))}</p></section>`;
    }).join('');
  }

  function rankingTableHtml() {
    return state.ranking.map((r) => `<tr><td>${r.rank}</td><td>${escapeHtml(r.treatmentName)}</td><td>${fmtNum(r.avgYield,2)}</td><td>${fmtMoney(r.avgCost)}</td><td>${fmtMoney(r.metrics.pvBenefits)}</td><td>${fmtMoney(r.metrics.pvCosts)}</td><td>${fmtMoney(r.metrics.npv)}</td><td>${fmtNum(r.metrics.bcr,2)}</td><td>${fmtPct(r.metrics.gpm)}</td><td>${fmtPct(r.metrics.roi)}</td><td>${fmtMoney(r.deltaVsControl)}</td></tr>`).join('');
  }

  function sensitivityTableHtml() {
    return state.sensitivity.map((s) => `<tr><td>${escapeHtml(s.name)}</td><td>${fmtNum(s.rate,1)}</td><td>${fmtMoney(s.price)}</td><td>${fmtNum(s.benefit,1)}</td><td>${fmtNum(s.cost,1)}</td><td>${fmtMoney(s.metrics?.pvBenefits)}</td><td>${fmtMoney(s.metrics?.pvCosts)}</td><td>${fmtMoney(s.metrics?.npv)}</td><td>${fmtNum(s.metrics?.bcr,2)}</td><td>${fmtPct(s.metrics?.gpm)}</td></tr>`).join('');
  }

  function buildChartsForReport() {
    const ids = ['chartBcr','chartNpv','chartDelta','chartGpm','chartRoi'];
    return ids.map((id) => $(id)?.innerHTML || '').join('');
  }

  function buildReportHtml() {
    updateProjectSummaryBox();
    const info = getProjectInfo();
    const narrative = $('reportNarrative')?.value?.trim() || generateLocalSummary();
    const includeLogos = ($('includeReportLogos')?.value || 'yes') === 'yes';
    const uonSrc = document.querySelector('.brand-logo-uon')?.src || 'logo_university_newcastle.jpg';
    const soilSrc = document.querySelector('.brand-logo-soil')?.src || 'logo_soil_crc.png';
    const report = `<!doctype html><html><head><meta charset="utf-8"><title>SOIL CRC BCA Report</title><style>
      body{font-family:Arial,Helvetica,sans-serif;color:#1f2b1f;margin:0;background:#f6f8f5} .wrap{max-width:1180px;margin:0 auto;padding:28px}
      .site-header,.box{background:#fff;border:1px solid #d9e2d4;border-radius:16px;padding:20px;margin-bottom:18px}
      .brand-wrap,.footer-row{display:flex;align-items:center;justify-content:space-between;gap:18px}.brand-copy .eyebrow{font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#2b6c56;font-weight:700}.brand-copy h1{margin:2px 0 0;font-size:28px;line-height:1.15}.brand-logo-uon{height:56px}.brand-logo-soil{height:34px}
      .two{display:grid;grid-template-columns:1fr 1fr;gap:18px}.report-meta-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}.full{grid-column:1/-1}
      table{width:100%;border-collapse:collapse;font-size:14px} th,td{border:1px solid #dfe8da;padding:9px 10px;text-align:left;vertical-align:top} th{background:#eef3ec}
      .chart-row{display:grid;grid-template-columns:1fr 1fr;gap:16px}.chart-panel{background:#fff;border:1px solid #d9e2d4;border-radius:16px;padding:16px}.chart-panel svg{width:100%;height:auto}.footer-row{padding-top:12px;color:#425442;font-size:13px}.footer-logos img{height:26px;margin-left:12px}
      h2,h3,h4{margin-top:0}.report-section{margin-bottom:14px}.report-section p{line-height:1.65;margin:0}
      @media print{body{background:#fff}.box,.chart-panel,.site-header{break-inside:avoid}} @media (max-width:900px){.two,.chart-row,.report-meta-grid{grid-template-columns:1fr}.brand-wrap,.footer-row{flex-direction:column;align-items:flex-start}}
    </style></head><body><div class="wrap">
      <header class="site-header"><div class="brand-wrap">${includeLogos ? `<img src="${uonSrc}" alt="University of Newcastle logo" class="brand-logo-uon">` : ''}<div class="brand-copy"><div class="eyebrow">SOIL CRC</div><h1>Benefit-Cost Analysis Tool Report</h1></div>${includeLogos ? `<img src="${soilSrc}" alt="SOIL CRC logo" class="brand-logo-soil">` : ''}</div></header>
      <div class="box"><h2>Part A: Project Summary</h2><div class="report-meta-grid"><div><strong>Name of Project</strong><div>${escapeHtml(info.projectName)}</div></div><div><strong>Name of Collaborators</strong><div>${escapeHtml(info.collaborators)}</div></div><div><strong>Funding Agency</strong><div>${escapeHtml(info.fundingAgency)}</div></div><div class="full"><strong>Project Summary</strong><div>${escapeHtml(info.projectSummary)}</div></div><div class="full"><strong>Brief Description of Methodology of Project</strong><div>${escapeHtml(info.methodology)}</div></div></div></div>
      <div class="two"><div class="box"><h2>Selected settings</h2><p><strong>Grain price:</strong> ${fmtMoney(state.lastRun?.price)}</p><p><strong>Analysis years:</strong> ${String(n($('analysisYears')?.value) || 10)}</p><p><strong>Discount schedule:</strong> ${escapeHtml(describeSchedule(state.lastRun?.sched || discountSchedule()))}</p></div><div class="box"><h2>Headline interpretation</h2><p>${escapeHtml($('headlineSummary')?.textContent || '')}</p></div></div>
      <div class="box"><h2>Part B: Report</h2>${narrativeToHtml(narrative)}</div>
      <div class="box"><h2>Treatment Ranking</h2><table><thead><tr><th>Rank</th><th>Treatment</th><th>Average yield (t/ha)</th><th>Average direct costs ($/ha)</th><th>PV benefits ($/ha)</th><th>PV costs ($/ha)</th><th>NPV ($/ha)</th><th>BCR</th><th>Gross profit margin (%)</th><th>ROI (%)</th><th>Difference versus control ($/ha)</th></tr></thead><tbody>${rankingTableHtml()}</tbody></table></div>
      <div class="box"><h2>Sensitivity Analysis</h2><table><thead><tr><th>Scenario</th><th>Discount rate (%)</th><th>Grain price ($/t)</th><th>Benefits change (%)</th><th>Costs change (%)</th><th>PV benefits ($/ha)</th><th>PV costs ($/ha)</th><th>NPV ($/ha)</th><th>BCR</th><th>Gross profit margin (%)</th></tr></thead><tbody>${sensitivityTableHtml()}</tbody></table></div>
      <div class="box"><h2>Graphs</h2><div class="chart-row"><div class="chart-panel"><h3>BCR graph</h3>${$('chartBcr')?.innerHTML || ''}</div><div class="chart-panel"><h3>NPV graph</h3>${$('chartNpv')?.innerHTML || ''}</div><div class="chart-panel"><h3>NPV difference from control</h3>${$('chartDelta')?.innerHTML || ''}</div><div class="chart-panel"><h3>Gross Profit Margin</h3>${$('chartGpm')?.innerHTML || ''}</div><div class="chart-panel"><h3>ROI graph</h3>${$('chartRoi')?.innerHTML || ''}</div></div></div>
      <div class="box"><h2>Disclaimer</h2><p>The CRC for High Performance Soils has endeavoured to ensure that the tool provides the benefits and costs of using soil amendments and management practices in crop production. It makes no warranty regarding the accuracy of the information provided and will not be liable if the information is inaccurate, incomplete or out of date, nor will it be liable for any direct or indirect damages arising from its use. The outputs of the BCA Tool and related summary report should not be used as a substitute for seeking independent professional advice.</p></div>
      ${includeLogos ? `<footer class="footer-row"><div>SOIL CRC Benefit-Cost Analysis Tool</div><div class="footer-logos"><img src="${uonSrc}" alt=""><img src="${soilSrc}" alt=""></div></footer>` : ''}
    </div></body></html>`;
    state.reportHtml = report;
    return report;
  }

  function renderReportPreview() {
    if (!state.ranking.length) {
      setHtml('reportPreview', '<div class="message info">Run the analysis to generate the report preview.</div>');
      updateProjectSummaryBox();
      return;
    }
    const html = buildReportHtml();
    const body = html.match(/<body>([\s\S]*)<\/body>/i);
    setHtml('reportPreview', body ? body[1] : html);
  }

  function downloadWordReport() {
    if (!state.ranking.length) {
      toast('No report available', 'Run the analysis first.', 'warn');
      return;
    }
    const html = buildReportHtml();
    downloadBlob('soil_crc_bca_report.doc', html, 'application/msword');
    toast('Word report downloaded', 'The Word-compatible report has been downloaded.', 'info');
  }

  function openPdfReport() {
    if (!state.ranking.length) {
      toast('No report available', 'Run the analysis first.', 'warn');
      return;
    }
    const w = window.open('', '_blank');
    if (!w) {
      toast('Popup blocked', 'Allow popups for this site to open the PDF-ready report.', 'warn');
      return;
    }
    w.document.open();
    w.document.write(buildReportHtml());
    w.document.close();
    window.setTimeout(() => { try { w.print(); } catch (_) {} }, 400);
    toast('PDF-ready report opened', 'Use the browser print dialog to save the report as a PDF.', 'info');
  }

  function applySettings(notify = true) {
    const price = n($('grainPrice')?.value);
    const years = Math.round(n($('analysisYears')?.value));
    const initial = n($('discountInitial')?.value);
    const later = n($('discountLater')?.value);
    const switchYear = Math.round(n($('discountSwitchYear')?.value));
    const mode = $('discountMode')?.value || 'constant';

    if (!(price > 0)) {
      setClass('settingsStatus','message warning'); setText('settingsStatus','Settings were not applied. Enter a grain price greater than zero.');
      toast('Settings not applied', 'Enter a grain price greater than zero.', 'warn');
      $('grainPrice')?.focus();
      return false;
    }
    if (!(years >= 1)) {
      setClass('settingsStatus','message warning'); setText('settingsStatus','Settings were not applied. Enter an analysis period of at least one year.');
      toast('Settings not applied', 'Enter an analysis period of at least one year.', 'warn');
      $('analysisYears')?.focus();
      return false;
    }
    if (initial === null || initial < 0) {
      setClass('settingsStatus','message warning'); setText('settingsStatus','Settings were not applied. Enter a valid initial discount rate.');
      toast('Settings not applied', 'Enter a valid initial discount rate.', 'warn');
      $('discountInitial')?.focus();
      return false;
    }
    if (later === null || later < 0) {
      setClass('settingsStatus','message warning'); setText('settingsStatus','Settings were not applied. Enter a valid later discount rate.');
      toast('Settings not applied', 'Enter a valid later discount rate.', 'warn');
      $('discountLater')?.focus();
      return false;
    }
    if (!(switchYear >= 1)) {
      setClass('settingsStatus','message warning'); setText('settingsStatus','Settings were not applied. Enter a switch year of at least one.');
      toast('Settings not applied', 'Enter a switch year of at least one.', 'warn');
      $('discountSwitchYear')?.focus();
      return false;
    }

    const rates = [];
    for (let y = 1; y <= years; y++) {
      if (mode === 'constant') rates.push(initial / 100);
      else rates.push(y <= switchYear ? initial / 100 : later / 100);
    }
    const sched = {
      years,
      mode,
      initial: initial / 100,
      later: later / 100,
      switchYear,
      rates
    };
    setText('discountLabelBox', describeSchedule(sched));
    updatePrompt();
    if (state.cleanedRows.length && state.grouped.length) {
      runAnalysis(false);
      renderSensitivity(false);
    }
    const status = $('settingsStatus');
    if (status) {
      status.className = 'message success';
      status.textContent = `Settings applied. Grain price ${fmtMoney(price)} per tonne, analysis period ${years} year${years === 1 ? '' : 's'}, and ${describeSchedule(sched).toLowerCase()}.`;
    }
    if (notify) {
      // handled by the click listener so the popup appears after the UI updates
    }
    return true;
  }

  function runAnalysis(notify=true) {
    if (!state.grouped.length) {
      toast('No data available', 'Upload a completed workbook before running the analysis.', 'warn');
      return;
    }
    const sched = discountSchedule();
    setText('discountLabelBox', describeSchedule(sched));
    const price = n($('grainPrice').value) || 0;
    const calc = state.grouped.map((g) => ({ ...g, metrics: computeMetrics(g.avgYield, g.avgCost, sched, price) }));
    const control = calc.find((g) => g.treatmentName === state.selectedControl) || calc.find((g) => g.isControl);
    if (!control || !control.metrics) {
      toast('Control not available', 'A valid control treatment with yield and direct cost data is required.', 'warn');
      return;
    }
    state.ranking = calc.filter((g) => g.metrics).map((g) => ({ ...g, deltaVsControl: g.metrics.npv - control.metrics.npv })).sort((a,b) => b.metrics.npv - a.metrics.npv).map((g, i) => ({ ...g, rank: i + 1 }));
    if (currentMode() === 'control') {
      const treatment = state.ranking.find((g) => g.treatmentName === state.selectedTreatment) || state.ranking[0];
      renderControl(control, treatment, sched, price);
    } else {
      const a = state.ranking.find((g) => g.treatmentName === state.sideA);
      const b = state.ranking.find((g) => g.treatmentName === state.sideB);
      renderSide(a, b, control, sched, price);
    }
    renderRanking();
    renderCharts();
    renderSensitivity(false);
    updatePrompt();
    renderReportPreview();
    state.lastRun = { sched, price };
    if (notify) toast('Analysis complete', 'Results, ranking and prompt have been updated.', 'info');
  }

  function toCsv(rows) {
    const headers = ['Treatment ID','Replicate ID','Amendment Name','Practice Change Label','Is Control','Crop yield (t/ha)','Calculated direct costs ($/ha)'];
    const lines = [headers.join(',')];
    rows.forEach((r) => {
      lines.push([r.treatmentId,r.replicateId,r.treatmentName,r.practiceLabel,r.isControl ? 'TRUE':'FALSE',r.cropYield ?? '',r.totalDirectCosts ?? ''].map((v) => `"${String(v).replace(/"/g,'""')}"`).join(','));
    });
    return lines.join('\n');
  }

  function downloadBlob(filename, content, type) {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  async function handleWorkbook(fileOrBuffer, fileName='uploaded_workbook.xlsx') {
    try {
      const parsed = await readWorkbook(fileOrBuffer);
      state.workbookName = fileName;
      state.sheetName = parsed.sheetName;
      state.cleanedRows = standardiseRows(parsed.rows);
      state.validation = validate(state.cleanedRows);
      state.grouped = group(state.cleanedRows);
      refreshSelectors();
      updateSummary();
      renderPreview(state.cleanedRows);
      updatePrompt();
      updateProjectSummaryBox();
      renderReportPreview();
      setClass('uploadStatus', state.validation.length ? 'status warn' : 'status ok');
      setText('uploadStatus', state.validation.length ? 'Workbook uploaded with validation messages. Review the notes below before relying on the results.' : 'Workbook uploaded successfully. You can now review results in the Results tab.');
      const csvBtn = $('downloadCsvBtn');
      if (csvBtn) csvBtn.disabled = false;
      runAnalysis(false);
      activateTab('results');
      toast('Workbook uploaded', 'The workbook was read successfully and the results are ready to review.', state.validation.length ? 'warn' : 'info');
    } catch (err) {
      console.error(err);
      state.cleanedRows = [];
      state.grouped = [];
      state.ranking = [];
      state.validation = [err?.message || 'The workbook could not be read.'];
      setClass('uploadStatus', 'status warn');
      setText('uploadStatus', `The uploaded workbook could not be read. ${err?.message || ''}`.trim());
      updateSummary();
      renderPreview([]);
      updatePrompt();
      toast('Upload failed', err?.message || 'The workbook could not be read.', 'warn');
    }
  }

  async function loadExample() {
    try {
      const buffer = base64ToArrayBuffer(EXAMPLE_WORKBOOK_B64);
      await handleWorkbook(buffer, 'example_data.xlsx');
      activateTab('results');
      toast('Example loaded', 'Example data has been loaded and the results tab is ready to review.', 'info');
    } catch (err) {
      console.error(err);
      toast('Example load failed', err?.message || 'The example workbook could not be loaded.', 'warn');
    }
  }

  function openAi(base) {
    const prompt = buildPrompt();
    window.open(`${base}${encodeURIComponent(prompt)}`, '_blank', 'noopener');
  }

  function copyPrompt() {
    navigator.clipboard.writeText(buildPrompt()).then(() => {
      toast('Prompt copied', 'The prompt has been copied to the clipboard.', 'info');
    }).catch(() => {
      toast('Copy failed', 'The prompt could not be copied automatically.', 'warn');
    });
  }


  function updateAiButtons() {
    const access = $('aiAccessSelect')?.value || 'none';
    const chat = $('openChatGPTBtn');
    const cop = $('openCopilotBtn');
    if (chat) chat.disabled = access === 'none' || access === 'copilot';
    if (cop) cop.disabled = access === 'none' || access === 'chatgpt';
  }

  function openGuide() {
    window.open('guide.html', '_blank', 'noopener');
    toast('Guide opened', 'The full user guide has been opened in a new window.', 'info');
  }

  function bind() {
    document.querySelectorAll('.tab').forEach((b) => b.addEventListener('click', () => activateTab(b.dataset.tab)));
    document.querySelectorAll('.jump').forEach((b) => b.addEventListener('click', () => activateTab(b.dataset.target)));
    const fileInput = $('fileInput');
    const clickUpload = () => { if (fileInput) fileInput.click(); };
    $('openUploadBtn')?.addEventListener('click', clickUpload);
    $('uploadTile')?.addEventListener('click', clickUpload);
    fileInput?.addEventListener('change', async (e) => {
      const f = e.target.files?.[0];
      if (f) await handleWorkbook(f, f.name);
      e.target.value = '';
    });
    $('loadExampleBtn')?.addEventListener('click', loadExample);
    $('downloadCsvBtn')?.addEventListener('click', () => {
      if (!state.cleanedRows.length) return;
      downloadBlob('soil_crc_bca_cleaned_data.csv', toCsv(state.cleanedRows), 'text/csv;charset=utf-8');
      toast('CSV downloaded', 'The cleaned CSV file has been downloaded.', 'info');
    });

    const applyBtn = $('applySettingsBtn');
    const handleApplySettings = () => {
      try {
        if (applyBtn) applyBtn.disabled = true;
        const ok = applySettings(false);
        if (ok) {
          toast('Settings applied', 'Your analysis settings have been applied successfully.', 'info');
          renderReportPreview();
        }
        return false;
      } catch (err) {
        console.error(err);
        setClass('settingsStatus','message warning');
        setText('settingsStatus', `Settings could not be applied. ${err?.message || 'Please review the current values and try again.'}`);
        toast('Settings not applied', err?.message || 'Please review the current values and try again.', 'warn');
        return false;
      } finally {
        window.setTimeout(() => { if (applyBtn) applyBtn.disabled = false; }, 100);
      }
    };
    applyBtn?.addEventListener('click', handleApplySettings);
    window.forceApplySettings = handleApplySettings;

    $('runBtn')?.addEventListener('click', () => runAnalysis(true));
    $('runSensitivityBtn')?.addEventListener('click', () => { renderSensitivity(true); renderReportPreview(); });
    $('reportAllBtn')?.addEventListener('click', () => { renderReportPreview(); activateTab('report'); });
    $('openPdfReportBtn')?.addEventListener('click', openPdfReport);
    $('downloadWordBtn')?.addEventListener('click', downloadWordReport);
    $('refreshReportBtn')?.addEventListener('click', () => { renderReportPreview(); toast('Report refreshed', 'The report preview has been updated.', 'info'); });
    $('generateLocalSummaryBtn')?.addEventListener('click', () => {
      const t = generateLocalSummary();
      if ($('reportNarrative')) $('reportNarrative').value = t;
      renderReportPreview();
      toast('Local summary generated', 'A local draft summary has been added to the report.', 'info');
    });

    $('openGuideBtn')?.addEventListener('click', openGuide);
    $('controlSelect')?.addEventListener('change', (e) => { state.selectedControl = e.target.value; runAnalysis(false); });
    $('treatmentSelect')?.addEventListener('change', (e) => { state.selectedTreatment = e.target.value; runAnalysis(false); });
    $('sideTreatmentA')?.addEventListener('change', (e) => { state.sideA = e.target.value; runAnalysis(false); });
    $('sideTreatmentB')?.addEventListener('change', (e) => { state.sideB = e.target.value; runAnalysis(false); });
    document.querySelectorAll('input[name="compareMode"]').forEach((el) => el.addEventListener('change', () => {
      const side = currentMode() === 'side';
      $('compareControlPanel')?.classList.toggle('hidden', side);
      $('compareSidePanel')?.classList.toggle('hidden', !side);
      runAnalysis(false);
    }));

    ['grainPrice','analysisYears','discountMode','discountInitial','discountLater','discountSwitchYear'].forEach((id) => {
      $(id)?.addEventListener('change', () => { updatePrompt(); renderReportPreview(); });
      $(id)?.addEventListener('input', updatePrompt);
    });
    ['projectName','collaborators','fundingAgency','projectSummary','projectMethodology','reportNarrative','includeReportLogos','aiAccessSelect'].forEach((id) => {
      $(id)?.addEventListener('input', () => { updateProjectSummaryBox(); updatePrompt(); renderReportPreview(); });
      $(id)?.addEventListener('change', () => { updateProjectSummaryBox(); updatePrompt(); renderReportPreview(); });
    });

    $('copyPromptBtn')?.addEventListener('click', copyPrompt);
    $('openChatGPTBtn')?.addEventListener('click', () => openAi('https://chatgpt.com/?q='));
    $('openCopilotBtn')?.addEventListener('click', () => openAi('https://copilot.microsoft.com/?q='));
    $('aiAccessSelect')?.addEventListener('change', updateAiButtons);
    updateAiButtons();
  }

  function init() {
    bind();
    updateSummary();
    updateProjectSummaryBox();
    updatePrompt();
    applySettings(false);
    renderCharts();
    renderReportPreview();
    activateTab('intro');
  }

  init();
})();
