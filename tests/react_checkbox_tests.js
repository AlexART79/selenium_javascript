// const { ReactCheckboxPage } = require("../pages/ReactCheckboxPage");
// const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { browser, by, element, ExpectedConditions } = require('protractor');
const { DemoBasePage } = require("../pages/DemoBasePage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");

describe('Checkbox tests', function () {
    // init browser
    beforeEach(function () {        
        browser.manage().window().maximize()

        let startPage = new ReactDemosPage(); 
        startPage.open();

        expect(startPage.title).toEqual('PrimeReact')

        startPage.SideMenu.goto("Checkbox");
    });
        
    // check basic checkbox
    it(`Basic checkbox test`, function () {        
        
        
        // let cbPage = new ReactCheckboxPage();
        // let checkBox = cbPage.FirstCheckbox;
        
        // expect(checkBox.checked).toBe(false);

        // await checkBox.click();
        
        // expect(await checkBox.checked).toBe(true);
    });
    
    // check andanced checkbox
    // it(`Advanced checkbox test`, async function () {        
    //     let cbPage = new ReactCheckboxPage(driver);
    //     let checkBox = cbPage.SecondCheckbox;
        
    //     expect(await checkBox.checked).toBe(false);
            
    //     expect(await checkBox.label).toEqual('New York')
        
    //     if (!await checkBox.checked)
    //         await checkBox.click();
        
    //     expect(await checkBox.checked).toBe(true);

    //     if (await checkBox.checked)
    //         await checkBox.click();
        
    //     expect(await checkBox.checked).toBe(false);
    // });
    
    afterEach(() => browser.quit());

})