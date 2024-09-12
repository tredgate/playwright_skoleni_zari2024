import { type Locator, type Page } from "@playwright/test";
import { DashboardPage } from "./dashboard_page";

export class LoginPage {
  readonly page: Page;
  readonly url = "https://tredgate.com/pmtool";
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator("//button[@type='submit']");
  }

  async openPmtool(): Promise<LoginPage> {
    this.page.goto(this.url);
    return this;
  }

  async fillUsername(username: string): Promise<LoginPage> {
    await this.usernameInput.fill(username);
    return this;
  }

  async fillPassword(password: string): Promise<LoginPage> {
    await this.passwordInput.fill(password);
    return this;
  }

  async clickLogin(): Promise<DashboardPage> {
    await this.loginButton.click();
    return new DashboardPage(this.page);
  }

  async login(username: string, password: string): Promise<DashboardPage> {
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickLogin();
    return new DashboardPage(this.page);
  }
}
