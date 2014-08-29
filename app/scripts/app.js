'use strict';

/**
 * @ngdoc overview
 * @name shoppinglistApp
 * @description
 * # shoppinglistApp
 *
 * Main module of the application.
 */
angular
  .module('shoppinglistApp', [
    //'ngAnimate',
    //'ngCookies',
    //'ngResource',
    'ngRoute',
    //'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/:listid', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/add', {
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/add'
      });
  });
