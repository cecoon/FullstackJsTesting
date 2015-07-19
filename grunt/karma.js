module.exports = {
    dev: {
        options: {
            frameworks: ['jasmine'],
            reporters: ['progress'],
            port: 9878,
            colors: true,
            logLevel: 'INFO',
           // browsers: ['Firefox'],
           // browsers: ['Chrome'],
            browsers: ['PhantomJS'],
            singleRun: true,
            captureConsole: false,
            files: [
                //deps
                '<%= path.dist %>/scripts/vendor.js',
                '<%= path.bower %>/angular-mocks/angular-mocks.js',

                //app with respect to loading main first
                '<%= path.dist %>/scripts/main.js',
                '<%= path.dist %>/**/*.js',

                //tests
                'specs/**/*.js'
            ]
        }
    }
};