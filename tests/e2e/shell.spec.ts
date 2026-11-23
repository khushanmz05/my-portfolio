import { test, expect } from "@playwright/test";
import { mainRoutes } from "./routes";

test("skip link is first in tab order and moves focus to main", async ({ page }) => {
  await page.goto("/");
  await page.keyboard.press("Tab");
  const focused = page.locator(":focus");
  await expect(focused).toHaveText("Skip to content");
  await page.keyboard.press("Enter");
  await expect(page.locator("main#main")).toBeFocused();
});

for (const route of mainRoutes) {
  test(`single shell landmarks on ${route}`, async ({ page }) => {
    await page.goto(route);
    await expect(page.locator("main")).toHaveCount(1);
    await expect(page.locator("footer")).toHaveCount(1);
    await expect(page.locator("header nav")).not.toHaveCount(0);
    await expect(page.locator("main footer")).toHaveCount(0);
  });
}

test("footer aligns with the page heading on desktop", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop");
  await page.goto("/");
  const h1 = await page.locator("h1").boundingBox();
  const footerChild = await page.locator("footer p").first().boundingBox();
  expect(Math.abs(h1!.x - footerChild!.x)).toBeLessThanOrEqual(1);
});
