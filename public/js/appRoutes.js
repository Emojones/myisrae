angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: '../index.html',
        })

        .when('/about', {
            templateUrl: '../html/about.html',
              });

    $locationProvider.html5Mode(true);

}]);
