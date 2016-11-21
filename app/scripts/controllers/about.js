'use strict';

/**
 * @ngdoc function
 * @name twatson071githubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the twatson071githubioApp
 */
angular.module('twatson071githubioApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
$('.collapse').on('shown.bs.collapse', function(){
  $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function(){
  $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});
