'use strict';
angular.module('app')
    .controller('blogCtrl', function($scope, $http) {
        $http.get('/api/blog').then(function(response) {
            $scope.blogs = response.data.blogs;
        }, function(err) {
            console.error(err);
        })

        $scope.deleteBlog=function(_id){
          $scope.blogs.splice(_id, 1);
          $http.delete('/api/blog/'+ _id)
          .success(function(data){
            $scope.blog=data;
            console.log(data);
          })
          .error(function(data){
            console.log('Error'+data);
          });
        };
    });


    // from treehouse for reference
    // .controller('todoCtrl', function ($scope, dataService) {
    //     $scope.deleteTodo = function (todo, index) {
    //       $scope.todos.splice(index, 1);
    //       dataService.deleteTodo(todo);
    //     };
