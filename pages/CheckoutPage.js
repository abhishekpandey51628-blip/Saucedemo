class CheckoutPage {

  constructor(page) {

    this.page = page;

    this.firstName = page.locator('#first-name');

    this.lastName = page.locator('#last-name');

    this.postalCode = page.locator('#postal-code');

    this.continueBtn = page.locator('#continue');

    this.finishBtn = page.locator('#finish');

    this.completeHeader = page.getByText('Checkout: Complete!');
  }

  async fillCheckoutInformation(firstName, lastName, postalCode) {

    await this.firstName.fill(firstName);

    await this.lastName.fill(lastName);

    await this.postalCode.fill(postalCode);
  }

  async continueCheckout() {

    await this.continueBtn.click();
  }

  async finishCheckout() {

    await this.finishBtn.click();
  }

}

module.exports = { CheckoutPage };