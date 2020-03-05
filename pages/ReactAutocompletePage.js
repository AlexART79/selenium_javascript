const { DemoBasePage } = require("./DemoBasePage");
const { locators } = require('./locators');
const { ReactAutocomplete } = require('../elements/ReactAutocomplete');


class ReactAutocompletePage extends DemoBasePage {
    constructor() {
        super();                
    }

    get BasicAutocomplete() {
        return new ReactAutocomplete(locators.autocomplete_page_locators.basic_autocomplete)   
    }

    get AdvancedAutocomplete() {
        return new ReactAutocomplete(locators.autocomplete_page_locators.advanced_autocomplete)   
    }
}

exports.ReactAutocompletePage = ReactAutocompletePage;
