const { ReactCheckboxPage } = require("../pages/ReactCheckboxPage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { browser } = require('protractor');

const { Step } = require('../utils/test_tools')

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

        Step('Check initial checkbox state', function(){
            expect(checkBox.checked).toBe(false);
        });        

        Step('Toggle checkbox by mouse click', function(){
            checkBox.click();
        });

        Step('Check is it\'s state changed', function(){
            expect(checkBox.checked).toBe(true);
        });        
    });

    // check andanced checkbox
    it(`Advanced checkbox test`, function () {   
        allure.feature('Checkbox');
        allure.story('Advanced');

        let cbPage = new ReactCheckboxPage();
        let checkBox = cbPage.SecondCheckbox;
        
        Step('Check initial checkbox state', function(){
            expect(checkBox.isVisible).toBe(true);            
            expect(checkBox.isEnabled).toBe(true);            
            expect(checkBox.checked).toBe(false);  
        });                  

        Step('Check checkbox label', function(){
            expect(checkBox.label).toEqual('New York')
        });        
        
        Step('Set checkbox state to "true"', function(){
            checkBox.checked = true;        
        });        

        Step('Check checkbox state', function(){
            expect(checkBox.checked).toBe(true);
        });        

        Step('Set checkbox state to "false"', function(){
            checkBox.checked = false;        
        });
        
        Step('Check checkbox state', function(){
            expect(checkBox.checked).toBe(false);
        });        
    });

    // afterEach(() => {        
    //     let passed = jasmine.getEnv().currentSpec.results().passed();
    //     if (!passed) {
    //         Screenshot('Screenshot on fail');
    //     }
    // });
})