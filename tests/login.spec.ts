import { test, expect } from "@playwright/test";

import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { SignupPage } from "../pages/SignupPage";

import { generateRandomUser } from "../utils/generateUser";

test("should login successfully", async ({ page }) => {
  const homePage = new HomePage(page);
  const loginPage = new LoginPage(page);
  const signupPage = new SignupPage(page);

  const user = generateRandomUser();

  await homePage.open();

  await loginPage.openLogin();

  await signupPage.startSignup(user.name, user.email);

  await signupPage.completeRegistration(user.password);

  await expect(
    page.locator("h2", {
      hasText: "Account Created!",
    }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Continue" }).click();

  await homePage.logout();

  await loginPage.openLogin();

  await loginPage.login(user.email, user.password);

  await expect(
    page.locator("a", {
      hasText: "Logged in as",
    }),
  ).toBeVisible();
});
