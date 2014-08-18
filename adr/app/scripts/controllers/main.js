'use strict';

/**
 * @ngdoc function
 * @name adrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adrApp
 */
angular.module('adrApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
