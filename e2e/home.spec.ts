import { test, expect } from "@playwright/test";

test("Home - has a title", async ({ page }) => {
  await page.goto("http://localhost:4000/");

  await expect(page).toHaveTitle(/Booker/);
});
