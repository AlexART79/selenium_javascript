exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/react_autocomplete_tests.js'],
      // multiCapabilities: [
      // {
      //   browserName: 'firefox'
      // }, 
      capabilities: {
        browserName: 'chrome'
      },
      // }],

    onPrepare: function() {
      browser.ignoreSynchronization = true; // - to test non-protractor pages
    },
  }