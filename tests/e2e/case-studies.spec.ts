import { test, expect } from "@playwright/test";

test("unknown case study is a 404", async ({ page }) => {
  const res = await page.goto("/projects/does-not-exist");
  expect(res?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Page not found");
  await expect(page.getByRole("link", { name: "See all projects" })).toHaveAttribute("href", "/projects");
});

test("case study has its own title", async ({ page }) => {
  await page.goto("/projects/mytorch");
  await expect(page).toHaveTitle(/^MyTorch \| Khushan Kanakrai/);
});
