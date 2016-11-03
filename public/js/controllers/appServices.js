'use strict';
angular.module('app')
    .controller('blogCtrl', function($scope, $http) {
        $http.get('/api/blog').then(function(response) {
            $scope.blogs = response.data.blogs;
        }, function(err) {
            console.error(err);
        })

        $scope.deleteBlog=function(index){
//for loop to iteratie through ids, then delete when matched
          $scope.blogs.splice(index, 1);
          //http after splice
        }
    });


    // from treehouse for reference
    // .controller('todoCtrl', function ($scope, dataService) {
    //     $scope.deleteTodo = function (todo, index) {
    //       $scope.todos.splice(index, 1);
    //       dataService.deleteTodo(todo);
    //     };
