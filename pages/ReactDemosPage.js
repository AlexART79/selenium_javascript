const { DemoBasePage } = require("./DemoBasePage");

class ReactDemosPage extends DemoBasePage {
    constructor(driver) {
        super(driver);                
    }

    open() {
        return this.goto('https://www.primefaces.org/primereact/#/')
    }
}

exports.ReactDemosPage = ReactDemosPage;
