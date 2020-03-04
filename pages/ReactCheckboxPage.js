import { DemoBasePage } from "./DemoBasePage"
import { locators } from './locators'
import { ReactCheckbox } from '../elements/ReactCheckbox'


class ReactCheckboxPage extends DemoBasePage {
    constructor() {
        super();                
    }

    get FirstCheckbox() {
        return new ReactCheckbox(locators.checkbox_page_locators.first_checkbox_locator)   
    }

    get SecondCheckbox() {
        return new ReactCheckbox(locators.checkbox_page_locators.second_checkbox_locator)   
    }
}

exports.ReactCheckboxPage = ReactCheckboxPage;
