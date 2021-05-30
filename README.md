# Markdown

Markdown.js is an ES module forked [Marked](https://marked.js.org/)  

## Usage

ブラウザやDenoで使えます (runs on browsers and Deno)
```js
import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";

const html = Markdown.toHTML("# title");
console.log(html); // <h1 id="title">title</h1>
```

HTML拡張タグとして使えます（extended HTML tag)
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down>
# title
</mark-down>
```

HTML拡張タグで外部ファイルを読み込めます（extended HTML tag supports the outer file)
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down src="test.md"></mark-down>
```

URLパラメーターで外部ファイルを読み込めます（runs as link)
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md
```

URLパラメーターで外部ファイルをCSSと共に読み込めます（runs as link with css)
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md&css=https://code4fukui.github.io/Markdown/test/style.css
```

## What is Markdown

Daring Fireball: Markdown  
https://daringfireball.net/projects/markdown/  
