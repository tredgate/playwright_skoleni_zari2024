import { test } from "@playwright/test";

test("Click function @mujTag", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator("//button[@type='submit']").click(); // force kliknutí (např. neviditelné tlačítko): .click({ force: true })
});

test("Fill a pressSequentially test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("Start");
  await page.locator("#username").fill("End");
  await page
    .locator("#username")
    .pressSequentially("Kde toto bude?", { delay: 100 });
});

test("Select tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption("sql"); // vybere select option pomocí value
  await page.locator("#dropdowm-menu-2").selectOption({ label: "TestNG" }); // vybiráme pomocí textu: <option value ="1">TestNG</option>
});

test("Checkbox, radio buttons tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator('//input[@value="option-4"]').check(); // checkbox
  await page
    .locator('//form[@id="radio-buttons"]/input[@value="yellow"]')
    .check(); // radio button
});

test("iFrame test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  //   await page.locator("#button-find-out-more").click(); // ! Toto nebude fungovat, prvek je uvnitř iframe
  const webIframe = await page.frameLocator("#frame");
  await webIframe.locator("#button-find-out-more").click();
});

test("Hover test", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/Actions/index.html");
  page.on("dialog", async (dialog) => {
    console.log("Alert message: " + dialog.message());
    await dialog.dismiss();
  });
  await page.locator(".hover .dropbtn").hover();
  await page.locator(".hover .list-alert").click();
});
