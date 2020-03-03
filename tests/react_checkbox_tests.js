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
        
    it('Basic checkbox test', async function () {
        
        let cbPage = new ReactCheckboxPage(driver)
        firstCb = await cbPage.FirstCheckbox

        await firstCb.click()
        
        let selected = await firstCb.checked
        assert.ok(selected)
    });
    
    // close the browser after running tests
    after(() => driver && driver.quit());
})