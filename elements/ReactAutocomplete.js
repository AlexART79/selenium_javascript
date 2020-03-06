const { Element } = require("./Element");
const { Key, browser, by, ExpectedConditions } = require('protractor')


class ReactAutocomplete extends Element {
    constructor(locator) {
        super(locator);  
        
        this.list_locator = by.xpath(this.locator.value + "/descendant-or-self::ul[contains(@class, 'p-autocomplete-list')]");                     
    }
   
    get _input() {
        let input_locator = by.xpath('./input');
        return this.element.then(elem => {            
            return elem.element(input_locator);            
        }, (err) => console.log(err));    
    }

    get _list() {        
        return browser.wait(ExpectedConditions.visibilityOf(element(this.list_locator)), 10000).then(val => {
                if (val) {
                    return element(this.list_locator);
                }
                else {
                    return null;
                }
            }, 
            (err) => { 
                console.log(`ERROR!!! ${err}`); 
            });
    }

    get _dropdown() {        
        let btn_locator = by.xpath("./button");
        return this.element.then(elem => {            
            return elem.element(btn_locator);            
        }, (err) => console.log(err));
    }

    get value() {        
        return this._input.then(input => {
            return input.getAttribute('value');
        }, (err) => console.log(err));
    }

    set value(val){
        return this._input.then((input) => {
            return input.sendKeys(val);
        }, (err) => console.log(err));
    }

    get isExpanded() {
        return browser.wait(ExpectedConditions.visibilityOf(element(this.list_locator)), 10000).then(val => {
            return val;
        },
        () => {
            return false;
        });
    }

    get isCollapsed() {
        return browser.wait(ExpectedConditions.invisibilityOf(element(this.list_locator)), 10000).then(val => {
            return val;
        },
        () => {
            return true;
        });
    }

    get isEnabled() {
        return this._input.then(input => {
            return input.isEnabled();
        }, (err) => console.log(err));
    }

    expand() {        
        return this._dropdown.then((dd) => {
            return dd.click().then(() => {
                return (async () => {
                        await browser.sleep(1000)
                    })().then(() => {
                        return dd.click();
                    });
            });
        });
    }

    collapse (){
        return this._input.then(e => {
            return e.sendKeys(Key.ESCAPE).then(
                () => {
                    return (async () => {
                        await browser.sleep(500)                        
                    })();
                }
            );
        })
    }

    select(val) {
        let item_locator = by.xpath(`${this.list_locator.value}/li[. = '${val}']`);
        return browser.wait(ExpectedConditions.presenceOf(element(item_locator)), 10000).then(
            (isPresent) => {
                if (isPresent)
                    return element(item_locator).click();                
                else 
                    return null;                
            });
    }
}


exports.ReactAutocomplete = ReactAutocomplete