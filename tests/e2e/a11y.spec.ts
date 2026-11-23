import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mainRoutes } from "./routes";

for (const route of mainRoutes) {
  test(`no WCAG A/AA violations on ${route}`, async ({ page }) => {
    await page.goto(route, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa"])
      .analyze();
    const summary = results.violations.map(
      (v) => `${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(", ")}`,
    );
    expect(summary).toEqual([]);
  });
}

test("active nav pill uses the strong accent", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop");
  await page.goto("/projects");
  const bg = await page
    .locator('header nav a[aria-current="page"]')
    .first()
    .evaluate((el) => getComputedStyle(el).backgroundColor);
  expect(bg).toBe("rgb(110, 90, 230)");
});
