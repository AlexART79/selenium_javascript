const { BasePage } = require("./BasePage");
const { locators } = require('./locators');
const { browser, by, element, ExpectedConditions } = require('protractor');


class SideMenu {
    constructor(locator) {        
        this.locator = locator
    }

    get_item(name) {        
        let locator = by.xpath(`//a[text() = '${name}']`)
        return browser.wait(ExpectedConditions.elementToBeClickable(element(locator)), 30000).then(clickable => {
            if (clickable) {                
                return element(locator)
            }
            else {
                return null;
            }
        });        
    }

    goto (name) {        
        return this.get_item(name).then(e => {            
            if (e && e.isDisplayed() && e.isEnabled()) {
                return e.click();
            }
        });        
    }
}

class DemoBasePage extends BasePage {
    constructor() {
        super();

        this._sideMenu = new SideMenu(locators.common_locators.sidebar_locator);
        this._pageHeader = element(locators.demos_page.introduction);
    }

    get SideMenu() {
        return this._sideMenu;
    }

    get header() {
        return this._pageHeader;
    }
}

exports.DemoBasePage = DemoBasePage;
