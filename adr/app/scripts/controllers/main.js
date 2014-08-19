'use strict';

/**
 * @ngdoc function
 * @name adrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the adrApp
 */
angular.module('adrApp')
  .controller('MainCtrl', ['$scope', 'infAddressTypeahead', function ($scope, infAddressTypeahead) {
    $scope.showSuggestions = false;
    $scope.addressFocus = false;
    $scope.suggestions = ['qwerqwer', 'weidekampsgade'];
    $scope.selectTypeahead = function($event) {
      console.log($event);
      $scope.showSuggestions = false;
      $scope.addressFocus = true;
      $scope.address.address = $event.target.dataset.suggestion;
    }
    $scope.updateTypeahead = function() {
      /*console.log('UPDATE ME!');
      console.log($scope.address.address);
      console.log(infAddressTypeahead.lookupStreet($scope.address.address));*/
      //If there's no comma...

      if ($scope.address.address.indexOf(',') <= 0) {
        //If there's no number...
        if ($scope.address.address.indexOf(' ') <= 0) {
          infAddressTypeahead.lookupStreet($scope.address.address, $scope.address.postalcode).then(function(data){
            var suggestions = data.data.map(function(item){
              return item.tekst + ' ';
            });
            $scope.suggestions = suggestions;
          });
        // If there is a number...
        } else {
          infAddressTypeahead.lookupStreet($scope.address.address, $scope.address.postalcode).then(function(data){
            var suggestions = data.data.map(function(item){
              return item.tekst + ' ';
            });
            $scope.suggestions = suggestions;
          });
        }
        
      }
      $scope.showSuggestions = true;
      if (!('street' in $scope)) {
        //console.log($scope.address.address.indexOf(','));
      }
    }
  }])
  .directive('infAddressForm', function() {
    return {
      templateUrl: 'views/address-form.html',
      link: function($scope, $element, $attr) {
        console.log($scope.addressFocus);
        console.log($element);
        console.log($attr);
        
        $scope.$watch($scope.addressFocus, function(value) {
          console.log('FOCUS DAMMIT!')
        });
      }
    };
  })
  .factory('infAddressTypeahead', ['$http', function($http) {
    var lookup = {
      lookupStreet: function(streetParticle, postalCode) {
        return $http.get('http://dawa.aws.dk/vejnavne/autocomplete?postnr=' + postalCode + '&q=' + streetParticle);
      } 
    }
    return lookup;
  }]);
