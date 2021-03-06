exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*'],
      
    capabilties: {
      browserName: 'chrome'
    },     

    onPrepare: function() {
      // to test non-protractor pages
      browser.ignoreSynchronization = true;

      // allure reporter
      let AllureReporter = require('jasmine-allure-reporter');      
      jasmine.getEnv().addReporter(new AllureReporter({ resultsDir: 'allure-results' }));            
    },
  }