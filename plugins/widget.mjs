const PYODIDE_CDN = "https://cdn.jsdelivr.net/pyodide/v0.29.3/full/";
const DEFAULT_PACKAGES = ["numpy", "pandas", "matplotlib"];




let pyodideInstance = null;
let loadingPromise = null;
let loadState = "idle";
let loadError = null;
const runButtons = new Set();

function loadScript(src) {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener("load", resolve, { once: true });
      existing.addEventListener("error", reject, { once: true });
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Failed to load ${src}`));
    document.head.appendChild(script);
  });
}

async function loadPyodideRuntime(extraPackages = []) {
  if (pyodideInstance) {
    if (extraPackages.length) await pyodideInstance.loadPackage(extraPackages);
    return pyodideInstance;
  }
  if (!loadingPromise) {
    loadingPromise = (async () => {
      if (typeof globalThis.loadPyodide !== "function") {
        await loadScript(`${PYODIDE_CDN}pyodide.js`);
      }
      const pyodide = await globalThis.loadPyodide({ indexURL: PYODIDE_CDN });
      await pyodide.loadPackage(DEFAULT_PACKAGES);
      pyodide.runPython(`
import sys, io, js

class _JsBridge(io.TextIOBase):
    def __init__(self, tag):
        self._tag = tag
    def write(self, s):
        js.globalThis._pyodideStreamWrite(self._tag, s)
        return len(s)
    def flush(self):
        pass

sys.stdout = _JsBridge("stdout")
sys.stderr = _JsBridge("stderr")
      `);
      pyodide.runPython(`
import matplotlib
matplotlib.use("agg")
      `);
      pyodideInstance = pyodide;
      return pyodide;
    })();
  }
  const pyodide = await loadingPromise;
  if (extraPackages.length) await pyodide.loadPackage(extraPackages);
  return pyodide;
}

globalThis._pyodideStreamWrite = function pyodideStreamWrite(tag, text) {
  if (!globalThis._pyodideCurrentCell) return;
  const buffer = globalThis._pyodideCurrentCell;
  buffer[tag] += text;
};

async function restartKernel() {
  if (pyodideInstance) {
    try {
      pyodideInstance.runPython("import sys; sys.stdout = sys.__stdout__; sys.stderr = sys.__stderr__");
    } catch {
      // Ignore cleanup failures; the runtime is about to be replaced.
    }
  }
  pyodideInstance = null;
  loadingPromise = null;
  loadState = "idle";
  loadError = null;
}

async function executePython(code, packages) {
  const pyodide = await loadPyodideRuntime(packages);
  const capture = { stdout: "", stderr: "" };
  globalThis._pyodideCurrentCell = capture;

  pyodide.runPython(`
import matplotlib.pyplot as plt
plt.close('all')
  `);

  const started = performance.now();
  let error = null;
  let returnValue = null;

  try {
    const value = await pyodide.runPythonAsync(code);
    if (value !== undefined && value !== null) returnValue = String(value);
  } catch (err) {
    error = String(err);
  } finally {
    globalThis._pyodideCurrentCell = null;
  }

  let figures = [];
  try {
    const figureJson = pyodide.runPython(`
import matplotlib.pyplot as plt, io, base64, json
_figs = []
for _fig_num in plt.get_fignums():
    _fig = plt.figure(_fig_num)
    _buf = io.BytesIO()
    _fig.savefig(_buf, format='png', bbox_inches='tight', dpi=120)
    _buf.seek(0)
    _figs.append('data:image/png;base64,' + base64.b64encode(_buf.read()).decode())
    plt.close(_fig)
json.dumps(_figs)
    `);
    figures = JSON.parse(figureJson);
  } catch {
    figures = [];
  }

  return {
    stdout: capture.stdout,
    stderr: capture.stderr,
    error,
    returnValue,
    figures,
    durationMs: Math.round(performance.now() - started),
  };
}

function appendToWidgetRoot(el, node) {
  const root = el.getRootNode && el.getRootNode();
  if (root && root !== document && root.appendChild) {
    root.appendChild(node);
    return;
  }
  document.head.appendChild(node);
}

function rootHasElement(el, id) {
  const root = el.getRootNode && el.getRootNode();
  if (root && root !== document && root.getElementById) return root.getElementById(id);
  return document.getElementById(id);
}

function ensureStyles(el) {
  if (rootHasElement(el, "pyodide-editable-widget-styles")) return;
  const style = document.createElement("style");
  style.id = "pyodide-editable-widget-styles";
  style.textContent = `
.pyodide-wrapper{box-sizing:border-box;width:100%;border:1px solid var(--color-border,#d0d7de);border-radius:6px;overflow:hidden;margin:1.25rem 0;background:var(--color-background-primary,#fff);color:var(--color-foreground-primary,#1f2328);font:0.875rem ui-monospace,SFMono-Regular,Menlo,monospace}
.pyodide-header,.pyodide-status-bar{display:flex;align-items:center;justify-content:space-between;padding:.45rem .75rem;background:var(--color-background-secondary,#f6f8fa);border-bottom:1px solid var(--color-border,#d0d7de);gap:.5rem}
.pyodide-status-bar{border-top:1px solid var(--color-border,#d0d7de);border-bottom:0;min-height:1.6rem}
.pyodide-controls{display:flex;flex-wrap:wrap;gap:.4rem;justify-content:flex-end}
.pyodide-btn{display:inline-flex;align-items:center;gap:.3rem;padding:.35rem .65rem;border-radius:5px;border:1px solid var(--color-border,#d0d7de);font:inherit;font-size:.8rem;line-height:1;cursor:pointer;background:var(--color-background-primary,#fff);color:inherit}
.pyodide-btn:disabled{opacity:.5;cursor:not-allowed}
.pyodide-btn-run,.pyodide-btn-runall{background:#1a7f37;color:white;border-color:rgba(31,35,40,.15);font-weight:600}
.pyodide-btn-runall{background:#0969da}
.pyodide-btn-restart{color:#cf222e;font-weight:600}
.pyodide-lang-badge{font-size:.72rem;font-weight:700;text-transform:uppercase;color:var(--color-foreground-muted,#57606a);letter-spacing:.04em}
.pyodide-editor{  box-sizing:border-box;  display:block;  width:100%;  min-height:18rem;  max-height:40rem;  padding:.75rem;  border:0;  border-radius:0;  resize:vertical;  background:transparent;  color:inherit;  font:inherit;  line-height:1.55;  tab-size:4;  outline:none;  white-space:pre;  overflow:auto;}
.pyodide-editor-shell{display:flex; width:100%;background:var(--color-background-primary,#fafbfc);}
.pyodide-line-numbers{  margin:0!important;padding:.75rem .5rem!important;  min-width:3rem;  text-align:right;user-select:none;  overflow:hidden;  border-right:1px solid var(--color-border,#d0d7de);  color:var(--color-foreground-muted,#57606a); background:var(--color-background-secondary,#f6f8fa)!important;  line-height:1.55;  font:inherit;}
.pyodide-output{min-height:2.5rem;max-height:25rem;overflow:auto;padding:.7rem .75rem;border-top:1px solid var(--color-border,#d0d7de);background:var(--color-background-primary,#fff);resize:vertical}
.pyodide-output[hidden]{display:none}
.pyodide-output pre{margin:0 0 .4rem!important;padding:0!important;background:transparent!important;border:0!important;color:inherit!important;white-space:pre-wrap;word-break:break-word;font:inherit}
.pyodide-error,.pyodide-stderr{color:#cf222e}
.pyodide-figure{display:block;max-width:100%;height:auto;margin:.5rem 0}
.pyodide-status-text{font-size:.78rem;color:var(--color-foreground-muted,#57606a)}
.pyodide-status-info{color:#0550ae}.pyodide-status-success{color:#1a7f37}.pyodide-status-error{color:#cf222e}
.pyodide-timing{font-size:.75rem;color:var(--color-foreground-muted,#8c959f);font-variant-numeric:tabular-nums}
`;
  appendToWidgetRoot(el, style);
}

function setStatus(statusText, message, type = "info") {
  statusText.textContent = message;
  statusText.className = `pyodide-status-text pyodide-status-${type}`;
}

function renderOutput(outputArea, result) {
  outputArea.innerHTML = "";
  outputArea.hidden = false;
  let hasContent = false;

  for (const [key, className] of [
    ["stdout", "pyodide-stdout"],
    ["stderr", "pyodide-stderr"],
    ["error", "pyodide-error"],
    ["returnValue", "pyodide-return-value"],
  ]) {
    if (!result[key]) continue;
    hasContent = true;
    const pre = document.createElement("pre");
    pre.className = className;
    pre.textContent = result[key];
    outputArea.appendChild(pre);
  }

  for (const figure of result.figures || []) {
    hasContent = true;
    const img = document.createElement("img");
    img.src = figure;
    img.alt = "matplotlib figure";
    img.className = "pyodide-figure";
    outputArea.appendChild(img);
  }

  if (!hasContent) outputArea.hidden = true;
}

async function runAllCells() {
  for (const button of Array.from(runButtons)) {
    if (!button.isConnected) {
      runButtons.delete(button);
      continue;
    }
    button.click();
    while (button.disabled) {
      await new Promise((resolve) => setTimeout(resolve, 150));
    }
  }
}

function render({ model, el }) {
  const code = model.get("code") || "";
  const cellId = model.get("id") || "";
  const height = model.get("height") || "18rem";
  const linenos = Boolean(model.get("linenos"));
  const linenoStart = Number(model.get("linenoStart") || 1);

  const packages = (model.get("packages") || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

  ensureStyles(el);
  el.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "pyodide-wrapper";
  wrapper.setAttribute("role", "region");
  wrapper.setAttribute("aria-label", "Interactive Python cell");
  if (cellId) wrapper.id = `pycell-${cellId}`;

  const header = document.createElement("div");
  header.className = "pyodide-header";
  const badge = document.createElement("span");
  badge.className = "pyodide-lang-badge";
  badge.textContent = "Python";
  const controls = document.createElement("div");
  controls.className = "pyodide-controls";

  const runButton = document.createElement("button");
  runButton.type = "button";
  runButton.className = "pyodide-btn pyodide-btn-run";
  runButton.textContent = "Run";

  const clearButton = document.createElement("button");
  clearButton.type = "button";
  clearButton.className = "pyodide-btn pyodide-btn-clear";
  clearButton.textContent = "Clear";

  const runAllButton = document.createElement("button");
  runAllButton.type = "button";
  runAllButton.className = "pyodide-btn pyodide-btn-runall";
  runAllButton.textContent = "Run All";

  const restartButton = document.createElement("button");
  restartButton.type = "button";
  restartButton.className = "pyodide-btn pyodide-btn-restart";
  restartButton.textContent = "Restart";

  controls.append(runButton, clearButton, runAllButton, restartButton);
  header.append(badge, controls);

const editorShell = document.createElement("div");
editorShell.className = linenos
  ? "pyodide-editor-shell pyodide-editor-shell-linenos"
  : "pyodide-editor-shell";

const lineNumbers = document.createElement("pre");
lineNumbers.className = "pyodide-line-numbers";

const textarea = document.createElement("textarea");
textarea.className = "pyodide-editor";
textarea.value = code;
textarea.spellcheck = false;
textarea.style.minHeight = height;
textarea.setAttribute("aria-label", "Python code editor");

function updateLineNumbers() {
  const lines = textarea.value.split("\n").length;
  lineNumbers.textContent = Array.from(
    { length: lines },
    (_, i) => i + linenoStart
  ).join("\n");
}

textarea.addEventListener("input", updateLineNumbers);
textarea.addEventListener("scroll", () => {
  lineNumbers.scrollTop = textarea.scrollTop;
});

if (linenos) {
  updateLineNumbers();
  editorShell.append(lineNumbers, textarea);
} else {
  editorShell.append(textarea);
}

  const statusBar = document.createElement("div");
  statusBar.className = "pyodide-status-bar";
  const statusText = document.createElement("span");
  statusText.className = "pyodide-status-text";
  const timing = document.createElement("span");
  timing.className = "pyodide-timing";
  statusBar.append(statusText, timing);

  const outputArea = document.createElement("div");
  outputArea.className = "pyodide-output";
  outputArea.setAttribute("aria-live", "polite");
  outputArea.hidden = true;

  wrapper.append(header, editorShell, statusBar, outputArea);
  el.appendChild(wrapper);
  runButtons.add(runButton);

  clearButton.addEventListener("click", () => {
    outputArea.innerHTML = "";
    outputArea.hidden = true;
    timing.textContent = "";
    setStatus(statusText, "");
  });

  restartButton.addEventListener("click", async () => {
    restartButton.disabled = true;
    setStatus(statusText, "Restarting kernel...", "info");
    await restartKernel();
    setStatus(statusText, "Kernel restarted", "success");
    restartButton.disabled = false;
  });

  runAllButton.addEventListener("click", runAllCells);

  runButton.addEventListener("click", async () => {
    runButton.disabled = true;
    outputArea.hidden = true;
    outputArea.innerHTML = "";
    timing.textContent = "";

    try {
      if (loadState === "idle") {
        loadState = "loading";
        setStatus(statusText, "Loading Pyodide (first run, may take a few seconds)...", "info");
        try {
          await loadPyodideRuntime(packages);
          loadState = "ready";
        } catch (err) {
          loadState = "error";
          loadError = String(err);
        }
      }

      if (loadState === "loading") {
        setStatus(statusText, "Waiting for Pyodide...", "info");
        while (loadState === "loading") {
          await new Promise((resolve) => setTimeout(resolve, 150));
        }
      }

      if (loadState === "error") {
        setStatus(statusText, `Failed to load Pyodide: ${loadError}`, "error");
        return;
      }

      setStatus(statusText, "Running...", "info");
      const result = await executePython(textarea.value, packages);
      renderOutput(outputArea, result);
      timing.textContent = `${result.durationMs} ms`;
      setStatus(statusText, result.error ? "Error" : "Done", result.error ? "error" : "success");
    } catch (err) {
      setStatus(statusText, `Error: ${err}`, "error");
    } finally {
      runButton.disabled = false;
    }
  });
}

export default { render };
