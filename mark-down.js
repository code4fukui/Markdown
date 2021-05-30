import { Markdown } from "./Markdown.js";

const markdown = (html, comp, baseUrl) => {
  comp = comp || document.body;
  comp.innerHTML = Markdown.toHTML(html, baseUrl);
};

class MarkDown extends HTMLElement {
  constructor() {
    super();
    const src = this.getAttribute("src");
    if (src) {
      (async () => {
        const text = await (await fetch(src)).text();
        markdown(text, this, src);
      })();
    } else {
      markdown(this.textContent, this);
    }
  }
}

customElements.define("mark-down", MarkDown);
