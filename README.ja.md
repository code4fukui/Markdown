# Markdown.js

Markdown.js は[Marked](https://marked.js.org/)から派生したES moduleです。

## デモ

マークダウンのURLを指定して表示できます（CSSも指定可能）
![image](https://user-images.githubusercontent.com/1715217/120247226-b82cb300-c2ad-11eb-8f32-c0223118df53.png)
https://code4fukui.github.io/Markdown/

## 機能

- URLパラメーターで外部ファイルを読み込めます（runs as link)
- URLパラメーターで外部ファイルをCSSと共に読み込めます（runs as link with css)
- HTML拡張タグで外部ファイルを読み込めます（extended HTML tag supports the outer file）
- HTML拡張タグ内にMarkdownが記述できます（extended HTML tag）
- ブラウザやDenoで使えます (runs on browsers and Deno)

## 使い方

```html
<script type="module" src="https://code4fukui.github.io/Markdown/mark-down.js"></script>
<mark-down src="test.md"></mark-down>
```

## ライセンス

MIT