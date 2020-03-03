const { BasePage } = require("./BasePage");
const { locators } = require('./locators');
const { By, until } = require('selenium-webdriver');


class SideMenu {
    constructor(driver, locator) {
        this.driver = driver
        this.locator = locator
    }

    get_item(name) {        
        let locator = By.xpath(`//a[text() = '${name}']`)
        let element = this.driver.wait(until.elementLocated(locator), 30000);
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
    constructor(driver) {
        super(driver);                
    }

    get SideMenu() {
        return new SideMenu(this.driver, locators.common_locators.sidebar_locator)
    }

    get header() {
        return this.driver.findElement(locators.demos_page.introduction)         
    }

}

exports.DemoBasePage = DemoBasePage;
exports.SideMenu = SideMenu;
