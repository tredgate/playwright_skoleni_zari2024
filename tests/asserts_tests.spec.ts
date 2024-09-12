import { test, expect } from "@playwright/test";

test("toContainText test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci"
  );
});

test("toHaveText Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("//button[@type='submit']").click();
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );
});

test("toBeVisible Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await expect(page.locator(".login-page-logo img")).toBeVisible();
});

test("toHaveValue Test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("Test");
  expect(page.locator("#username")).toHaveValue("Test");
});

test("toBeChecked test", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await expect(page.locator("input[value='option-3']")).toBeChecked();
});

test("toBeDisabled test", async ({ page }) => {
  await page.goto("http://tredgate.com/webtrain/registration.html");
  await expect(page.locator("#occupation")).toBeDisabled();
});

test.skip("BUG_123: Soft assert test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
  await page.locator("#username").fill("pw_skoleni");
  await page.locator("#password").fill("TEG2023");
  await page.locator("button[type='submit']").click();
});

test("Negative test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool/");
  await expect(page.locator(".alert-danger")).not.toBeVisible();
});

// Vytvořte nový testovací soubor ve složce exercises: pmtool-empty-fields-tests.spec.ts
// Vytvoř nový test:
// Otevře PMTool
// Stiskne tlačítko login bez vyplnění údajů
// Zkontroluje, že existují chybové hlášky u inputů
// Zkontroluje text chyb: This field is required!
// Spusť test
