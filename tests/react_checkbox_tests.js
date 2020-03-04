const { ReactCheckboxPage } = require("../pages/ReactCheckboxPage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");


describe('Checkbox tests', function () {
    // init browser
    beforeEach(async function () {        
        browser.maximize();    

        startPage = new ReactDemosPage(driver);            
        startPage.open();
        startPage.SideMenu.goto("Checkbox");
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