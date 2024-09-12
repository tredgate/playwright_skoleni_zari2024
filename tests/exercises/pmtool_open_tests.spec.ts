import { test } from "@playwright/test";

test("Open PMTool and fill inputs", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("username");
  await page.locator("#password").fill("123456");
});
