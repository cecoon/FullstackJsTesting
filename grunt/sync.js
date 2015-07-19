module.exports = function () {
    return {
        "main": {
            "files": [
                {
                    "cwd": "<%= path.src %>",
                    "src": [
                        "**",
                        "!**/*.less",
                        "!styles",
                        "!index.html"
                    ],
                    "dest": "<%= path.dist %>"
                }
            ]
        }
    };

};