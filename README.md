# Markdown.js

Markdown.js is an ES module forked [Marked](https://marked.js.org/)  

## Usage

MarkdownのURLを指定して表示できます（CSSも指定可能）
![image](https://user-images.githubusercontent.com/1715217/120247226-b82cb300-c2ad-11eb-8f32-c0223118df53.png)
https://code4fukui.github.io/Markdown/

URLパラメーターで外部ファイルを読み込めます（runs as link)
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md
```

URLパラメーターで外部ファイルをCSSと共に読み込めます（runs as link with css)
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md&css=https://code4fukui.github.io/Markdown/test/style.css
```

HTML拡張タグで外部ファイルを読み込めます（extended HTML tag supports the outer file)
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down src="test.md"></mark-down>
```

HTML拡張タグ内にMarkdownが記述できます（extended HTML tag)
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down>
# title
</mark-down>
```

ブラウザやDenoで使えます (runs on browsers and Deno)
```js
import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";

const html = Markdown.toHTML("# title");
console.log(html); // <h1 id="title">title</h1>
```

## What is Markdown

Daring Fireball: Markdown  
https://daringfireball.net/projects/markdown/  
