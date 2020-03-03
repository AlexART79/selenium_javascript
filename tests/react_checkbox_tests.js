require('chromedriver');
const assert = require('assert');
const { Builder, Key, By, until } = require('selenium-webdriver');
const { ReactCheckboxPage } = require("../pages/ReactCheckboxPage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { locators } = require('../pages/locators');


describe('Checkbox tests', function () {
    
    let driver;    
    
    before(async function () {
        driver = await new Builder().forBrowser('chrome').build();
        startPage = new ReactDemosPage(driver)
        
        await startPage.open()
        await startPage.SideMenu.goto("Checkbox")
    });
    
    // Next, we will write steps for our test. 
    // For the element ID, you can find it by open the browser inspect feature.
    it('Search on Google', async function () {
        
        let cbPage = new ReactCheckboxPage(driver)

        firstCb = await cbPage.FirstCheckbox

        await firstCb.click()
        
        let selected = await firstCb.isSelected()
        assert.ok(selected)
    });
    
    // close the browser after running tests
    after(() => driver && driver.quit());
})