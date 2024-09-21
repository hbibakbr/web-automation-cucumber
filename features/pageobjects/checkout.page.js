const { $ } = require('@wdio/globals')

class CheckoutPage {

    get checkoutPageTitle () {
        return $('//span[contains(@data-test,"title") and text() = "Checkout: Your Information"]')
    }

    get inputFirstname () {
        return $('//input[@id="first-name"]')
    }

    get inputLastname () {
        return $('//input[@id="last-name"]')
    }

    get inputPostalCode () {
        return $('//input[@id="postal-code"]')
    }

    get btnContinue () {
        return $('//input[@id="continue"]')
    }

    get btnCancel () {
        return $('//button[contains(@id,"cancel") and text() = "Cancel"]')
    }

    get msgFirstnameError () {
        return $('//h3[contains(@data-test, "error") and text() = "Error: First Name is required"]')
    }

    get msgLastnameError () {
        return $('//h3[contains(@data-test, "error") and text() = "Error: Last Name is required"]')
    }

    get msgPostalCodeError () {
        return $('//h3[contains(@data-test, "error") and text() = "Error: Postal Code is required"]')
    }

    async inputForm (firstname, lastname, postal) {
        await this.inputFirstname.setValue(firstname)
        await this.inputLastname.setValue(lastname)
        await this.inputPostalCode.setValue(postal)
    }
}

module.exports = new CheckoutPage()