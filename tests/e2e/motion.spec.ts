import { test, expect } from "@playwright/test";
import { projects } from "../../src/data/projects";

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });
  test("hero is fully visible immediately", async ({ page }) => {
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(50);
    const opacity = await page
      .locator("[data-hero]")
      .evaluate((el) => getComputedStyle(el).opacity);
    expect(opacity).toBe("1");
    const transform = await page
      .locator("[data-hero]")
      .evaluate((el) => getComputedStyle(el).transform);
    expect(["none", "matrix(1, 0, 0, 1, 0, 0)"]).toContain(transform);
  });
});

test.describe("without javascript", () => {
  test.use({ javaScriptEnabled: false });
  test("home content is visible", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
    const opacity = await page
      .locator("[data-hero]")
      .evaluate((el) => getComputedStyle(el).opacity);
    expect(opacity).toBe("1");
  });
});

test("project filter shows matching projects and clears", async ({ page }) => {
  await page.goto("/projects");
  await page.getByRole("button", { name: "Systems" }).click();
  await expect(page.getByRole("heading", { name: "Systems", level: 2 })).toBeVisible();
  const expected = projects.filter((p) => p.categories.includes("Systems")).length;
  await expect(page.locator("section[aria-labelledby=filtered-projects] article")).toHaveCount(expected);
  await page.getByRole("button", { name: "Clear filter" }).click();
  await expect(page.getByRole("heading", { name: "Flagship" })).toBeVisible();
});
