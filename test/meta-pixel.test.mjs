import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("loads Meta Pixel and tracks lead form submissions", () => {
  const layout = fs.readFileSync("src/app/layout.tsx", "utf8");
  const applicationForm = fs.readFileSync("src/components/ApplicationForm.tsx", "utf8");

  assert.match(layout, /connect\.facebook\.net\/en_US\/fbevents\.js/);
  assert.match(layout, /fbq\("init", "1179784960962795"\)/);
  assert.match(layout, /fbq\("track", "PageView"\)/);
  assert.match(layout, /facebook\.com\/tr\?id=1179784960962795&ev=PageView&noscript=1/);
  assert.match(applicationForm, /fbq\??\.\("track", "Lead"\)/);
});
