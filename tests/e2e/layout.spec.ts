import { test, expect } from "@playwright/test";
import { mainRoutes } from "./routes";

test.describe("phone layout", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("home portrait is at most 420px tall", async ({ page }) => {
    await page.goto("/");
    const box = await page.locator('img[src*="Image.jpeg"], img[srcset*="Image.jpeg"]').first().boundingBox();
    expect(box!.height).toBeLessThanOrEqual(420);
  });

  for (const route of mainRoutes) {
    test(`tap targets are at least 44px tall on ${route}`, async ({ page }) => {
      await page.goto(route);
      const small = await page.evaluate(() =>
        [...document.querySelectorAll("main a, main button, footer a, footer button")]
          .map((el) => ({ text: (el.textContent ?? "").trim().slice(0, 30), h: el.getBoundingClientRect().height }))
          .filter((t) => t.h > 0 && t.h < 43.5),
      );
      expect(small).toEqual([]);
    });
  }
});

test.describe("narrow viewport with 200% text", () => {
  test.use({ viewport: { width: 320, height: 700 } });
  for (const route of ["/", "/projects", "/projects/sensai"]) {
    test(`no horizontal scroll on ${route}`, async ({ page }) => {
      await page.goto(route);
      await page.evaluate(() => (document.documentElement.style.fontSize = "200%"));
      await page.waitForTimeout(100);
      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth - window.innerWidth,
      );
      expect(overflow).toBeLessThanOrEqual(0);
    });
  }
});

for (const route of ["/projects", "/education"]) {
  test(`body copy stays under 80 characters per line on ${route}`, async ({ page }, info) => {
    test.skip(info.project.name !== "desktop");
    await page.goto(route);
    // Longest rendered line, in characters: group each character by its line box.
    const worst = await page.evaluate(() => {
      let max = 0;
      for (const p of document.querySelectorAll("main p")) {
        const perLine = new Map<number, number>();
        const walker = document.createTreeWalker(p, NodeFilter.SHOW_TEXT);
        const range = document.createRange();
        for (let node = walker.nextNode(); node; node = walker.nextNode()) {
          const text = node.textContent ?? "";
          for (let i = 0; i < text.length; i++) {
            range.setStart(node, i);
            range.setEnd(node, i + 1);
            const rect = range.getClientRects()[0];
            if (!rect) continue;
            const top = Math.round(rect.top);
            perLine.set(top, (perLine.get(top) ?? 0) + 1);
          }
        }
        for (const count of perLine.values()) max = Math.max(max, count);
      }
      return max;
    });
    expect(worst).toBeLessThanOrEqual(80);
  });
}
