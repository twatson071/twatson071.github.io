'use strict';

/**
 * @ngdoc function
 * @name twatson071githubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twatson071githubioApp
 */
angular.module('twatson071githubioApp')
  .controller('ProjectsCtrl',['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    }]);

