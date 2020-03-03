require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');
const { GooglePage } = require("./pages/GooglePage");
const { locators } = require('./pages/locators');


describe('Checkout Google.com', function () {
    
    let driver;    
    
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
    });
    
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Google', async function () {
        
        let google = new GooglePage(driver)

        // Load the page
        await google.open()
        
        // Find the search box by id
        await google.searchBox.click();
        // Enter keywords and click enter
        await google.searchBox.sendKeys('dalenguyen', Key.RETURN);
        
        // Wait for the results box by id
        await driver.wait(until.elementLocated(locators.google_search.results_box), 10000);
        
        // We will get the title value and test it        
        let title = await google.title;
        assert.equal(title, 'dalenguyen - Пошук Google');
    });
    
    // close the browser after running tests
    after(() => driver && driver.quit());
})