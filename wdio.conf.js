exports.config = {
    

    specs: [
        'selenium/*_spec.js'
    ],
    // Patterns to exclude.
    exclude: [
        // 'path/to/excluded/files'
    ],

    capabilities: [{
        browserName: 'firefox'
    }],

    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost:9001',
    waitforTimeout: 10000,
    framework: 'jasmine',
    reporter: 'dot',

    jasmineNodeOpts: {
        defaultTimeoutInterval: 9999999
    },

    /**
     * hooks
     */
    onPrepare: function() {
        console.log('let\'s go');
    },
    onComplete: function() {
        console.log('that\'s it');
    },
    //
    // Gets executed before test execution begins. At this point you will have access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function() {
        // do something
    },
    //
    // Gets executed after all tests are done. You still have access to all global variables from
    // the test.
    after: function() {
        // do something
    },

};