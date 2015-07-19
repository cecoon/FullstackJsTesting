module.exports = {
    options: {
        strict: true,
        "eqnull": true,
        "eqeqeq": true,
        "undef": false,
        "globals": {
            "jQuery": true
        }
    },
    sources: ["<%= path.src %>/**/*.js"]
};