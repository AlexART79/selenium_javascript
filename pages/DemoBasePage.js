const { BasePage } = require("./BasePage");
const { locators } = require('./locators');
const { browser, by, element, ExpectedConditions } = require('protractor');


class SideMenu {
    constructor(locator) {        
        this.locator = locator
    }

    get_item(name) {        
        let locator = by.xpath(`//a[text() = '${name}']`)
        let element = browser.wait(ExpectedConditions.elementToBeClickable(locator), 30000);
        return element
    }

    goto (name) {
        let item = this.get_item(name)
        if (item && item.isDisplayed() && item.isEnabled()) {
            return item.click()
        }
    }
}

class DemoBasePage extends BasePage {
    constructor() {    
        super()    
    }

    get SideMenu() {
        return new SideMenu(locators.common_locators.sidebar_locator)
    }

    get header() {
        return element(locators.demos_page.introduction)
    }

}

exports.DemoBasePage = DemoBasePage;
