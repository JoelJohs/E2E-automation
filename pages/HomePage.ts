import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { BASE_URL } from "../utils/constants";

export class HomePage extends BasePage {
  private readonly logoutLink: Locator;

  constructor(page: Page) {
    super(page);

    this.logoutLink = page.locator('a[href="/logout"]');
  }

  async open() {
    await this.page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  }

  async logout() {
    await this.logoutLink.click();
  }
}
