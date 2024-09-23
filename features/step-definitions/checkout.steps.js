const { Given, When, Then} = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const { BeforeAll, AfterAll } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const Page = require('../pageobjects/page.js')
const CartPage = require('../pageobjects/cart.page.js')
const CheckoutPage = require('../pageobjects/checkout.page.js');
const OverviewPage = require('../pageobjects/overview.page.js')
const SideBarPage = require('../pageobjects/sidebar.page.js')
const CompletePage = require('../pageobjects/complete.page.js')

// Before Hooks

BeforeAll(async () => {
    await Page.open('/'); // Open login page
    await browser.maximizeWindow();
    await LoginPage.login('standard_user', 'secret_sauce'); // Login to account
    await expect(InventoryPage.inventoryPageTitle).toBeExisting();
});

AfterAll(async () => {
    // Logout atau reset jika perlu
    await SideBarPage.menuSidebar.click();
    await browser.pause(2000);
    
    await SideBarPage.logout.click();
    await browser.pause(2000);
});

// Checkout product
Given(/^I am on cart page$/, async () => {  
    await InventoryPage.btnAddToCart.click(); // Add to cart
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
    // await Page.checkoutPage();
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
    // await CheckoutPage.btnContinue.click();
    await expect(OverviewPage.overviewPageTitle).toBeExisting();
    await browser.pause(2000);
})

When(/^I click finish button$/, async () => {
    await OverviewPage.btnFinish.click();
    await browser.pause(2000);
})

Then(/^I successful order sauce labs backpack$/, async () => {
    await CompletePage.assertSuccessOrder();
    await CompletePage.btnBackHome.click();
    await browser.pause(2000);
})

// (Negative) Cannot continue checkout an product

Given(/^I am on inventory page$/, async () => {
    await InventoryPage.assertInventoryUrl()
    await browser.pause(2000);
})

Given(/^I add a product to the cart$/, async () => {
    await InventoryPage.btnAddToCart.click()
    await browser.pause(2000);
})

Given(/^I access the cart page$/, async () => {
    await InventoryPage.btnCart.click()
    await browser.pause(2000);
})

When(/^I am providing empty firstname: (.*), lastname: (.*), and postal code: (.*)$/, async (firstname, lastname, postal) => {
    await CheckoutPage.inputForm(firstname, lastname, postal);
    await browser.pause(2000);
})

// Clear data
// (Negative) Cannot continue checkout an product

Given(/^I am clear input data value$/, async () => {
    await CheckoutPage.btnErrorMessage.click()
    await browser.pause(2000);

    await CheckoutPage.clearInputForm();
    await browser.pause(2000);

    await CheckoutPage.btnCancel.click()
    await CartPage.btnCheckout.click()
})

When(/^I am providing firstname: (.*) , empty lastname: (.*), and postal code: (.*)$/, async (firstname, lastname, postal) => {
    await CheckoutPage.inputForm(firstname, lastname, postal);
    await browser.pause(2000);
})
When(/^I am providing firstname: (.*) , lastname: (.*), and empty postal code:(.*)$/, async (firstname, lastname, postal) => {
    await CheckoutPage.inputForm(firstname, lastname, postal);
    await browser.pause(2000);
})

Then(/^I should see error message: (.+)$/, async (message) => {
    await CheckoutPage.assertFailedCheckout(message);
    await browser.pause(2000);
})