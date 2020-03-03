const { BasePage } = require("./BasePage");
const { locators } = require('./locators');

class GooglePage extends BasePage {
    constructor(driver) {
        super(driver);                
        this.url = 'https://google.com';
    }

    get searchBox() {
        return this.driver.findElement(locators.google_search.search_box)         
    }

    get results() {
        return this.driver.findElement(locators.google_search.results_box)
    }

    open() {
        return this.goto(this.url);
    }
}

exports.GooglePage = GooglePage;
