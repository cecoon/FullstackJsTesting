module.exports = {
    js: {
        files: "<%= path.src %>/**/*.js",
        tasks: ["jshint"]
    },
    config: {
        files: ["Gruntfile.js", "grunt/*.js"],
        tasks: ["dev"]
    }
};