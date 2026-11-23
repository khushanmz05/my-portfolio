import { test, expect } from "@playwright/test";

test("satoshi is self-hosted and loaded", async ({ page }) => {
  const external: string[] = [];
  page.on("request", (r) => {
    if (r.url().includes("fontshare.com")) external.push(r.url());
  });
  await page.goto("/", { waitUntil: "networkidle" });
  expect(external).toEqual([]);
  const loaded = await page.evaluate(async () => {
    await document.fonts.ready;
    return [...document.fonts].some(
      (f) => /satoshi/i.test(f.family) && f.status === "loaded",
    );
  });
  expect(loaded).toBe(true);
});
