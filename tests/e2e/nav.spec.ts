import { test, expect } from "@playwright/test";

test.describe("mobile navigation", () => {
  test.beforeEach(async ({ page }, info) => {
    test.skip(info.project.name !== "mobile");
    await page.goto("/about");
  });

  const toggle = (page: import("@playwright/test").Page) =>
    page.locator('button[aria-controls="mobile-navigation"]');

  test("brand link is visible in the top bar", async ({ page }) => {
    const brand = page.locator("header").getByRole("link", { name: "Khushan Kanakrai" });
    await expect(brand).toBeVisible();
    await expect(brand).toHaveAttribute("href", "/");
  });

  test("Escape closes the menu and returns focus", async ({ page }) => {
    await toggle(page).click();
    await expect(page.locator("#mobile-navigation")).toBeVisible();
    await page.keyboard.press("Escape");
    await expect(page.locator("#mobile-navigation")).toBeHidden();
    await expect(toggle(page)).toBeFocused();
  });

  test("clicking outside closes the menu", async ({ page }) => {
    await toggle(page).click();
    await expect(page.locator("#mobile-navigation")).toBeVisible();
    await page.mouse.click(195, 700);
    await expect(page.locator("#mobile-navigation")).toBeHidden();
  });

  test("panel spans the content width", async ({ page }) => {
    await toggle(page).click();
    const panel = await page.locator("#mobile-navigation").boundingBox();
    const vw = page.viewportSize()!.width;
    expect(panel!.x).toBeLessThanOrEqual(26);
    expect(panel!.x + panel!.width).toBeGreaterThanOrEqual(vw - 26);
  });

  test("Tab stays inside the open menu", async ({ page }) => {
    await toggle(page).click();
    await expect(page.locator("#mobile-navigation")).toBeVisible();
    for (let i = 0; i < 10; i++) {
      await page.keyboard.press("Tab");
      const inside = await page.evaluate(() =>
        Boolean(document.activeElement?.closest("header")),
      );
      expect(inside).toBe(true);
    }
  });
});
