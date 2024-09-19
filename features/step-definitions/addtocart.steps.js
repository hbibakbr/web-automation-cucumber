const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const { Before, After } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const Page = require('../pageobjects/page.js')
const DetailPage = require('../pageobjects/detail.page.js')

// Before Hooks

Before(async () => {
    await Page.open('/'); // Open login page
    await browser.maximizeWindow();
    await LoginPage.login('standard_user', 'secret_sauce'); // Login to account
});

// Scenario Step: Add a product to the cart
Given(/^I am on inventory page$/, async () => {
    await InventoryPage.assertInventoryUrl()
})

When(/^I add a product to the cart$/, async () => {
    await InventoryPage.btnAddToCart.click();
})

Then(/^The cart icon should display badge with 1 item$/, async () => {
    await InventoryPage.assertBadges()
    await expect(InventoryPage.cartBadges).toHaveText('1');
    await browser.pause(2000);
})

// Scenario Step: Remove a product from the cart
Given(/^I have added a product on the cart$/, async () => {
    await InventoryPage.assertBadges()
    await expect(InventoryPage.cartBadges).toHaveText('1');
})

When(/^I remove product from the cart$/, async () => {
    await InventoryPage.btnRemoveProduct.click()
})

Then(/^The cart badges is no longer displayed$/, async () => {
    await InventoryPage.assertRemoveBadges();
    await browser.pause(2000);
})

// Scenario Step: Add a product to the cart on detail page
Given(/^I am access detail product page$/, async () => {
    await InventoryPage.productTest.click();
})

When(/^I add a product to the cart on detail product page$/, async () => {
    await DetailPage.btnAddToCart.click();
})

// Scenario Step: Remove a product from the cart on the detail page

When(/^I remove product from the cart on detail product page$/, async () => {
    await DetailPage.btnRemoveProduct.click();
    await browser.pause(2000);
})