// plugins/grasple.mjs
// ::{grasple} URL -> embeds an iframe and numbers as "Grasple 1, 2, 3..." independently of exercises.

const grasple = {
  name: "grasple",
  doc: "Embed a Grasple exercise using an iframe, with an independent Grasple counter.",
  arg: { type: String, required: true, doc: "The URL to embed in an iframe." },
  options: {
    width: { type: String, doc: "Iframe width, e.g. `50%` or `300px`." },
    align: { type: String, doc: "Iframe alignment: `left`, `center`, or `right`." },
    title: { type: String, doc: "Iframe title attribute (accessibility)." },
    placeholder: { type: String, doc: "Placeholder image for static exports." },

    // manual override for displayed number (optional)
    number: { type: Number, doc: "Manually set the displayed Grasple number (overrides auto counter)." },

    // optional styling / future cross-ref
    label: { type: String, doc: "Optional label." },

    hidden: { type: Boolean, doc: "Hide the grasple block (renderer dependent)." },
  },
  // Let captions be real MyST so users can write markdown
  body: { type: "myst", doc: "Optional caption (markdown)." },

  run(data, vfile, ctx) {
    const url = (data.arg || "").trim();

    const iframe = {
      type: "iframe",
      src: url,
      width: data.options?.width,
      align: data.options?.align,
      title: data.options?.title,
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

    // Custom node: transform will turn this into admonition for guaranteed rendering
    return [
      {
        type: "grasple",
        url,
        iframe,
        caption: data.body || null, // already parsed myst children
        options: data.options || {},
        hidden: !!data.options?.hidden,
      },
    ];
  },
};

const graspleTransform = {
  name: "render-grasple",
  doc: "Replace custom grasple nodes with renderable nodes and apply independent numbering.",
  stage: "document",
  plugin: (opts, utils) => (tree) => {
    let counter = 0;

    // Walk the tree recursively and replace grasple nodes in-place
    const visit = (parent) => {
      if (!parent || !Array.isArray(parent.children)) return;

      parent.children = parent.children.map((node) => {
        if (!node || node.type !== "grasple") {
          visit(node);
          return node;
        }

        counter += 1;
        const opts = node.options || {};
        const n =
          typeof opts.number === "number" && Number.isFinite(opts.number) ? opts.number : counter;

        // include title
        const titleText = opts.title
          ? `Grasple ${n}: ${opts.title}`
          : `Grasple ${n}`;
 
          
        // Build a standard admonition that all renderers understand
        const admonition = {
          type: "admonition",
          kind: "note",
          class: "admonition-grasple",
          icon: false,
          children: [
            {
              type: "admonitionTitle",
              children: [{ type: "text", value: titleText }], 
            },

            // Wrap iframe so CSS selectors like div:has(> iframe...) are reliable
            {
              type: "container",
              kind: "div",
              class: "grasple-embed",
              children: [node.iframe],
            },
          ],
        };

        // Optional caption (already myst-parsed nodes)
        if (node.caption && Array.isArray(node.caption)) {
          admonition.children.push({
            type: "paragraph",
            children: node.caption,
          });
        }

        return admonition;
      });
    };

    // In MyST, the main doc is usually tree.children[0], but recursion handles either way
    visit(tree);
  },
};

const plugin = {
  name: "grasple",
  directives: [grasple],
  transforms: [graspleTransform],
};

export default plugin;
