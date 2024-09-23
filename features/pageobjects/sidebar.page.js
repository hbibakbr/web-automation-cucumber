const { $ } = require('@wdio/globals')

class SidebarPage {
    get menuSidebar () {
        return $('//button[@id="react-burger-menu-btn"]')
    }

    get logout () {
        return $('//a[contains(@id, "logout_sidebar_link") and text() = "Logout"]')
    }

    get resetAppState () {
        return $('//a[contains(@id, "reset_sidebar_link") and text() = "Reset App State"]')
    }
}

module.exports = new SidebarPage()