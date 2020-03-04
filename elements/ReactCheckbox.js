const { By, until } = require('selenium-webdriver');

class ReactCheckbox {
    constructor(driver, locator) {
        this.driver = driver
        this.locator = locator
    }

    get element() {             
        return this.driver.wait(until.elementLocated(this.locator), 30000); // WebElementPromise
    }

    get checked() {        
        let cb_locator = By.xpath('..//input');
        return this.element.findElement(cb_locator).isSelected();                            
    }

    get label() {
        let label_locator = By.xpath(this.locator.value + '/../following-sibling::label')            
        return this.element.findElement(label_locator).getText();                
    }

    click() {                
        return this.element.click()
    }
}

exports.ReactCheckbox = ReactCheckbox