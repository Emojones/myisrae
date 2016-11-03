//treehouse reference NOT ACTUAL CODE
'use strict';

var angular = require('angular');

angular.module('todoListApp')
  .controller('mainCtrl', function ($scope, dataService) {


    dataService.getTodos(function (response) {
      var todos = response.data.todos;
      $scope.todos = todos;
    });

    $scope.addTodo = function () {
      $scope.todos.unshift({
        name: "This is a new todo.",
        completed: false
      });
    };
  })
