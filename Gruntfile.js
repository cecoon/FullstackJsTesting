module.exports = function(grunt) {
    var options = {
        path: {
            src: "app",
            dist: "dist",
            specs: "specs",
            tmp: "tmp",
            bower: "bower_components"
        }
    };

    require('load-grunt-config')(grunt, {data: options});

    grunt.registerTask('test', ["karma:dev"]);
    grunt.registerTask('compileLess', ['concat:lessToTmp', 'less:main']);
    grunt.registerTask('copyFiles', ['concat:bowerJSDeps', 'concat:bowerCSSDeps', 'sync']);
    grunt.registerTask('build_dev', ['jshint', 'clean', 'copyFiles',
        'compileLess', 'htmlbuild', 'clean:tmp', "test"]);

    grunt.registerTask('dev', ['build_dev', 'watch']);
};