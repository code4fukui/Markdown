import * as t from "https://deno.land/std/testing/asserts.ts";
import { Markdown } from "../Markdown.js";

Deno.test("simple1", () => {
  t.assertEquals(Markdown.toHTML("# title"), '<section>\n<h1 id="title">title</h1>\n</section>\n');
});

Deno.test("id cheek", () => {
  t.assertEquals(Markdown.toHTML("# （タイトル）"), '<section>\n<h1 id="タイトル">（タイトル）</h1>\n</section>\n');
});

Deno.test("section1", () => {
  t.assertEquals(Markdown.toHTML("# title\ntest"), '<section>\n<h1 id="title">title</h1>\n<p>test</p>\n</section>\n');
});

Deno.test("section2", () => {
  t.assertEquals(Markdown.toHTML("# title\ntest\n## a\na"), '<section>\n<h1 id="title">title</h1>\n<p>test</p>\n<section>\n<h2 id="a">a</h2>\n<p>a</p>\n</section>\n</section>\n');
});

Deno.test("section3", () => {
  t.assertEquals(Markdown.toHTML("# title\ntest\n## a\na\n## b\nb"), '<section>\n<h1 id="title">title</h1>\n<p>test</p>\n<section>\n<h2 id="a">a</h2>\n<p>a</p>\n</section>\n<section>\n<h2 id="b">b</h2>\n<p>b</p>\n</section>\n</section>\n');
});

Deno.test("section4", () => {
  t.assertEquals(Markdown.toHTML("# title\ntest\n## a\na\n## b\nb\n# title2"), '<section>\n<h1 id="title">title</h1>\n<p>test</p>\n<section>\n<h2 id="a">a</h2>\n<p>a</p>\n</section>\n<section>\n<h2 id="b">b</h2>\n<p>b</p>\n</section>\n</section>\n<section>\n<h1 id="title2">title2</h1>\n</section>\n');
});
