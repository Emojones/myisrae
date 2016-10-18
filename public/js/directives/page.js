'use strict';

var app = angular.module('app', []);

app.directive('navbar', function(){
  return {
    restrict : 'E',
    templateUrl: '/../../html/navbar.html'
  };
});
