const { DemoBasePage } = require("./DemoBasePage");
const { locators } = require('./locators');


class ReactCheckboxPage extends DemoBasePage {
    constructor(driver) {
        super(driver);                
    }

    get FirstCheckbox() {
        return this.driver.findElement(locators.checkbox_page_locators.first_checkbox_locator)   
    }

    get SecondCheckbox() {
        return this.driver.findElement(locators.checkbox_page_locators.second_checkbox_locator)   
    }
}

exports.ReactCheckboxPage = ReactCheckboxPage;
