const { ReactAutocompletePage } = require("../pages/ReactAutocompletePage");
const { ReactDemosPage } = require("../pages/ReactDemosPage");
const { browser, by, element, ExpectedConditions } = require('protractor');



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
        let acPage = new ReactAutocompletePage();
        let ac = acPage.BasicAutocomplete;

        expect(ac.isVisible).toBe(true);
        expect(ac.isCollapsed).toBe(true);        

        ac.value = 'Uni';
        expect(ac.isExpanded).toBe(true);        

        ac.select('United States');
        expect(ac.isCollapsed).toBe(true);        
        expect(ac.value).toBe('United States');
    });

    // check andanced ac
    it(`Advanced autocomplete test`, async function () {                
        let acPage = new ReactAutocompletePage();
        let ac = acPage.AdvancedAutocomplete;

        expect(ac.isVisible).toBe(true);
        
        ac.expand();
        expect(ac.isExpanded).toBe(true);        

        ac.collapse()
        expect(ac.isCollapsed).toBe(true);      
        
        ac.expand();
        ac.select('Audi');
        
        expect(ac.isCollapsed).toBe(true);      
        expect(ac.value).toBe('Audi');      
    });

    //afterAll(() => browser.close());
})