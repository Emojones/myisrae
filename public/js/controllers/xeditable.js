'use strict';

angular.module('app')
.controller('TextBtnCtrl', function($scope, $http) {
  $scope.title = {title: ""};
  $scope.body = {body: ""};

  $scope.updateBlog = function(data) {
   return $http.post('/api/blog');
 };
});
