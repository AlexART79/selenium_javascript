const { Element } = require("./Element");
const { by } = require('protractor')


class ReactCheckbox extends Element {
    constructor(locator) {
        super(locator);       
    }

    get _input(){
        let cb_locator = by.xpath('..//input');
        return this.element.then(elem => {            
            return elem.element(cb_locator);            
        }, (err) => console.log(err));    
    }

    get checked() {        
        return this._input.then(input => {
            return input.isSelected();
        }, (err) => console.log(err));
    }

    set checked(value){
        return this.checked.then((ch) => {
            if (value !== ch)
                return this.click().then(() => {}, 
                    (err)=>{ console.log(err); });
        });
    }

    get isEnabled() {
        return this._input.then(input => {
            return input.isEnabled();
        }, (err) => console.log(err));
    }

    get label() {
        let label_locator = by.xpath(this.locator.value + '/../following-sibling::label')                    
        
        return this.element.then(elem => {            
            return elem.element(label_locator).getText();
        }, (err) => console.log(err));
    }
}

exports.ReactCheckbox = ReactCheckbox