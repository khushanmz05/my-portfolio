import { test, expect } from "@playwright/test";
import { mainRoutes } from "./routes";

test("main routes have distinct titles", async ({ page }) => {
  const titles: string[] = [];
  for (const route of mainRoutes) {
    await page.goto(route);
    titles.push(await page.title());
  }
  expect(new Set(titles).size).toBe(titles.length);
});

for (const route of mainRoutes) {
  test(`canonical and og:image on ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator('link[rel="canonical"]')).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).not.toHaveCount(0);
  });
}

test("sitemap lists case studies", async ({ request }) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  expect(await res.text()).toContain("/projects/sensai");
});

test("robots points at the sitemap", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(await res.text()).toContain("Sitemap:");
});

test("og image renders", async ({ request }) => {
  const res = await request.get("/opengraph-image");
  expect(res.status()).toBe(200);
  expect(res.headers()["content-type"]).toContain("image/png");
});
