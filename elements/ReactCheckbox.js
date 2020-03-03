const { By, until } = require('selenium-webdriver');

class ReactCheckbox {
    constructor(driver, locator) {
        this.driver = driver
        this.locator = locator
    }

    get element() {
        return this.driver.wait(until.elementLocated(this.locator), 30000);
    }

    get checked() {
        let cb_locator = By.xpath('..//input')
        let val = this.element.findElement(cb_locator).isSelected()

        return val
    }

    set checked(val) {
        if (this.checked && !val || val && !this.checked)
            return this.click()
    }

    click() {
        return this.element.click()
    }
}

exports.ReactCheckbox = ReactCheckbox