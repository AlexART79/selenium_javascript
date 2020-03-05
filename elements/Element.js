const { browser, ExpectedConditions } = require('protractor');

class Element {
    constructor(locator) {
        this.locator = locator;
    }
    
    get element() {
        return browser.wait(ExpectedConditions.elementToBeClickable(element(this.locator)), 30000).then(val => {
            if (val) {
                return element(this.locator);
            }
            else {
                return null;
            }
        }, (err) => { console.log(`ERROR!!! ${err}`); });
    }

    get text() {
        return this.element.then(e => e.getText());
    }

    get isVisible() {
        return this.element.then(e => e.isDisplayed());
    }

    get isEnabled() {
        return this.element.then(e => e.isEnabled());
    }

    click() {
        return this.element.then(e => e.click());
    }
}

exports.Element = Element;
