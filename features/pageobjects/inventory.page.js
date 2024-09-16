const { $ } = require('@wdio/globals')
// const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class InventoryPage {
    /**
     * define selectors using getter methods
     */
    get inventoryPageTitle () {
        return $('//span[text()="Products"]');
    }
}

module.exports = new InventoryPage();
