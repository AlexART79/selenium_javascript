const { browser, by, ExpectedConditions } = require('protractor')

class ReactCheckbox {
    constructor(locator) {
        this.locator = locator
    }

    get element() {             
        return browser.wait(ExpectedConditions.presenceOf(this.locator), 30000);
    }

    get checked() {        
        let cb_locator = by.xpath('..//input');
        return this.element.findElement(cb_locator).isSelected();                            
    }

    get label() {
        let label_locator = by.xpath(this.locator.value + '/../following-sibling::label')            
        return this.element.findElement(label_locator).getText();                
    }

    click() {                
        return this.element.click()
    }
}

exports.ReactCheckbox = ReactCheckbox