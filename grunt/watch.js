module.exports = {
    js: {
        files: "<%= path.src %>/**/*.js",
        tasks: ["build_dev"]
    },
    styles: {
        files: "<%= path.src %>/**/*.less",
        tasks: ["build_dev"]
    },
    bower: {
        files: "bower.json",
        tasks: ["build_dev", "test"]
    },

    tests: {
        files: "<%= path.specs %>/**/*.js",
        tasks: ["test"]
    },

    html: {
        files: "<%= path.src %>/**/*.html",
        tasks: ["build_dev"]
    },

    lib: {
        files: "libs.js",
        tasks: ["copyFiles", "build_dev"]
    },

    config: {
        files: ["Gruntfile.js", "grunt/*.js"],
        tasks: ["build_dev"]
    },

    options: {
        livereload: true
    }
};