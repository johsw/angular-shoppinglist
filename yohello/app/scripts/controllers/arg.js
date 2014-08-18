'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('ArgCtrl', function ($scope, $routeParams) {
      $scope.productIdentification = $routeParams.productId;
  });
