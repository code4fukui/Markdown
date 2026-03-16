# Markdown.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

Markdown.js is an ES module forked from [Marked](https://marked.js.org/).

## Usage

You can display Markdown by specifying the URL (CSS can also be specified):
![image](https://user-images.githubusercontent.com/1715217/120247226-b82cb300-c2ad-11eb-8f32-c0223118df53.png)
https://code4fukui.github.io/Markdown/

You can load an external file using a URL parameter (runs as link):
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md
```

You can load an external file with CSS using a URL parameter (runs as link with css):
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md&css=https://code4fukui.github.io/Markdown/test/style.css
```

You can load an external file using an extended HTML tag (extended HTML tag supports the outer file):
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down src="test.md"></mark-down>
```

You can write Markdown in an extended HTML tag (extended HTML tag):
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down>
# title
</mark-down>
```

It can be used in browsers and Deno (runs on browsers and Deno):
```js
import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";

const html = Markdown.toHTML("# title");
console.log(html); // <h1 id="title">title</h1>
```

## What is Markdown

Daring Fireball: Markdown  
https://daringfireball.net/projects/markdown/

## License

MIT License — see [LICENSE](LICENSE).