import { test, expect } from "@playwright/test";

test("Check Add project window", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("//button[@type='submit']").click();
  await page.locator('//li[@id="Projects"]').click();
  await expect(page.locator(".table-scrollable table")).toBeVisible();
  await page.locator("//button[@test_id='Add Project']").click();
  await expect(page.locator('div[data-testid="Name"] input')).toBeVisible();
  expect(page.locator("button[type='submit']")).toHaveText("Save");
});
