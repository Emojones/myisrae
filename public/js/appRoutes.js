'use strict'
angular.module('app', ['ngRoute']).config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'html/home.html'
        })

    .when('/about', {
        templateUrl: 'html/about.html'
    })

    .when('/projects', {
        templateUrl: 'html/projects.html'
    })

    .when('/blog', {
        templateUrl: 'html/blog.html'
    })

    .otherwise({
        redirectTo: '/'
    });

}]);
