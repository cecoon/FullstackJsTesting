module.exports = function(){
    var libs = require('../libs')("<%= path.bower %>");
    return {
        "lessToTmp": {
            "src": "<%= path.src %>/styles/*.less",
            "dest": "<%= path.tmp %>/main.less"
        },
        "bowerJSDeps": {
            "src": libs.js,
            "dest": "<%= path.dist %>/scripts/vendor.js"
        },
        "bowerCSSDeps": {
            "src": libs.css || [],
            "dest": "<%= path.dist %>/css/vendor.css"
        }
    }
};