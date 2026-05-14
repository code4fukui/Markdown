# Markdown.js

Markdown.js は [Marked](https://marked.js.org/) からフォークされた ES モジュールです。

## 使い方

URLを指定してMarkdownを表示できます（CSSも指定可能です）:
![image](https://user-images.githubusercontent.com/1715217/120247226-b82cb300-c2ad-11eb-8f32-c0223118df53.png)
https://code4fukui.github.io/Markdown/

URLパラメータを使用して外部ファイルを読み込むことができます（リンクとして実行）:
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md
```

URLパラメータを使用してCSS付きで外部ファイルを読み込むことができます（CSS付きリンクとして実行）:
```html
https://code4fukui.github.io/Markdown/?url=https://code4fukui.github.io/Markdown/test/test.md&css=https://code4fukui.github.io/Markdown/test/style.css
```

拡張HTMLタグを使用して外部ファイルを読み込むことができます（拡張HTMLタグによる外部ファイルのサポート）:
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down src="test.md"></mark-down>
```

拡張HTMLタグ内にMarkdownを記述することができます（拡張HTMLタグ）:
```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down>
# title
</mark-down>
```

ブラウザおよびDenoで使用できます（ブラウザおよびDenoで実行可能）:
```js
import { Markdown } from "https://code4fukui.github.io/Markdown/Markdown.js";

const html = Markdown.toHTML("# title");
console.log(html); // <h1 id="title">title</h1>
```

## Markdown とは

Daring Fireball: Markdown  
https://daringfireball.net/projects/markdown/

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。
