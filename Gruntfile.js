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

    grunt.registerTask('dev', ['jshint', 'watch']);
};