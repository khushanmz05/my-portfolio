import { test, expect } from "@playwright/test";

test("home Livedrop row links to the live site", async ({ page }) => {
  await page.goto("/");
  const row = page.locator("#work a", { hasText: "Livedrop" });
  await expect(row).toHaveAttribute("href", "https://livedrop.vercel.app");
  await expect(row).toContainText("Live site");
  await expect(row).not.toContainText("Case study");
});

for (const route of ["/", "/projects", "/projects/dashboard"]) {
  test(`no removed dashboard domain on ${route}`, async ({ page }) => {
    await page.goto(route);
    expect(await page.content()).not.toContain("gayboyz");
  });
}
