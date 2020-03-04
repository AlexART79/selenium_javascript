import { browser, by, element, ExpectedConditions as EC } from 'protractor'

class ReactCheckbox {
    constructor(locator) {
        this.locator = locator
    }

    get element() {             
        return browser.wait(EC.presenceOf(this.locator), 30000);
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