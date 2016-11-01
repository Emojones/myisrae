'use strict';
angular.module('app')
    .controller('blogCtrl', function($scope, $http) {
        $http.get('/api/blog').then(function(response) {
            $scope.blogs = response.data.blogs;
        }, function(err) {
            console.error(err);
        })

        $scope.deleteBlog=function(blog){
//for loop to iteratie through ids, then delete when matched
          $scope.blogs.splice(blog, 1);
          //http after splice
        }
    });
