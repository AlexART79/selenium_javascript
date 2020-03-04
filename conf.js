exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/*'],
    multiCapabilities: [{
      browserName: 'firefox'
    }, {
      browserName: 'chrome'
    }],

    onPrepare: function() {
      browser.ignoreSynchronization = true; // - to test non-protractor pages
    },
  }