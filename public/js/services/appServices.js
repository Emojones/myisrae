'use strict';
angular.module('app')
.controller('blogCtrl', function($scope, $http){
  $http.get('/api/blog').then(function(response){
    $scope.mybody = response.data;
  });
});
