import { test, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

test("should load home page correctly", async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.open();

  await expect(page).toHaveTitle(/Automation Exercise/);
});
