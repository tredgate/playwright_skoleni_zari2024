import { test, expect } from "@playwright/test";
import { LoginPage } from "../page-objects/pmtool-fluent/login_page";
import { DashboardPage } from "../page-objects/pmtool-fluent/dashboard_page";

test.describe("Homepage Atomic Tests", () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = await new LoginPage(page);
    await loginPage
      .openPmtool()
      .then((page) => page.fillUsername("pw_skoleni"))
      .then((page) => page.fillPassword("TEG2023"))
      .then((page) => page.clickLogin());
  });

  test("Top bar checks", async ({ page }) => {
    const homepage = await new DashboardPage(page);
    await expect.soft(homepage.profileButton).toBeVisible();
    expect.soft(homepage.headerTitle).toBeVisible();
    await expect.soft(homepage.bellIcon).toBeVisible();
    expect.soft(homepage.headerTitle).toContainText("TEG Project Management");
  });

  test("Left menu checks", async ({ page }) => {
    const homepage = await new DashboardPage(page);
    await expect.soft(homepage.dashboard).toBeVisible();
    expect.soft(homepage.projects).toBeVisible();
    expect.soft(homepage.users).toBeVisible();
    expect.soft(homepage.reports).toBeVisible();
    expect.soft(homepage.configuration).toBeVisible();
    expect.soft(homepage.applicationStructure).toBeVisible();
    expect.soft(homepage.extension).toBeVisible();
    expect.soft(homepage.tools).toBeVisible();
    expect.soft(homepage.documentation).toBeVisible();
    expect.soft(homepage.logo).toBeVisible();
    expect.soft(homepage.dashboard).toContainText("Dashboard");
    expect.soft(homepage.projects).toContainText("Projects");
    expect.soft(homepage.users).toContainText("Users");
    expect.soft(homepage.reports).toContainText("Reports");
    expect.soft(homepage.configuration).toContainText("Configuration");
    expect
      .soft(homepage.applicationStructure)
      .toContainText("Application Structure");
    expect.soft(homepage.extension).toContainText("Extension");
    expect.soft(homepage.tools).toContainText("Tools");
    expect.soft(homepage.documentation).toContainText("Documentation");
  });

  test("Content checks", async ({ page }) => {
    const homepage = await new DashboardPage(page);
    await expect.soft(homepage.contentHeader).toBeVisible();
    expect
      .soft(homepage.contentHeader)
      .toHaveText("Vítej v testovací aplikaci Tredgate Project");
    expect.soft(homepage.firstParagraph).toBeVisible();
    expect
      .soft(homepage.firstParagraph)
      .toContainText(
        "Tato aplikace slouží pro trénink Software Testování a Automatizace testování"
      );
    expect.soft(homepage.secondParagraph).toBeVisible();
    expect
      .soft(homepage.secondParagraph)
      .toContainText(
        "Pokud budeš mít jakékoliv problémy, kontakuj Petra na: petr.fifka@tredgate.cz"
      );
  });
});
