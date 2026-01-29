// plugins/typst_eq.mjs
import fs from 'node:fs';
import path from 'node:path';

const DEFAULTS = {
  "\\\\oiiint": "∰",
  "\\\\oiint": "∯",
  "\\\\iiint": "∭",
  "\\\\iint": "∬",
  "\\\\oint": "∮",
  "\\\\int": "∫",
  "\\\\sum": "∑",
  "\\\\prod": "∏",
  "\\\\rightarrow": "→",
  "\\\\leftarrow": "←",
  "\\\\leftrightarrow": "↔",
  "\\\\Rightarrow": "⇒",
  "\\\\Leftarrow": "⇐",
  "\\\\Leftrightarrow": "⇔",
  "\\\\mapsto": "↦",
  "\\\\leqslant": "≤",
  "\\\\leq": "≤",
  "\\\\geqslant": "≥",
  "\\\\geq": "≥",
  "\\\\neq": "≠",
  "\\\\approx": "≈",
  "\\\\sim": "∼",
  "\\\\propto": "∝",
  "\\\\equiv": "≡",
  "\\\\infty": "∞",
  "\\\\partial": "∂",
  "\\\\nabla": "∇",
  "\\\\emptyset": "∅",
  "\\\\varnothing": "∅",
  "\\\\cup": "∪",
  "\\\\cap": "∩",
  "\\\\setminus": "∖",
  "\\\\mathbb\\{R\\}": "ℝ",
  "\\\\mathbb\\{N\\}": "ℕ",
  "\\\\mathbb\\{Z\\}": "ℤ",
  "\\\\mathbb\\{Q\\}": "ℚ",
  "\\\\mathbb\\{C\\}": "ℂ",
  "\\\\hbar": "ħ" //added 21 jan 2026
};

// replacing \hspace
function replaceAllHspace(src) {
  return src.replace(/\\hspace\s*\{([^{}]+)\}/g, (_m, inner) => {
    return `h(${inner.trim()})`;
  });
}

function loadMapping(mappingPath, inlineMap) {
  if (mappingPath) {
    const abs = path.isAbsolute(mappingPath)
      ? mappingPath
      : path.resolve(process.cwd(), mappingPath);
    return JSON.parse(fs.readFileSync(abs, 'utf8'));
  }
  return inlineMap ?? DEFAULTS;
}

// generieke helper voor gebalanceerde LaTeX-commando's
function replaceBalancedCommand(src, cmd, mapper) {
  const needle = `\\${cmd}`;
  let i = 0;
  while (true) {
    const start = src.indexOf(needle, i);
    if (start === -1) break;
    const open = src.indexOf('{', start + needle.length);
    if (open === -1) break;

    let depth = 1, j = open + 1;
    while (j < src.length && depth > 0) {
      const ch = src[j];
      if (ch === '{') depth += 1;
      else if (ch === '}') depth -= 1;
      j += 1;
    }
    if (depth !== 0) break;

    const inner = src.slice(open + 1, j - 1);
    const repl = mapper(inner);
    src = src.slice(0, start) + repl + src.slice(j);
    i = start + repl.length;
  }
  return src;
}

// \text{...}  →  upright("...")
function replaceAllTextBalanced(src) {
  return replaceBalancedCommand(src, 'text', (inner) => {
    // behoud spaties en escape dubbele quotes
    const escaped = inner.replace(/"/g, '\\"');
    return `${escaped}`;
  });
}

// \hline → horizontale regel (in Typst kun je dit vervangen door "---" of iets soortgelijks)
function replaceAllHline(src) {
  // Alleen vervangen als het op zichzelf staat, niet binnen woorden
  return src.replace(/\\hline\b/g, "---");
}

// \mathsf{...} → math.sf(...)
function replaceAllMathsfBalanced(src) {
  return replaceBalancedCommand(src, 'mathsf', (inner) => {
    return `math.sf(${inner})`;
  });
}

// \substack{a \\ b \\ c}  →  line(a, b, c)
function replaceAllSubstackBalanced(src) {
  return replaceBalancedCommand(src, 'substack', (inner) => {
    // Splits op dubbele backslash \\ (LaTeX newline)
    const parts = inner.split(/\\\\\\\\\s*/).map(s => s.trim()).filter(Boolean);
    return `${parts.join(', ')}`;
  });
}

function replaceAllTfracBalanced(src) {
  const cmd = 'tfrac';
  const needle = `\\${cmd}`;
  let i = 0;

  while (true) {
    const start = src.indexOf(needle, i);
    if (start === -1) break;

    // eerste {
    const open1 = src.indexOf('{', start + needle.length);
    if (open1 === -1) break;
    let depth = 1, j = open1 + 1;
    while (j < src.length && depth > 0) {
      if (src[j] === '{') depth++;
      else if (src[j] === '}') depth--;
      j++;
    }
    if (depth !== 0) break;
    const inner1 = src.slice(open1 + 1, j - 1);

    // tweede {
    const open2 = src.indexOf('{', j);
    if (open2 === -1) break;
    depth = 1;
    let k = open2 + 1;
    while (k < src.length && depth > 0) {
      if (src[k] === '{') depth++;
      else if (src[k] === '}') depth--;
      k++;
    }
    if (depth !== 0) break;
    const inner2 = src.slice(open2 + 1, k - 1);

    const repl = `frac(${inner1}, ${inner2})`;
    src = src.slice(0, start) + repl + src.slice(k);
    i = start + repl.length;
  }
  return src;
}


function makeRewriter({ mappingPath, mapping } = {}) {
  const mapObj = loadMapping(mappingPath, mapping);

  // 1) letterlijke mapping (\oint → ∮, …) – geen partial matches
  const entries = Object.entries(mapObj).sort((a, b) => b[0].length - a[0].length);
  const literalRewrite = (src) => {
    let out = src;
    for (const [pat, repl] of entries) {
      out = out.replace(new RegExp(`${pat}(?![A-Za-z])`, 'g'), repl);
    }
    return out;
  };

  // 2) structurele vervangingen
  const structuralRewrite = (src) => {
    let s = src;
    s = replaceAllTextBalanced(s);
    s = replaceAllSubstackBalanced(s);
    s = replaceAllHspace(s);
    s = replaceAllMathsfBalanced(s);
    s = replaceAllHline(s);
    s = replaceAllTfracBalanced(s);
    return s;
  };

  return (math) => structuralRewrite(literalRewrite(math));
}

/** @type {import('myst-common').MystPlugin} */
const plugin = {
  name: 'latex-typst-fallback',
  transforms: [
    {
      name: 'latex-typst-fallback',
      stage: 'document',
      plugin: (opts = {}, utils) => {
        const rewrite = makeRewriter(opts);
        return (tree) => {
          utils.selectAll('inlineMath, math', tree).forEach((node) => {
            node.value = rewrite(node.value ?? '');
          });
        };
      },
    },
  ],
};

export default plugin;
