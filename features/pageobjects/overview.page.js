const { $ } = require('@wdio/globals')

class overviewPage {

    get overviewPagePageUrl() {
        return 'https://www.saucedemo.com/checkout-step-two.html'
   }

    get overviewPageTitle () {
        return $('//span[contains(@data-test,"title") and text() = "Checkout: Overview"]')
    }

    get productName () {
        return $('//div[contains(@data-test,"inventory-item-name") and text()="Sauce Labs Backpack"]')
    }

    get btnCancel () {
        return $('//button[contains(@id,"cancel") and text() = "Cancel"]')
    }

    get btnFinish () {
        return $('//button[@id="finish"]')
    }

    async assertOverviewPageUrl() {
        await expect(browser).toHaveUrl(this.overviewPagePageUrl)
    }

}

module.exports = new overviewPage()