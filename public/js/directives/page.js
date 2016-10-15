'use strict';

var angular = require('angular');
var app = angular();
app.directive('navbar', function(){
  return {
    restrict : 'E',
    templateUrl: './public/html/navbar.html'
  };
});
