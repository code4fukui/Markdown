import { marked } from "./marked.js";

const Markdown = {
  toHTML: (md, baseUrl) => marked(md, { baseUrl })
};

export { Markdown };
