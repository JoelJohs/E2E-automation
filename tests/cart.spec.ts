import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('should add product to cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await homePage.open();

  await cartPage.addFirstProduct();

  await cartPage.openCart();

  await expect(
    page.locator('#cart_info_table')
  ).toBeVisible();
});
