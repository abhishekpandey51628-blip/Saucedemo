const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage.js');

const { InventoryPage } = require('../pages/InventoryPage.js');

const { CartPage } = require('../pages/CartPage.js');

const { CheckoutPage } = require('../pages/CheckoutPage.js');

const data = require('../fixtures/testData.js');


test('User should complete checkout successfully', async ({ page }) => {

  const loginPage = new LoginPage(page);

  const inventoryPage = new InventoryPage(page);

  const cartPage = new CartPage(page);

  const checkoutPage = new CheckoutPage(page);


  await loginPage.openWebsite();

  await loginPage.login(
    data.validUsername,
    data.validPassword
  );


  await expect(inventoryPage.productsTitle)
    .toBeVisible();


  await inventoryPage.addProductToCart();


  await inventoryPage.openCart();


  await cartPage.clickCheckout();


  await checkoutPage.fillCheckoutInformation(
    data.firstName,
    data.lastName,
    data.postalCode
  );


  await checkoutPage.continueCheckout();


  await expect(page.getByText('Checkout: Overview'))
    .toBeVisible();


  await checkoutPage.finishCheckout();


  await expect(page.getByText('Checkout: Complete!'))
    .toBeVisible();

});