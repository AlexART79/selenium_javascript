const { ReactCheckboxPage } = require("../pages/ReactCheckboxPage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { browser } = require('protractor');


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
        allure.feature('Checkbox');
        allure.story('Basic');

        let cbPage = new ReactCheckboxPage();
        let checkBox = cbPage.FirstCheckbox;

        allure.createStep('Check initial checkbox state', function(){
            expect(checkBox.checked).toBe(false);
        });        

        allure.createStep('Toggle checkbox by mouse click', function(){
            checkBox.click();
        });        

        allure.createStep('Check is it\'s state changed', function(){
            expect(checkBox.checked).toBe(true);
        });        
    });

    // check andanced checkbox
    it(`Advanced checkbox test`, function () {   
        allure.feature('Checkbox');
        allure.story('Advanced');

        let cbPage = new ReactCheckboxPage();
        let checkBox = cbPage.SecondCheckbox;
        
        allure.createStep('Check initial checkbox state', function(){
            expect(checkBox.isVisible).toBe(true);            
            expect(checkBox.isEnabled).toBe(true);            
            expect(checkBox.checked).toBe(false);  
        });                  

        allure.createStep('Check checkbox label', function(){
            expect(checkBox.label).toEqual('New York')
        });        
        
        allure.createStep('Set checkbox state to "true"', function(){
            checkBox.checked = true;        
        });        

        allure.createStep('Check checkbox state', function(){
            expect(checkBox.checked).toBe(true);
        });        

        allure.createStep('Set checkbox state to "false"', function(){
            checkBox.checked = false;        
        });
        
        allure.createStep('Check checkbox state', function(){
            expect(checkBox.checked).toBe(false);
        });        
    });

    afterEach(() => {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Final app state', function () {return Buffer.from(png, 'base64')}, 'image/png')();
        });
    });
})