import { test, expect } from "@playwright/test";

test("Check validation messages on PMTOOL", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("#username-error")).toBeVisible();
  await expect(page.locator("#username-error")).toHaveText(
    "This field is required!"
  );
  await expect(page.locator("#password-error")).toBeVisible();
  await expect(page.locator("#password-error")).toHaveText(
    "This field is required!"
  );
});
