import { type Locator, type Page, expect } from "@playwright/test";
import { LoginPage } from "./login_page";

export class DashboardPage {
  readonly page: Page;
  public profileButton: Locator;
  public logoutButton: Locator;
  public contentTitle: Locator;
  public profileImage: Locator;

  // * Horní lišta
  public headerTitle: Locator;
  public bellIcon: Locator;

  // * Levé menu
  public logo: Locator;
  public dashboard: Locator;
  public projects: Locator;
  public users: Locator;
  public reports: Locator;
  public configuration: Locator;
  public applicationStructure: Locator;
  public extension: Locator;
  public tools: Locator;
  public documentation: Locator;

  // * Obsah
  public contentHeader: Locator;
  public firstParagraph: Locator;
  public secondParagraph: Locator;

  constructor(page: Page) {
    const profileSelector = "//li[@id='user_dropdown']";
    this.page = page;
    this.profileButton = page.locator("#user_dropdown");
    this.logoutButton = page.locator("#logout");
    this.headerTitle = page.locator("//a[@class='navbar-brand']");
    this.bellIcon = page.locator(
      "//a[@class='dropdown-toggle']//i[@class='fa fa-bell-o']"
    );
    this.contentTitle = page.locator("//h3[@id='welcome-page-header']");
    this.profileImage = page.locator(`${profileSelector}//img`);

    // * Levé menu
    this.logo = page.locator("//img[@title='TEG Project Management']");
    this.dashboard = page.locator("//li[@id='dashboard']//span");
    this.projects = page.locator("//li[@id='Projects']//span");
    this.users = page.locator("//li[@id='Users']//span");
    this.reports = page.locator(
      "//li[@id='Reports']//span[contains(@class,'submenu-level-0')]"
    );
    this.configuration = page.locator(
      "//li[@id='Configuration']//span[contains(@class,'submenu-level-0')]"
    );
    this.applicationStructure = page.locator(
      "//li[@id='Application Structure']//span[contains(@class,'submenu-level-0')]"
    );
    this.extension = page.locator("//li[@id='Extension']//span");
    this.tools = page.locator(
      "//li[@id='Tools']//span[contains(@class,'submenu-level-0')]"
    );
    this.documentation = page.locator(
      "//li[@id='Documentation']//span[contains(@class,'submenu-level-0')]"
    );

    // * Obsah
    this.contentHeader = page.locator("//h3[@id='welcome-page-header']");
    this.firstParagraph = page.locator(
      "//h3[@id='welcome-page-header']//..//p[1]"
    );
    this.secondParagraph = page.locator(
      "//h3[@id='welcome-page-header']//..//p[2]"
    );
  }

  async clickProfile(): Promise<DashboardPage> {
    await this.page.waitForTimeout(1000); // ! NEDELAT, pouzit cekani na nejaky prvek/API
    await expect(this.profileButton).toBeVisible();
    await this.profileButton.click();
    await expect(this.logoutButton).toBeVisible();
    return this;
  }

  async clickLogout(): Promise<LoginPage> {
    await this.logoutButton.click();
    return new LoginPage(this.page);
  }
}
