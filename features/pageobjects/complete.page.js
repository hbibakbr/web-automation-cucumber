const { $ } = require('@wdio/globals')

class CompletePage {

    get completePageTitle () {
        return $('//span[contains(@data-test,"title") and text() = "Checkout: Complete!"]')
    }

    get msgCompleteOrder () {
        return $('//h2[contains(@data-test, "complete-header") and text() = "Thank you for your order!"]')
    }

    get txtCompleteOrder () {
        return $('//div[@data-test="complete-text"]')
    }

    get btnBackHome () {
        return $('//button[@id="back-to-products"]')
    }

    async assertSuccessOrder () {
        await expect(this.msgCompleteOrder).toBeExisting()
        await expect(this.txtCompleteOrder).toBeExisting()
    }

}

module.exports = new CompletePage()