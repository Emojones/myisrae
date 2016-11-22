'use strict';

angular.module('app')
 .directive('navbarDirective', function(){
  return {
    restrict : 'E',
    templateUrl: '/../../html/navbar.html'
  };
})

.directive('footerDirective', function(){
  return {
    restrict : 'E',
    templateUrl: '/../../html/footer.html'
  };
})

//Uses angular to set the class to active on the current page
.controller('navbarCtrl', ['$scope', '$location', function navbarCtrl($scope, $location){
  $scope.isActive = function (viewLocation) {
    return viewLocation === $location.path();
  };
}]);

