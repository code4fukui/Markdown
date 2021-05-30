import * as t from "https://deno.land/std/testing/asserts.ts";
import { Markdown } from "../Markdown.js";

Deno.test("simple1", () => {
  t.assertEquals(Markdown.toHTML("# title"), '<h1 id="title">title</h1>\n');
});

Deno.test("id cheek", () => {
  t.assertEquals(Markdown.toHTML("# （タイトル）"), '<h1 id="タイトル">（タイトル）</h1>\n');
});
