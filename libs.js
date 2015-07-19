module.exports = function (bowerPath){
    return {
        js: [
            "" + bowerPath + "/angular/angular.js",
            "" + bowerPath + "/angular-route/angular-route.js",
            "" + bowerPath + "/localforage/dist/localforage.js",
            "" + bowerPath + "/angular-localforage/dist/angular-localForage.js",
            "" + bowerPath + "/angular-bootstrap/ui-bootstrap.js",
            "" + bowerPath + "/angular-bootstrap/ui-bootstrap-tpls.js",
            "" + bowerPath + "/lodash/lodash.min.js"
        ],
        css: [
            "" + bowerPath + "/bootstrap-css-only/css/bootstrap.min.css"
        ],

        fonts:[
            "" + bowerPath + "/bootstrap-css-only/fonts/glyphicons-halflings-regular.svg"
        ]
    };
};