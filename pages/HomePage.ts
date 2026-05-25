import { BasePage } from "./BasePage";
import { Page } from "@playwright/test";
import { BASE_URL } from "../utils/constants";

export class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.page.goto(BASE_URL);
  }
}
