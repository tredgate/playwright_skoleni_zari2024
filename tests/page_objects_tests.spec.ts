import { test } from "@playwright/test";
import { LoginPage } from "../page-objects/pmtool/login_page";
import { DashboardPage } from "../page-objects/pmtool/dashboard_page";

test("Test Page Objects", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.openPmtool();
  await loginPage.fillUsername("playwright_jaro24");
  await loginPage.fillPassword("Playwright!2024");
  await loginPage.clickLogin();
});

test("Login, logout PMtool", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const dashboardPage = new DashboardPage(page);

  await loginPage.openPmtool();
  await loginPage.login("playwright_jaro24", "Playwright!2024");
  await dashboardPage.clickProfile();
  await dashboardPage.clickLogout();
});
