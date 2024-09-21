const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');
const { Before, After } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page.js');
const InventoryPage = require('../pageobjects/inventory.page.js');
const Page = require('../pageobjects/page.js')
const CartPage = require('../pageobjects/cart.page.js')