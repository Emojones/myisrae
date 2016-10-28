'use strict';
angular.module('app')
.controller('blogCtrl', function($scope, $http){
  $http.get('/api/blog').then(function(response){
    $scope.blogs = response.data;
  }, function(err){
    console.error(err);
  });
})






;
