const { $ } = require('@wdio/globals')
// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage {
    /**
     * define selectors using getter methods
     */

    get inventoryPageUrl() {
        return 'https://www.saucedemo.com/inventory.html'
   }

    get inventoryPageTitle () {
        return $('//span[text()="Products"]');
    }

    get btnAddToCart () {
        return $('//button[@id="add-to-cart-sauce-labs-backpack"]')
    }

    get btnRemoveProduct () {
        return $('//button[@id="remove-sauce-labs-backpack"]')
    }

    get btnCart () {
        return $('//a[@data-test="shopping-cart-link"]')
    }

    get cartBadges () {
        return $('//span[@data-test="shopping-cart-badge"]')
    }

    get productTest () {
        return $('//div[@data-test="inventory-item-name" and text() = "Sauce Labs Backpack"]');
    }

    async assertInventoryUrl() {
        await expect(browser).toHaveUrl(this.inventoryPageUrl)
    }

    async assertBadges () {
        await expect(this.cartBadges).toBeExisting()
    }

    async assertRemoveBadges () {
        await expect(this.cartBadges).not.toBeExisting()
    }
}

module.exports = new InventoryPage();
