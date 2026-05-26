import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
  private readonly loginLink: Locator;
  private readonly loginEmailInput: Locator;
  private readonly loginPasswordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.loginLink = page.locator('a[href="/login"]');

    this.loginEmailInput = page.locator('input[data-qa="login-email"]');

    this.loginPasswordInput = page.locator('input[data-qa="login-password"]');

    this.loginButton = page.locator('button[data-qa="login-button"]');

    this.errorMessage = page.locator("p", {
      hasText: "Your email or password is incorrect!",
    });
  }

  async openLogin() {
    await this.loginLink.click();
  }

  async login(email: string, password: string) {
    await this.loginEmailInput.fill(email);
    await this.loginPasswordInput.fill(password);

    await this.loginButton.click();
  }

  getErrorMessage() {
    return this.errorMessage;
  }
}
