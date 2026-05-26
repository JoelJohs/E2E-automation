import { test, expect } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";

test("should reject invalid credentials", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);

  await homePage.open();

  await loginPage.openLogin();

  await loginPage.login("fake@example.com", "wrongpassword");

  await expect(loginPage.getErrorMessage()).toBeVisible();
});
