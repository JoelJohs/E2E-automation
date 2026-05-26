import { Page } from "@playwright/test";

export abstract class BasePage {
  constructor(protected page: Page) {}

  async navigate(url: string) {
    await this.page.goto(url);
  }

  async getTitle() {
    return this.page.title();
  }

  async wait() {
    await this.page.waitForLoadState("networkidle");
  }
}
