const { DemoBasePage } = require("./DemoBasePage");

class ReactDemosPage extends DemoBasePage {
    constructor() {
        super();
        this.url = 'https://www.primefaces.org/primereact/#/';
    }

    open() {
        return this.goto(this.url);
    }
}

exports.ReactDemosPage = ReactDemosPage;
