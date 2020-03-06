
/**
 * Takes screenshot of browser and attaches it to allure report as PNG
 * @param {*} name - name of screenshot
 */
function Screenshot(name) {
    browser.takeScreenshot().then(function (png) {
        allure.createAttachment(name, function () {return Buffer.from(png, 'base64')}, 'image/png')();
    });
}

/**
 * Create Allure step with name <stepName> and executes <stepFunc>
 * If <takeSnapshot> is true - takes screenshot AFTER step func is done
 * @param {*} stepName - name of step
 * @param {*} stepFunc - actual step actions
 * @param {*} takeScreenshot - determines wether to take screenshot or not
 * @example
 * Step('Open start page', () => {
 *      browser.get('http://your-app.com');
 *      expect(browser.getTitle()).toEqual('My wonderful app!');
 * }, true);
 */
function Step(stepName, stepFunc, takeScreenshot = false) {
    return allure.createStep(stepName, function(){
        stepFunc();
        if (takeScreenshot) {
            Screenshot(stepName);
        }
    })();  
}

module.exports = { Screenshot, Step }