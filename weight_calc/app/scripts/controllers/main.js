'use strict';

/**
 * @ngdoc function
 * @name weightCalculatorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the weightCalculatorApp
 */
angular.module('weightCalculatorApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

/**
 * @ngdoc function
 * name WeightControl.controller:WeightCtrl
 * @description
 * # Weightctrl
 * Controller to do the weight calculations
 */
angular.module('weightCalculatorApp')
  .controller('weightCtrl', function($scope) {

$scope.formModel = {};
});
