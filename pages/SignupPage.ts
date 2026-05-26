import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class SignupPage extends BasePage {
  private readonly signupName: Locator;
  private readonly signupEmail: Locator;
  private readonly signupButton: Locator;
  private readonly passwordInput: Locator;
  private readonly firstNameInput: Locator;
  private readonly lastNameInput: Locator;
  private readonly addressInput: Locator;
  private readonly countrySelect: Locator;
  private readonly stateInput: Locator;
  private readonly cityInput: Locator;
  private readonly zipcodeInput: Locator;
  private readonly mobileNumberInput: Locator;
  private readonly createAccountButton: Locator;

  constructor(page: Page) {
    super(page);

    this.signupName = page.locator('input[data-qa="signup-name"]');

    this.signupEmail = page.locator('input[data-qa="signup-email"]');

    this.signupButton = page.locator('button[data-qa="signup-button"]');

    this.passwordInput = page.locator('input[data-qa="password"]');

    this.firstNameInput = page.locator('input[data-qa="first_name"]');

    this.lastNameInput = page.locator('input[data-qa="last_name"]');

    this.addressInput = page.locator('input[data-qa="address"]');

    this.countrySelect = page.locator('select[data-qa="country"]');

    this.stateInput = page.locator('input[data-qa="state"]');

    this.cityInput = page.locator('input[data-qa="city"]');

    this.zipcodeInput = page.locator('input[data-qa="zipcode"]');

    this.mobileNumberInput = page.locator('input[data-qa="mobile_number"]');

    this.createAccountButton = page.locator('button[data-qa="create-account"]');
  }

  async startSignup(name: string, email: string) {
    await this.signupName.fill(name);
    await this.signupEmail.fill(email);

    await this.signupButton.click();
  }

  async completeRegistration(password: string) {
    await this.passwordInput.fill(password);

    await this.firstNameInput.fill("Joel");
    await this.lastNameInput.fill("Test");

    await this.addressInput.fill("Test Street 123");

    await this.countrySelect.selectOption("Canada");

    await this.stateInput.fill("Test State");
    await this.cityInput.fill("Test City");

    await this.zipcodeInput.fill("12345");

    await this.mobileNumberInput.fill("5512345678");

    await this.createAccountButton.click();
  }
}
