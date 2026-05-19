class InventoryPage {

  constructor(page) {

    this.page = page;

    this.productsTitle = page.getByText('Products');

    this.addBackpack = page.locator('#add-to-cart-sauce-labs-backpack');

    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  async addProductToCart() {

    await this.addBackpack.click();
  }

  async openCart() {

    await this.cartLink.click();
  }

}

module.exports = { InventoryPage };