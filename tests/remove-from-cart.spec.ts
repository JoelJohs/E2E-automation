import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('should remove product from cart', async ({ page }) => {
  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);

  await homePage.open();

  await cartPage.addFirstProduct();

  await cartPage.openCart();

  await cartPage.removeFirstProduct();

  await expect(
    page.locator('text=Cart is empty!')
  ).toBeVisible();
});
