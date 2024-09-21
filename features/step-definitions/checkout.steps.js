const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const { Before, After } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const Page = require('../pageobjects/page.js')
const CartPage = require('../pageobjects/cart.page.js')
const CheckoutPage = require('../pageobjects/checkout.page.js')

// Before Hooks

Before(async () => {
    await Page.open('/'); // Open login page
    await browser.maximizeWindow();
    await LoginPage.login('standard_user', 'secret_sauce'); // Login to account
    await InventoryPage.btnAddToCart.click(); // Add to cart
    await InventoryPage.btnCart.click(); // Access cart page
});

Given(/^I am on cart page$/, async () => {
    await expect(CartPage.cartPageTitle).toBeExisting();
})

Given(/^I already have an item to checkout from the cart$/, async () => {
    await CartPage.assertProductTest();
})


When(/^I click checkout an product$/, async () => {
    await CartPage.btnCheckout.click();
})

Then(/^I should be on the checkout page$/, async () => {
    await expect(CheckoutPage.checkoutPageTitle).toBeExisting();
    await browser.pause(2000);
})