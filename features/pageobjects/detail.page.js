const { $ } = require('@wdio/globals')

class DetailPage {
    get productTestName () {
        return $('//div[@data-test="inventory-item-name" and text() = "Sauce Labs Backpack"]')
    }

    get btnAddToCart () {
        return $('//button[@id="add-to-cart"]');
    }

    get btnRemoveProduct () {
        return $('//button[@id="remove"]')
    }
}

module.exports = new DetailPage();