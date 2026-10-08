/* ===================== Days and dates ===================== */

const DAY = 24 * 60 * 60 * 1000;
const POINTS = { easy: 10, medium: 20, hard: 30 };
const LEVEL_NAMES = { easy: "Easy", medium: "Medium", hard: "Hard" };

const [sy, sm, sd] = START_DATE.split("-").map(Number);

// Midnight at the start of day n, in the viewer's own time zone.
function dayStart(n) {
  return new Date(sy, sm - 1, sd + n - 1);
}

function liveDay() {
  const preview = parseInt(new URLSearchParams(location.search).get("day"), 10);
  if (preview > 0) return preview;
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.max(1, Math.round((today - dayStart(1)) / DAY) + 1);
}

function dayInfo(n) {
  const level = ROTATION[(n - 1) % ROTATION.length];
  const list = LEVELS[level];
  const ch = list[Math.floor((n - 1) / ROTATION.length) % list.length];
  return { level, ch };
}

function fmtLong(n) {
  return dayStart(n).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
}

function fmtShort(n) {
  return dayStart(n).toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

const isPreview = new URLSearchParams(location.search).has("day");
const today = liveDay();
let viewDay = today;

/* ===================== Saved progress (this browser only) ===================== */

const STORE_KEY = "cfm-daily-v1";
let store = { solved: {}, drafts: {} };
try {
  const saved = JSON.parse(localStorage.getItem(STORE_KEY));
  if (saved) store = { solved: saved.solved || {}, drafts: saved.drafts || {} };
} catch (e) { /* storage blocked — progress just won't persist */ }

function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) {}
}

const isSolved = (n) => !!store.solved[n];

function streak() {
  let n = isSolved(today) ? today : today - 1;
  let count = 0;
  while (n >= 1 && isSolved(n)) { count++; n--; }
  return count;
}

function renderStats() {
  let points = 0, solved = 0;
  for (const n of Object.keys(store.solved)) {
    points += POINTS[dayInfo(Number(n)).level];
    solved++;
  }
  document.getElementById("stat-points").textContent = points;
  document.getElementById("stat-solved").textContent = solved;
  document.getElementById("stat-streak").textContent = streak();
}

/* ===================== Hero ===================== */

function renderHero() {
  document.getElementById("day-label").textContent = `Day ${today} · ${fmtShort(today)}`;
  renderCountdown();
}

function renderCountdown() {
  const el = document.getElementById("countdown");
  if (isPreview) { el.textContent = "Preview mode"; return; }
  const mins = Math.max(1, Math.ceil((dayStart(today + 1) - Date.now()) / 60000));
  const h = Math.floor(mins / 60), m = mins % 60;
  el.textContent = h > 0 ? `Next challenge in ${h}h ${m}m` : `Next challenge in ${m}m`;
}
setInterval(renderCountdown, 30000);

/* ===================== Text formatting ===================== */

function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function inline(s) {
  return esc(s).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function formatPrompt(text) {
  let html = "", list = [];
  const flush = () => {
    if (list.length) { html += "<ul>" + list.map((l) => `<li>${inline(l)}</li>`).join("") + "</ul>"; list = []; }
  };
  for (const line of text.split("\n")) {
    if (line.startsWith("- ")) { list.push(line.slice(2)); continue; }
    flush();
    html += `<p>${inline(line)}</p>`;
  }
  flush();
  return html;
}

// Show a JSON value the way Python would write it.
function py(v) {
  if (v === true) return "True";
  if (v === false) return "False";
  if (v === null) return "None";
  if (typeof v === "string") return JSON.stringify(v);
  if (Array.isArray(v)) return "[" + v.map(py).join(", ") + "]";
  if (typeof v === "object") return "{" + Object.entries(v).map(([k, x]) => `${JSON.stringify(k)}: ${py(x)}`).join(", ") + "}";
  return String(v);
}

/* ===================== Challenge view ===================== */

const editor = document.getElementById("editor");
const gutter = document.getElementById("gutter");
const output = document.getElementById("output");
const resultsEl = document.getElementById("results");
const hintList = document.getElementById("hint-list");
const hintBtn = document.getElementById("hint-btn");
const solution = document.getElementById("solution");
let hintsShown = 0;

const challenge = () => dayInfo(viewDay).ch;

function levelChip(level) {
  return `<span class="chip chip-${level}">${LEVEL_NAMES[level]} · ${POINTS[level]} pts</span>`;
}

function renderExamples(ch) {
  const tests = ch.check.tests.slice(0, 2);
  let html = "<h4>Examples</h4>";
  if (ch.check.type === "function") {
    html += tests.map((t) =>
      `<div class="example"><code>${esc(`${ch.check.name}(${t.args.map(py).join(", ")})`)}</code><span class="arrow">returns</span><code>${esc(py(t.expected))}</code></div>`
    ).join("");
  } else {
    html += tests.map((t) => {
      const when = t.inputs.length
        ? `If the user types <code>${t.inputs.map(esc).join("</code> then <code>")}</code>, print:`
        : "Your program should print:";
      return `<div class="example example-out"><span>${when}</span><pre>${esc(t.expected)}</pre></div>`;
    }).join("");
  }
  document.getElementById("ch-examples").innerHTML = html;
}

function renderSolution() {
  const unlocked = isSolved(viewDay) || viewDay < today;
  solution.classList.toggle("locked", !unlocked);
  solution.open = false;
  document.getElementById("solution-summary").textContent = unlocked
    ? "Show Byte's solution"
    : "Solution unlocks when you pass, or tomorrow";
  document.getElementById("solution-code").textContent = unlocked ? challenge().solution : "";
}

function renderSolvedBadge() {
  document.getElementById("solved-badge").classList.toggle("hidden", !isSolved(viewDay));
}

function renderChallenge() {
  const { level, ch } = dayInfo(viewDay);
  const isToday = viewDay === today;

  document.getElementById("day-kicker").textContent = isToday ? `Today · Day ${viewDay}` : `Day ${viewDay}`;
  document.getElementById("ch-title").textContent = ch.title;
  document.getElementById("ch-meta").innerHTML = `${levelChip(level)}<span class="ch-date">${fmtLong(viewDay)}</span>`;
  document.getElementById("back-link").classList.toggle("hidden", isToday);
  renderSolvedBadge();

  document.getElementById("ch-prompt").innerHTML = formatPrompt(ch.prompt);
  renderExamples(ch);

  hintsShown = 0;
  hintList.innerHTML = "";
  hintBtn.classList.remove("hidden");
  hintBtn.textContent = "Show a hint";

  editor.value = store.drafts[viewDay] ?? ch.starter;
  updateGutter();
  output.innerHTML = '<span class="muted">Press Run to try your code, or Check my code to test it.</span>';
  resultsEl.classList.add("hidden");
  resultsEl.innerHTML = "";

  renderSolution();
}

hintBtn.addEventListener("click", () => {
  const hints = challenge().hints;
  if (hintsShown >= hints.length) return;
  const p = document.createElement("p");
  p.className = "hint";
  p.innerHTML = `<span class="hint-num">Hint ${hintsShown + 1}</span> ${inline(hints[hintsShown])}`;
  hintList.appendChild(p);
  hintsShown++;
  if (hintsShown >= hints.length) hintBtn.classList.add("hidden");
  else hintBtn.textContent = "Show another hint";
});

solution.addEventListener("click", (e) => {
  if (solution.classList.contains("locked")) e.preventDefault();
});

document.getElementById("back-link").addEventListener("click", () => {
  viewDay = today;
  renderChallenge();
});

/* ===================== Archive ===================== */

const ARCHIVE_PAGE = 12;
let archiveShown = ARCHIVE_PAGE;

function renderArchive() {
  const grid = document.getElementById("archive-grid");
  const more = document.getElementById("archive-more");
  if (today <= 1) {
    grid.innerHTML = '<p class="empty">Today is Day 1, so there\'s nothing here yet. Come back tomorrow and today\'s challenge will move here with its solution.</p>';
    more.classList.add("hidden");
    return;
  }
  let html = "";
  const oldest = Math.max(1, today - archiveShown);
  for (let n = today - 1; n >= oldest; n--) {
    const { level, ch } = dayInfo(n);
    html += `<button class="day-card${isSolved(n) ? " solved" : ""}" data-day="${n}">
      <span class="dc-top"><span class="dc-num">Day ${n}</span>${isSolved(n) ? CHECK_BADGE : ""}</span>
      <span class="dc-title">${esc(ch.title)}</span>
      <span class="dc-foot"><span class="chip chip-${level}">${LEVEL_NAMES[level]}</span><span class="dc-date">${fmtShort(n)}</span></span>
    </button>`;
  }
  grid.innerHTML = html;
  more.classList.toggle("hidden", oldest <= 1);
  grid.querySelectorAll(".day-card").forEach((card) => {
    card.addEventListener("click", () => {
      viewDay = Number(card.dataset.day);
      renderChallenge();
      document.getElementById("challenge").scrollIntoView({ behavior: "smooth" });
    });
  });
}

document.getElementById("archive-more").addEventListener("click", () => {
  archiveShown += ARCHIVE_PAGE;
  renderArchive();
});

/* ===================== Editor ===================== */

function updateGutter() {
  const lines = editor.value.split("\n").length;
  let s = "";
  for (let i = 1; i <= lines; i++) s += i + "\n";
  gutter.textContent = s;
  gutter.scrollTop = editor.scrollTop;
}

let draftTimer = null;
editor.addEventListener("input", () => {
  updateGutter();
  clearTimeout(draftTimer);
  const day = viewDay;
  draftTimer = setTimeout(() => {
    store.drafts[day] = editor.value;
    save();
  }, 300);
});
editor.addEventListener("scroll", () => { gutter.scrollTop = editor.scrollTop; });

editor.addEventListener("keydown", (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
    e.preventDefault();
    runCode();
    return;
  }
  const { selectionStart: s, selectionEnd: end, value } = editor;
  if (e.key === "Tab") {
    e.preventDefault();
    document.execCommand("insertText", false, "    ");
  } else if (e.key === "Enter") {
    const lineStart = value.lastIndexOf("\n", s - 1) + 1;
    const line = value.slice(lineStart, s);
    let indent = line.match(/^ */)[0];
    if (line.trimEnd().endsWith(":")) indent += "    ";
    if (indent) {
      e.preventDefault();
      document.execCommand("insertText", false, "\n" + indent);
    }
  } else if (e.key === "Backspace" && s === end && s > 0) {
    const lineStart = value.lastIndexOf("\n", s - 1) + 1;
    const before = value.slice(lineStart, s);
    if (before.length >= 4 && /^ +$/.test(before)) {
      e.preventDefault();
      editor.setSelectionRange(s - (before.length % 4 || 4), s);
      document.execCommand("delete");
    }
  }
});

document.getElementById("reset-btn").addEventListener("click", () => {
  editor.value = challenge().starter;
  delete store.drafts[viewDay];
  save();
  updateGutter();
  editor.focus();
});

/* ===================== Python worker ===================== */

const runBtn = document.getElementById("run-btn");
const checkBtn = document.getElementById("check-btn");
const statusEl = document.getElementById("status");
const TIME_LIMIT_MS = 5000;

let worker = null;
let ready = false;
let pending = null;

function setStatus(text, kind) {
  statusEl.textContent = text;
  statusEl.className = "status" + (kind ? " " + kind : "");
}

function setBusy(busy) {
  runBtn.disabled = busy || !ready;
  checkBtn.disabled = busy || !ready;
}

function startWorker() {
  ready = false;
  setBusy(true);
  worker = new Worker("worker.js");
  worker.onmessage = (e) => {
    const msg = e.data;
    if (msg.type === "ready") {
      ready = true;
      setStatus("Ready", "ok");
      setBusy(false);
    } else if (msg.type === "failed") {
      setStatus("Couldn't load Python", "err");
      output.innerHTML = '<span class="err-line">Python didn\'t load. Check your internet connection and refresh the page.</span>';
    } else if (msg.type === "result" && pending && pending.id === msg.id) {
      clearTimeout(pending.timer);
      const done = pending.resolve;
      pending = null;
      done(msg.result);
    }
  };
}

let nextId = 1;
function send(action, code, payload) {
  return new Promise((resolve) => {
    const id = nextId++;
    const timer = setTimeout(() => {
      pending = null;
      worker.terminate();
      resolve({ timeout: true });
      setStatus("Restarting Python…");
      startWorker();
    }, TIME_LIMIT_MS);
    pending = { id, resolve, timer };
    worker.postMessage({ id, action, code, payload });
  });
}

const TIMEOUT_MSG = "Your code ran for more than 5 seconds, so it was stopped. Is there a loop that never ends?";

async function runCode() {
  if (!ready) return;
  const ch = challenge();
  const sample = ch.check.type === "output" && ch.check.tests[0].inputs.length ? ch.check.tests[0].inputs : [];
  setBusy(true);
  setStatus("Running…");
  resultsEl.classList.add("hidden");
  const res = await send("run", editor.value, sample);
  if (res.timeout) {
    output.innerHTML = `<span class="err-line">${esc(TIMEOUT_MSG)}</span>`;
    return;
  }
  let html = "";
  if (sample.length) html += `<span class="muted">Using sample input: ${esc(sample.join(", "))}</span>\n`;
  html += esc(res.output || "");
  if (res.error) html += `<span class="err-line">${esc(res.error)}</span>`;
  if (!res.output && !res.error) html += '<span class="muted">(Your code ran but didn\'t print anything.)</span>';
  output.innerHTML = html;
  setStatus(res.error ? "Error" : "Ready", res.error ? "err" : "ok");
  setBusy(false);
}

const CHECK_SVG = '<svg viewBox="0 0 20 20"><path d="M5 10.5l3.2 3.2L15 7"/></svg>';
const X_SVG = '<svg viewBox="0 0 20 20"><path d="M6 6l8 8M14 6l-8 8"/></svg>';
const CHECK_BADGE = `<span class="dc-check" aria-label="solved">${CHECK_SVG}</span>`;

async function checkCode() {
  if (!ready) return;
  const ch = challenge();
  const day = viewDay;
  setBusy(true);
  setStatus("Checking…");
  const res = await send("check", editor.value, ch.check);
  resultsEl.classList.remove("hidden");

  if (res.timeout) {
    resultsEl.innerHTML = `<div class="result-summary fail">${esc(TIMEOUT_MSG)}</div>`;
    return;
  }
  if (res.error) {
    resultsEl.innerHTML = `<div class="result-summary fail">Your code has an error before any tests could run:<pre>${esc(res.error)}</pre></div>`;
    setStatus("Error", "err");
    setBusy(false);
    return;
  }

  const passed = res.results.filter((r) => r.ok).length;
  const total = res.results.length;
  const allOk = passed === total;
  let html = `<div class="result-summary ${allOk ? "pass" : "fail"}">${allOk ? `All ${total} tests passed!` : `${passed} of ${total} tests passed. Keep going!`}</div><ul class="result-list">`;
  for (const r of res.results) {
    html += `<li class="${r.ok ? "ok" : "bad"}">
      <span class="r-icon" aria-label="${r.ok ? "passed" : "failed"}">${r.ok ? CHECK_SVG : X_SVG}</span>
      <div><code>${esc(r.label)}</code>${r.ok ? "" : `
        <div class="r-detail"><span>Expected</span><pre>${esc(r.expected)}</pre></div>
        <div class="r-detail"><span>${r.error ? "Error" : "Got"}</span><pre>${esc(r.got === "" ? "(nothing)" : r.got)}</pre></div>`}
      </div></li>`;
  }
  resultsEl.innerHTML = html + "</ul>";
  setStatus(allOk ? "Passed" : "Not yet", allOk ? "ok" : "err");
  setBusy(false);

  if (allOk) {
    const first = !isSolved(day);
    store.solved[day] = true;
    save();
    renderSolution();
    renderSolvedBadge();
    renderStats();
    renderArchive();
    if (first) {
      const level = dayInfo(day).level;
      showToast(`+${POINTS[level]} points`, day === today ? "See you tomorrow for the next one." : "Nice catch-up work.");
    }
  }
}

runBtn.addEventListener("click", runCode);
checkBtn.addEventListener("click", checkCode);

/* ===================== Toast ===================== */

let toastTimer = null;
function showToast(title, text) {
  const toast = document.getElementById("toast");
  document.getElementById("toast-title").textContent = title;
  document.getElementById("toast-text").textContent = text;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 4500);
}

/* ===================== Scroll reveal ===================== */

if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => {
    for (const en of entries) if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
}

/* ===================== Start ===================== */

renderHero();
renderStats();
renderChallenge();
renderArchive();
startWorker();
