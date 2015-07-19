var app = angular.module('app', [
    'ngRoute',
    'ui.bootstrap',
    'LocalForageModule'
]);

//routes
app.config(function($routeProvider) {
    "use strict";
    $routeProvider
        .when('/start', {
            templateUrl: '/views/screens/login.html',
            controller: 'login'
        })
        .when('/life', {
            templateUrl: '/views/screens/life.html',
            controller: 'life'
        })
        .otherwise({
            redirectTo: "/start"
        });
});

