'use strict';

angular.module('app', [])
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
});
