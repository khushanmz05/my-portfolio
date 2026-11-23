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
    const worst = await page.evaluate(() =>
      Math.max(
        ...[...document.querySelectorAll("main p")].map((p) => {
          const text = (p.textContent ?? "").trim();
          const lineHeight = parseFloat(getComputedStyle(p).lineHeight);
          const lines = Math.round(p.getBoundingClientRect().height / lineHeight);
          return lines > 1 ? text.length / (lines - 0.5) : 0;
        }),
      ),
    );
    expect(worst).toBeLessThanOrEqual(80);
  });
}
