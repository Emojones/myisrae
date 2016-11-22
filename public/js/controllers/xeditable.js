'use strict';

/**
 * NOTE: you will want to clean up all these console.logs for production
 */

angular.module('app')
    .controller('blogCtrl', function($scope, $http) {
        $http.get('/api/blog').then(function(response) {
            $scope.blogs = response.data.blogs;
        }, function(err) {
            console.error(err);
        });
        $scope.toggle =function(){
          $scope.showNewBlog = false;
        console.log($scope)
        };
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
        $http.delete('/api/blog/' + _id)
            .success(function(data) {
                $scope.blog = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error' + data);
            });
            $scope.blogs.splice(_id, 1);
    };
})

.controller('newPostCtrl', function($scope, $http) {
    $scope.newBlog = function() {
        // TODO: can you make the Blog Date default to "now"?
        
        /**
         * The ambiguous nature of the date field can be confusing. What exactly 
         *  are you looking for there? MM/DD/YYYY? YYYY-MM-DD HH:MM:SS?
         * 
         * You might look into a datepicker (there are some Bootstrap plugins
         * that work pretty well) instead of a simple text field if you want
         *  to put this into production at some point.
         */
        $http.post('/api/blog/', $scope.blog)
            .then(function(data) {
                $scope.blog = data.data;
                $scope.blogs.unshift(data.data);
                console.log(data.data);
            })
    };
    $scope.reset = function() {
         $scope.user = angular.copy($scope.master);
       };

       $scope.reset();
});
