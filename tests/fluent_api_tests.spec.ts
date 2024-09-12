import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/pmtool-fluent/login_page";

test("Fluent test", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage
    .openPmtool()
    .then((loginPage) =>
      loginPage.login("playwright_jaro24", "Playwright!2024")
    )
    .then((dashboardPage) => dashboardPage.clickProfile())
    .then((dashboardPage) => dashboardPage.clickLogout())
    .then((loginPage) => loginPage.fillUsername("Na konci"));
});
