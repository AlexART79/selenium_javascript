const { DemoBasePage } = require("./DemoBasePage");
const { locators } = require('./locators');
const { ReactCheckbox } = require('../elements/ReactCheckbox');


class ReactCheckboxPage extends DemoBasePage {
    constructor(driver) {
        super(driver);                
    }

    get FirstCheckbox() {
        return new ReactCheckbox(this.driver, locators.checkbox_page_locators.first_checkbox_locator)   
    }

    get SecondCheckbox() {
        return new ReactCheckbox(this.driver, locators.checkbox_page_locators.second_checkbox_locator)   
    }
}

exports.ReactCheckboxPage = ReactCheckboxPage;
