const { ReactAutocompletePage } = require("../pages/ReactAutocompletePage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { browser } = require('protractor');

const { Step } = require('../utils/test_tools')


describe('Autocomplete tests', function () {
    
    let startPage;

    // init browser
    beforeEach(function () {
        browser.manage().window().maximize();

        startPage = new ReactDemosPage();
        startPage.open();

        expect(startPage.title).toEqual('PrimeReact');
    });
 
    
    // autocomplete test params
    let BasicSutocompleteCases = [
        { text: 'Uni', value: 'United States'},
        { text: 'Uni', value: 'United Kingdom'},
        { text: 'Uk', value: 'Ukraine'}
    ];

    // check basic autocomplete
    BasicSutocompleteCases.forEach(({text, value}) => {
        it(`Basic autocomplete test: [${text}, ${value}]`, async function () {        
            allure.feature('Autocomplete');
            allure.story('Basic');
    
            Step('Open Autocomplete page', () => {
                startPage.SideMenu.goto("AutoComplete");
            });
            
            let acPage = new ReactAutocompletePage();
            let ac = acPage.BasicAutocomplete;
    
            Step('Check initial state', () => {
                expect(ac.isVisible).toBe(true);
                expect(ac.isCollapsed).toBe(true);        
            });
            
            Step(`Type text '${text}'`, function(){
                ac.value = text;
                expect(ac.isExpanded).toBe(true);        
            });
            
            Step(`Select value '${value}'`, function(){
                ac.select(value);
            });
            
            Step('Check changed state', function(){
                expect(ac.isCollapsed).toBe(true);        
                expect(ac.value).toBe(value);
            });
        });
    });


    // check andanced ac
    it(`Advanced autocomplete test`, function () {         
        allure.feature('Autocomplete');
        allure.story('Advanced');
       
        Step('Open Autocomplete page', function(){
            startPage.SideMenu.goto("AutoComplete");
        });        

        let acPage = new ReactAutocompletePage();
        let ac = acPage.AdvancedAutocomplete;

        Step('Check initial state', function(){
            expect(ac.isVisible).toBe(true);
        });        
        
        Step('Expand autocomplete', function(){
            ac.expand();            
        });        

        Step('Check is it expanded', function(){
            expect(ac.isExpanded).toBe(true);        
        });        

        Step('Collapse autocomplete', function(){
            ac.collapse();
        });        

        Step('Check is it collapsed', function(){
            expect(ac.isCollapsed).toBe(true);      
        });        
        
        Step('Expand autocomplete again', function(){
            ac.expand();
        });        

        let expValue = 'Audi'
        Step(`Select value '${expValue}'`, function(){
            ac.select(expValue);
        });        

        Step('Check autocomplete state and value', function(){
            expect(ac.isCollapsed).toBe(true);      
            expect(ac.value).toBe('Audi');      
        });        
    });

    // afterEach(() => {
    //     let passed = jasmine.getEnv().currentSpec.results().passed();
    //     if (!passed) {
    //         Screenshot('Screenshot on fail');
    //     }
    // });
})