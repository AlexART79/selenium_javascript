const { ReactAutocompletePage } = require("../pages/ReactAutocompletePage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { browser } = require('protractor');


describe('Autocomplete tests', function () {
    // init browser
    beforeEach(function () {
        browser.manage().window().maximize();

        let startPage = new ReactDemosPage();
        startPage.open();

        expect(startPage.title).toEqual('PrimeReact');

        let menu = startPage.SideMenu;
        expect(menu).not.toBeNull();

        menu.goto("AutoComplete");
    });
 
    // check basic ac
    it(`Basic autocomplete test`, async function () {
        allure.feature('Autocomplete');
        allure.story('Basic');

        let acPage = new ReactAutocompletePage();
        let ac = acPage.BasicAutocomplete;

        allure.createStep('Check initial state', function(){
            expect(ac.isVisible).toBe(true);
            expect(ac.isCollapsed).toBe(true);        
        })();
        
        allure.createStep('Type test', function(){
            ac.value = 'Uni';
            expect(ac.isExpanded).toBe(true);        
        })();
        
        allure.createStep('Select value', function(){
            ac.select('United States');
        })();
        
        allure.createStep('Check changed state', function(){
            expect(ac.isCollapsed).toBe(true);        
            expect(ac.value).toBe('United States');
        })();
    });

    // check andanced ac
    it(`Advanced autocomplete test`, function () {         
        allure.feature('Autocomplete');
        allure.story('Advanced');
       
        let acPage = new ReactAutocompletePage();
        let ac = acPage.AdvancedAutocomplete;

        allure.createStep('Check initial state', function(){
            expect(ac.isVisible).toBe(true);
        });        
        
        allure.createStep('Expand autocomplete', function(){
            ac.expand();
        });        

        allure.createStep('Check is it expanded', function(){
            expect(ac.isExpanded).toBe(true);        
        });        

        allure.createStep('Collapse autocomplete', function(){
            ac.collapse();
        });        

        allure.createStep('Check is it collapsed', function(){
            expect(ac.isCollapsed).toBe(true);      
        });        
        
        allure.createStep('Expand autocomplete again', function(){
            ac.expand();
        });        

        let expValue = 'Audi'
        allure.createStep(`Select value '${expValue}'`, function(){
            ac.select(expValue);
        });        

        allure.createStep('Check autocomplete state and value', function(){
            expect(ac.isCollapsed).toBe(true);      
            expect(ac.value).toBe('Audi');      
        });        
    });

    afterEach(() => {
        browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Final app state', function () {return Buffer.from(png, 'base64')}, 'image/png')();
        });
    });
})