const { browser } = require('protractor');

class BasePage {
    constructor() {        
    }
    
    get title() {        
        return browser.getTitle()        
    }

    goto(url) {
        browser.get(url);
    }    
}

exports.BasePage = BasePage;
