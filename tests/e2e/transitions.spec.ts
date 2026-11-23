import { test, expect } from "@playwright/test";

const pageAnimation = (page: import("@playwright/test").Page) =>
  page.locator("[data-page]").evaluate((el) => getComputedStyle(el).animationName);

test("navigating to another page plays the enter animation", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop");
  await page.goto("/");
  await page.locator("header nav").getByRole("link", { name: "Projects" }).click();
  await expect(page).toHaveURL(/\/projects$/);
  expect(await pageAnimation(page)).toBe("page-enter");
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });
  test("page enter animation is disabled", async ({ page }) => {
    await page.goto("/about");
    expect(await pageAnimation(page)).toBe("none");
  });
});
