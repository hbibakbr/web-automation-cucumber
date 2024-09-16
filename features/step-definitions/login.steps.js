const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const Page = require('../pageobjects/page.js')

Given(/^I am on the (\w+) page$/, async (page) => {
    await Page.open('/')
});

When(/^I login with valid credentials $/, async () => {
    await LoginPage.login('standard_user', 'secret_sauce')
});

Then(/^I should be on the inventory page and see the page title$/, async () => {
    await expect(InventoryPage.inventoryPageTitle).toBeExisting();
    await expect(InventoryPage.inventoryPageTitle).toHaveText(expect.stringContaining('Products'));
});

// DDT

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see an error message: (.+)$/, async (message) => {
    await LoginPage.assertFailedLoginMsg(message)
})
