const { test, expect } = require('@playwright/test');

const { LoginPage } = require('../pages/LoginPage.js');

const data = require('../fixtures/testData');


test.describe('Login Module', () => {

  test('Valid user should login successfully', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();

    await loginPage.login(
      data.validUsername,
      data.validPassword
    );

    await expect(page.getByText('Products'))
      .toBeVisible();

  });


  test('Invalid user should see error message', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.openWebsite();

    await loginPage.login(
      data.invalidUsername,
      data.invalidPassword
    );

    await expect(loginPage.errorMessage)
      .toBeVisible();

  });

});