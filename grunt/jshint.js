module.exports = {
    options: {
        "strict": true,
        "maxdepth": 3,
        "eqeqeq": true,
        "undef": false,
        "globals": {
            "jQuery": true
        }
    },
    sources: ["<%= path.src %>/**/*.js"]
};