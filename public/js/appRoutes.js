'use strict'
angular.module('app', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html'
        })

    .when('/about', {
        templateUrl: 'html/about.html'
    })

    .when('/media', {
        templateUrl: 'html/media.html'
    })

    .when('/blog', {
        templateUrl: 'html/blog.html'
    })

    .when('/tours', {
        templateUrl: 'html/tours.html'
    })

    .otherwise({
        redirectTo: '/'
    });

}]);