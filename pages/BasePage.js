class BasePage {
    constructor(driver) {
        this.driver = driver;        
    }
    
    get title() {        
        return this.driver.getTitle()        
    }

    goto(url) {
        return this.driver.get(url);
    }    
}

exports.BasePage = BasePage;
