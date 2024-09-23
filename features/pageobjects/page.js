const { browser } = require('@wdio/globals')

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(path)
    }

    get btnCart () {
        return $('//a[@data-test="shopping-cart-link"]')
    }

    get btnCheckout () {
        return $('//button[@id="checkout"]')
    }

    get btnContinue () {
        return $('//input[@id="continue"]')
    }

    async checkoutPage () {
        await this.btnCart.click();
        await this.btnCheckout.click();
    }

    async overviewPage () {
        await this.btnCart.click();
        await this.btnCheckout.click();
        await this.btnContinue.click()
    }
}

module.exports =  new Page()
