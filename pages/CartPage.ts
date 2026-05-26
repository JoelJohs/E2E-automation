import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';
import { BASE_URL, ROUTES } from '../utils/constants';

export class CartPage extends BasePage {
  readonly removeButton: Locator;

  constructor(page: Page) {
    super(page);

    this.removeButton =
      page.locator('.cart_quantity_delete').first();
  }

  async addFirstProduct(productId = 1) {
    await this.page.goto(`${BASE_URL}/product_details/${productId}`, { waitUntil: 'domcontentloaded' });
    await this.page.locator('button.cart').click();
    await this.page.locator('.modal-content').waitFor({ state: 'visible' });
  }

  async openCart() {
    await this.page.goto(BASE_URL + ROUTES.CART, { waitUntil: 'domcontentloaded' });
  }

  async removeFirstProduct() {
    await this.removeButton.click();
  }
}
