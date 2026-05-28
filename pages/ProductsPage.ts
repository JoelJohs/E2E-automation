import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { BASE_URL, ROUTES } from "../utils/constants";

export class ProductsPage extends BasePage {
  readonly searchInput: Locator;
  readonly searchButton: Locator;

  constructor(page: Page) {
    super(page);

    this.searchInput = page.locator("#search_product");

    this.searchButton = page.locator("#submit_search");
  }

  async openProducts() {
    await this.page.goto(BASE_URL + ROUTES.PRODUCTS, { waitUntil: "load" });
    await this.searchInput.waitFor({ state: "visible" });
  }

  async searchProduct(productName: string) {
    await this.searchInput.waitFor({ state: "visible" });
    await this.searchInput.fill(productName);

    await this.searchButton.scrollIntoViewIfNeeded();
    await this.searchButton.waitFor({ state: "visible" });
    await this.searchButton.click();
  }
}
