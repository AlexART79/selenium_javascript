const { ReactCheckboxPage } = require("../pages/ReactCheckboxPage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { browser, by, element, ExpectedConditions } = require('protractor');


describe('Checkbox tests', function () {
    // init browser
    beforeEach(function () {
        browser.manage().window().maximize();

        let startPage = new ReactDemosPage();
        startPage.open();

        expect(startPage.title).toEqual('PrimeReact');

        let menu = startPage.SideMenu;
        expect(menu).not.toBeNull();

        menu.goto("Checkbox");
    });
 
    // check basic checkbox
    it(`Basic checkbox test`, function () {
        let cbPage = new ReactCheckboxPage();
        let checkBox = cbPage.FirstCheckbox;

        expect(checkBox.checked).toBe(false);

        checkBox.click();

        expect(checkBox.checked).toBe(true);
    });

    // check andanced checkbox
    it(`Advanced checkbox test`, function () {        
        let cbPage = new ReactCheckboxPage();
        let checkBox = cbPage.SecondCheckbox;
        
        expect(checkBox.isVisible).toBe(true);            
        expect(checkBox.isEnabled).toBe(true);            

        expect(checkBox.checked).toBe(false);            
        expect(checkBox.label).toEqual('New York')
        
        checkBox.checked = true;        
        expect(checkBox.checked).toBe(true);

        checkBox.checked = false;        
        expect(checkBox.checked).toBe(false);
    });

    //afterAll(() => browser.close());

})