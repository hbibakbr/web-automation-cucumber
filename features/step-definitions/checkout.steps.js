const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const { Before, After } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const Page = require('../pageobjects/page.js')
const CartPage = require('../pageobjects/cart.page.js')
const CheckoutPage = require('../pageobjects/checkout.page.js');
const OverviewPage = require('../pageobjects/overview.page.js')
const SideBarPage = require('../pageobjects/sidebar.page.js')
const CompletePage = require('../pageobjects/complete.page.js')

// Before Hooks

Before(async () => {
    await Page.open('/'); // Open login page
    await browser.maximizeWindow();
    await LoginPage.login('standard_user', 'secret_sauce'); // Login to account
    await InventoryPage.btnAddToCart.click(); // Add to cart
});

After(async () => {
    // Reset state cart atau halaman lainnya setelah skenario selesai
    console.log('Running After Hook');
    await SideBarPage.menuSidebar.click();
    await SideBarPage.resetAppState.click();
    await SideBarPage.logout.click();
    console.log('After Hook Complete');
});


// Checkout product
Given(/^I am on cart page$/, async () => {  
    await InventoryPage.btnCart.click();
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

// Place an order 

Given(/^I am on the checkout page$/, async () => {
    await Page.checkoutPage();
    await expect(CheckoutPage.checkoutPageTitle).toBeExisting();
    await browser.pause(2000);
})

When(/^I am providing firstname: (\w+), lastname: (\w+), and postal code: (.+)$/, async (firstname, lastname, postal) => {
    await expect(CheckoutPage.inputFirstname).toBeExisting();
    await expect(CheckoutPage.inputLastname).toBeExisting();
    await expect(CheckoutPage.inputPostalCode).toBeExisting()
    await CheckoutPage.inputForm(firstname, lastname, postal);
    await browser.pause(2000);
})

When(/^I click continue button$/, async () => {
    await CheckoutPage.btnContinue.click();
    await browser.pause(2000);
})

Then(/^I should be on the overview page$/, async () => {
    await expect(OverviewPage.overviewPageTitle).toBeExisting();
    await browser.pause(2000);
})

// Finish Checkout

Given(/^I am on the overview page$/, async () => {
    await CheckoutPage.btnContinue.click();
    await expect(OverviewPage.overviewPageTitle).toBeExisting();
    await browser.pause(2000);
})

When(/^I click finish button$/, async () => {
    await OverviewPage.btnFinish.click();
    await browser.pause(2000);
})

Then(/^I successful order sauce labs backpack$/, async () => {
    await CompletePage.assertSuccessOrder();
    await browser.pause(2000);
})

// Cannot continue checkout an product (Negative)

Given(/^I am providing empty firstname: (.*), lastname: (.*), and postal code: (.*)$/, async (firstname, lastname, postal) => {
    await CheckoutPage.inputForm(firstname, lastname, postal);
    await browser.pause(2000);
})

Given(/^I am providing firstname: (.*) , empty lastname: (.*), and postal code: (.*)$/, async (firstname, lastname, postal) => {
    await CheckoutPage.inputForm(firstname, lastname, postal);
    await browser.pause(2000);
})
Given(/^I am providing firstname: (.*) , lastname: (.*), and empty postal code:(.*)$/, async (firstname, lastname, postal) => {
    await CheckoutPage.inputForm(firstname, lastname, postal);
    await browser.pause(2000);
})

Then(/^I should see error message: (.+)$/, async (message) => {
    await CheckoutPage.assertFailedCheckout(message);
})