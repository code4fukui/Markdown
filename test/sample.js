import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";

const html = Markdown.toHTML("# title");
console.log(html); // <h1 id="title">title</h1>
