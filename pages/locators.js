const { By } = require('selenium-webdriver');

// locators used in tests
exports.locators = {
    // google search (main) page
    google_search : {        
        search_box: By.name('q'),        
        results_box: By.id('rcnt')
    }    
};