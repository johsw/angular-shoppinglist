'use strict';

/**
 * @ngdoc function
 * @name helloApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloApp
 */
angular.module('helloApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.recievers = [
      {mail: 'johsw@information.dk', name: 'Johs. (arbejde)'},
      {mail: 'mail@johsw.dk', name: 'Johs. (privat)'}
    ];
    $scope.user = {
      email: '',
      name: '',
    }
    $scope.response = "Rockin'";
  })
  .directive('jwContactForm', function() {
    return {
      templateUrl: 'views/contact-form.html',
    };
  })
  .directive('jwEmail', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (viewValue.indexOf('.dk') > 0) {
            ctrl.$setValidity('dkMail', true);
            return viewValue; //parseFloat(viewValue.replace(',', '.'));
          } else {
            ctrl.$setValidity('dkMail', false);
            return viewValue;
          }
        });
      }
    };
  })
  .directive('jwName', function() {
    return {
      require: 'ngModel',
      link: function(scope, elm, attrs, ctrl) {
        ctrl.$parsers.unshift(function(viewValue) {
          if (NAME_REGEXP.test(viewValue)) {
            ctrl.$setValidity('jwName', true);
            return viewValue;
          } else {
            ctrl.$setValidity('jwName', false);
            return viewValue;
          }
        });
      }
    };
  });
