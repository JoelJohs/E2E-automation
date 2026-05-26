import { test, expect } from '@playwright/test';

import { HomePage } from '../pages/HomePage';
import { ProductsPage } from '../pages/ProductsPage';

test('should search product successfully', async ({ page }) => {
  const homePage = new HomePage(page);
  const productsPage = new ProductsPage(page);

  await homePage.open();

  await productsPage.openProducts();

  await productsPage.searchProduct('Blue Top');

  await expect(
    page.locator('.productinfo')
  ).toContainText('Blue Top');
});
