import { DemoBasePage } from "./DemoBasePage"

// const { DemoBasePage } = require("./DemoBasePage");

class ReactDemosPage extends DemoBasePage {
    constructor() {
        this.url = 'https://www.primefaces.org/primereact/#/';
    }

    open() {
        return this.goto(this.url);
    }
}

exports.ReactDemosPage = ReactDemosPage;
