// plugins/h5p.mjs

const h5p = {
  name: "h5p",
  doc: "Embed a h5p exercise using an iframe, with an independent h5p counter.",
  arg: { type: String, required: true, doc: "The URL to embed in an iframe." },
  options: {
    width: { type: String, doc: "Iframe width, e.g. `50%` or `300px`." },
    height: { type: String, doc: "Iframe height, e.g. `325` or `500px`." },
    align: { type: String, doc: "Iframe alignment: `left`, `center`, or `right`." },

    // If provided, this becomes the displayed title (header). If omitted, we infer from H5P metadata.
    title: { type: String, doc: "Optional displayed title (defaults to H5P aria-label/og:title/title)." },

    // If you ever want to override ONLY the iframe title attribute separately:
    iframeTitle: { type: String, doc: "Optional iframe title attribute override (accessibility)." },

    placeholder: { type: String, doc: "Placeholder image for static exports." },
    number: { type: Number, doc: "Manually set the displayed h5p number (overrides auto counter)." },
    label: { type: String, doc: "Optional label." },
    hidden: { type: Boolean, doc: "Hide the h5p block (renderer dependent)." },
  },
  body: { type: "myst", doc: "Optional caption (markdown)." },

  run(data) {
    const url = (data.arg || "").trim();

    const iframe = {
      type: "iframe",
      src: url,
      width: data.options?.width,
      height: data.options?.height,
      align: data.options?.align,
      // prefer iframeTitle override if provided
      title: data.options?.iframeTitle,
    };

    if (data.options?.placeholder) {
      iframe.children = [
        {
          type: "image",
          placeholder: true,
          url: data.options.placeholder,
          alt: data.options?.alt,
          width: data.options?.width,
          height: data.options?.height,
          align: data.options?.align,
        },
      ];
    }

    return [
      {
        type: "h5p",
        url,
        iframe,
        caption: data.body || null,
        options: data.options || {},
        hidden: !!data.options?.hidden,
      },
    ];
  },
};

// ---------- helpers for metadata scraping ----------

function isPdfOrTypstBuild() {
  return process.argv.some((arg) => arg.includes("pdf") || arg.includes("typst"));
}

function getOriginFromUrl(u) {
  try {
    return new URL(u).origin;
  } catch {
    return null;
  }
}

function contentUrlFromEmbed(embedUrl) {
  return embedUrl.replace(/\/embed\/?$/, "");
}

function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function extractAttr(tag, attr) {
  const m = tag.match(new RegExp(`${attr}\\s*=\\s*"([^"]*)"`, "i"));
  return m ? m[1] : undefined;
}

async function getFetch() {
  if (typeof globalThis.fetch === "function") return globalThis.fetch.bind(globalThis);
  const mod = await import("node-fetch");
  return mod.default;
}

async function fetchH5pEmbedMeta(embedSrc) {
  const pageUrl = contentUrlFromEmbed(embedSrc);
  const fetchFn = await getFetch();
  const res = await fetchFn(pageUrl, {
    headers: { "User-Agent": "mystmd-h5p-plugin" },
  });
  if (!res.ok) return null;

  const html = await res.text();

  // 1) Try finding an iframe snippet (may not exist server-side on all hosts)
  const srcRe = escapeRegExp(embedSrc.replace(/\/?$/, ""));
  const iframeRe = new RegExp(`<iframe[^>]+src="(${srcRe}[^"]*)"[^>]*>`, "i");
  let match = html.match(iframeRe);

  if (!match) {
    const origin = getOriginFromUrl(embedSrc);
    if (origin) {
      const anyEmbedRe = new RegExp(
        `<iframe[^>]+src="(${escapeRegExp(origin)}/[^"]*/embed[^"]*)"[^>]*>`,
        "i"
      );
      match = html.match(anyEmbedRe);
    }
  }

  if (match) {
    const iframeTag = match[0];
    return {
      ariaLabel: extractAttr(iframeTag, "aria-label"),
      width: extractAttr(iframeTag, "width"),
      height: extractAttr(iframeTag, "height"),
    };
  }

  // 2) Fallback to og:title (usually present)
  const og = html.match(
    /<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["'][^>]*>/i
  );
  if (og?.[1]) {
    const title = og[1].trim();
    return { ariaLabel: title, width: undefined, height: undefined };
  }

  // 3) Fallback to <title>
  const t = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (t?.[1]) {
    const title = t[1].trim();
    return { ariaLabel: title, width: undefined, height: undefined };
  }

  return null;
}

function cleanH5pTitle(t) {
  if (!t) return "";
  return t
    .replace(/\s*[-–—]\s*H5P\.com\s*$/i, "")   // " - H5P.com"
    .replace(/\s*[-–—]\s*H5P\s*$/i, "")       // " - H5P"
    .trim();
}

// ---------- transform ----------

const h5pTransform = {
  name: "render-h5p",
  doc: "Replace custom h5p nodes with renderable nodes, apply independent numbering, and enrich iframe metadata.",
  stage: "document",
  plugin: () => async (tree) => {
    let counter = 0;
    const metaCache = new Map();
    let sawH5p = false;

    const visit = async (parent) => {
      if (!parent || !Array.isArray(parent.children)) return;

      const out = [];
      for (const node of parent.children) {
        if (!node || node.type !== "h5p") {
          await visit(node);
          out.push(node);
          continue;
        }

        sawH5p = true;
        counter += 1;

        const opts = node.options || {};
        const n =
          typeof opts.number === "number" && Number.isFinite(opts.number) ? opts.number : counter;

        // ---- fetch meta once ----
        let meta = metaCache.get(node.url);
        if (!metaCache.has(node.url)) {
          try {
            meta = await fetchH5pEmbedMeta(node.url);
          } catch {
            meta = null;
          }
          metaCache.set(node.url, meta);
        }

        // Fill iframe attrs if missing
        if (meta) {
          if (!node.iframe.title && meta.ariaLabel) node.iframe.title = meta.ariaLabel;
          if (!node.iframe.width && meta.width) node.iframe.width = meta.width;
          if (!node.iframe.height && meta.height) node.iframe.height = meta.height;
        }

        // Display title: prefer :title: option, else inferred from aria-label/og:title/title
        const inferredTitle = cleanH5pTitle((opts.title || meta?.ariaLabel || "").trim());
        const titleText = inferredTitle ? `H5P exercise ${n}: ${inferredTitle}` : `H5P exercise ${n}`;

        const admonition = {
          type: "admonition",
          kind: "note",
          class: "admonition-h5p",
          icon: false,
          children: [
            {
              type: "admonitionTitle",
              children: [{ type: "text", value: titleText }],
            },
            {
              type: "container",
              kind: "div",
              class: "h5p-embed",
              children: [node.iframe],
            },
          ],
        };

        if (node.caption && Array.isArray(node.caption)) {
          admonition.children.push({ type: "paragraph", children: node.caption });
        }

        out.push(admonition);
      }

      parent.children = out;
    };

    await visit(tree);

    // Inject resizer script once (HTML builds only)
    if (sawH5p && !isPdfOrTypstBuild()) {
      const findFirstIframeSrc = (node) => {
        if (!node) return null;
        if (node.type === "iframe" && typeof node.src === "string" && node.src.includes("h5p.com")) return node.src;
        if (Array.isArray(node.children)) {
          for (const c of node.children) {
            const r = findFirstIframeSrc(c);
            if (r) return r;
          }
        }
        return null;
      };

      let origin = null;
      const first = findFirstIframeSrc(tree);
      try {
        origin = first ? new URL(first).origin : null;
      } catch {
        origin = null;
      }

      // const resizerSrc = origin ? `${origin}/js/h5p-resizer.js` : "https://tudelft.h5p.com/js/h5p-resizer.js";

      // const scriptNode = { type: "html", value: `<script src="${resizerSrc}" charset="UTF-8"></script>` };

      // const doc = tree.children?.[0];
      // if (doc?.children && Array.isArray(doc.children)) doc.children.push(scriptNode);
      // else if (Array.isArray(tree.children)) tree.children.push(scriptNode);
    }
  },
};

const plugin = {
  name: "h5p",
  directives: [h5p],
  transforms: [h5pTransform],
};

export default plugin;
