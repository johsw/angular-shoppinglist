'use strict';

/**
 * @ngdoc function
 * @name adrApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the adrApp
 */
angular.module('adrApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
