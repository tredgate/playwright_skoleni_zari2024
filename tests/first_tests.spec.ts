import { test } from "@playwright/test";

test("First Test", async ({ page }) => {
  await page.goto("http://tredgate.com/pmtool");
  await page.locator("#username").fill("Test");
});

/*
Vytvořte nový testovací soubor ve složce tests/exercises: pmtool_open_tests.spec.ts
V novém souboru vytvořte test, který otevře pmtool
Následně vyplní uživatelské jméno a heslo (lokátor: #password)
Test spusťte
*/
