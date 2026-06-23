import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

test("loads Meta Pixel and tracks lead form submissions", () => {
  const layout = fs.readFileSync("src/app/layout.tsx", "utf8");
  const applicationForm = fs.readFileSync("src/components/ApplicationForm.tsx", "utf8");
  const leadRoute = fs.readFileSync("src/app/api/leads/route.ts", "utf8");
  const thankYouPage = fs.readFileSync("src/app/obrigado/page.tsx", "utf8");
  const leadPixelTracker = fs.readFileSync("src/components/LeadPixelTracker.tsx", "utf8");

  assert.match(layout, /connect\.facebook\.net\/en_US\/fbevents\.js/);
  assert.match(layout, /fbq\("init", "1179784960962795"\)/);
  assert.match(layout, /fbq\("track", "PageView"\)/);
  assert.match(layout, /facebook\.com\/tr\?id=1179784960962795&ev=PageView&noscript=1/);
  assert.match(applicationForm, /fetch\("\/api\/leads"/);
  assert.doesNotMatch(applicationForm, /72\.61\.219\.156|3880b715-f259-4740-9581-66dec7dda9a5/);
  assert.match(leadRoute, /3880b715-f259-4740-9581-66dec7dda9a5/);
  assert.match(applicationForm, /router\.push\("\/obrigado"\)/);
  assert.match(thankYouPage, /LeadPixelTracker/);
  assert.match(leadPixelTracker, /fbq\??\.\("track", "Lead"\)/);
});

test("routes landing page calls to action to the application form", () => {
  const sourceFiles = [
    "src/components/Navbar.tsx",
    "src/components/Hero.tsx",
    "src/components/Conflict.tsx",
    "src/components/Procrastination.tsx",
    "src/components/BottomOfFunnel.tsx",
    "src/components/TurningPoint.tsx",
    "src/components/Authority.tsx",
    "src/components/Methodology.tsx",
    "src/components/FinalCTA.tsx",
    "src/components/FAQ.tsx",
  ];

  const sources = sourceFiles
    .map((file) => fs.readFileSync(file, "utf8"))
    .join("\n");

  assert.doesNotMatch(sources, /wa\.me|api\.whatsapp|whatsapp\.com/i);
  assert.equal((sources.match(/href="#aplicacao"/g) ?? []).length >= 8, true);
});
