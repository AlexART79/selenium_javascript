require('chromedriver');
const expect = require('expect')
const { Browser, Builder, Key, By, until } = require('selenium-webdriver');
const { ReactCheckboxPage } = require("../pages/ReactCheckboxPage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");


describe('Checkbox tests', function () {

    let driver;    

    // init browser
    beforeEach(async function () {
        driver = await new Builder().forBrowser(Browser.FIREFOX).build();            
        await driver.manage().window().maximize();    

        startPage = new ReactDemosPage(driver);            
        await startPage.open();
        await startPage.SideMenu.goto("Checkbox");
    });
        
    // check basic checkbox
    it(`Basic checkbox test`, async function () {        
        
        let cbPage = new ReactCheckboxPage(driver);
        let checkBox = cbPage.FirstCheckbox;
        
        expect(await checkBox.checked).toBe(false);

        await checkBox.click();
        
        expect(await checkBox.checked).toBe(true);
    });
    
    // check andanced checkbox
    it(`Advanced checkbox test`, async function () {        
        let cbPage = new ReactCheckboxPage(driver);
        let checkBox = cbPage.SecondCheckbox;
        
        expect(await checkBox.checked).toBe(false);
            
        expect(await checkBox.label).toEqual('New York')
        
        if (!await checkBox.checked)
            await checkBox.click();
        
        expect(await checkBox.checked).toBe(true);

        if (await checkBox.checked)
            await checkBox.click();
        
        expect(await checkBox.checked).toBe(false);
    });
    
    afterEach(() => driver && driver.quit());

})