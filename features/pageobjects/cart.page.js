const { $ } = require('@wdio/globals')

class CartPage {
    get cartPageTitle () {
        return $('//span[contains(@data-test,"title") and text() = "Your Cart"]')
    }

    get qty () {

    }

    get productTest () {
        return $('//div[@data-test="inventory-item-name"]')
    }

    get btnCheckout () {
        return $('//button[@id="checkout"]')
    }

    async assertProductTest () {
        await expect(this.productTest).toHaveText('Sauce Labs Backpack');
    }
}

module.exports = new CartPage()