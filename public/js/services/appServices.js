// public/js/services/NerdService.js
angular.module('app')
.factory('Blog', ['$http', function($http) {

    return {
        // call to get all blogs
        get : function() {
            return $http.get('#/blog');
        },

        // call to POST and create a new blog
        create : function(nerdData) {
            return $http.post('/blog', blogData);
        },

        // call to DELETE a blog
        delete : function(id) {
            return $http.delete('/blog' + id);
        }
    }

}]);
