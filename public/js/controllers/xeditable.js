'use strict';

angular.module('app')
    .controller('blogCtrl', function($scope, $http) {
        $http.get('/api/blog').then(function(response) {
            $scope.blogs = response.data.blogs;
        }, function(err) {
            console.error(err);
        })
    })

.controller('TextBtnCtrl', function($scope, $http) {
    $scope.title = {
        title: ""
    };
    $scope.body = {
        body: ""
    };

    $scope.updateBlog = function(_id, data) {
        $http.put('/api/blog/' + _id, {
                title: $scope.blog.title,
                body: $scope.blog.body
            })
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error' + data);
            });
    };

    $scope.deleteBlog = function(_id) {
        $scope.blogs.splice(_id, 1);
        $http.delete('/api/blog/' + _id)
            .success(function(data) {
                $scope.blog = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error' + data);
            });
    };
})

.controller('newPostCtrl', function($scope, $http) {
    $scope.title = {
        title: ""
    };
    $scope.date = {
        date: ""
    };
    $scope.author = {
        author: ""
    };
    $scope.body = {
        body: ""
    };
    $scope.newBlog = function() {
      $http.post('/api/blog/')
            .success(function(data) {
                console.log(data);
            })
            .error(function(data) {
                console.log('Error' + data);
            });
    };
  });
