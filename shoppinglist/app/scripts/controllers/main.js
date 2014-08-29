'use strict';

/**
 * @ngdoc function
 * @name shoppinglistApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the shoppinglistApp
 */
angular.module('shoppinglistApp')
  .controller('MainCtrl', function ($scope, $firebase, $routeParams, $location) {
    // Add new shopping list
    if ($routeParams.listid == 'add') {
      var ref = new Firebase("https://shining-fire-1762.firebaseio.com/lists");
      var lists = $firebase(ref).$asArray();
      lists.$add([]).then(function(ref) {
         var id = ref.name();
         console.log("added record with id " + id);
         $location.path('/' + id)
      });

    }
    // View/edit existing shoppinglist
    else {
      var ref = new Firebase("https://shining-fire-1762.firebaseio.com/lists/" + $routeParams.listid);

      var sync = $firebase(ref);

      $scope.items = sync.$asArray();
      $scope.itemDelete = function(id) {
        sync.$remove(id);
      }
      $scope.itemEdit = function(id) {
        $scope.item = $scope.items.$getRecord(id);
      }
      $scope.itemSave = function() {
        // Check if it has an ID, console.log
        if ('$id' in $scope.item) {
          $scope.items.$save($scope.item);
        } else {
          sync.$push($scope.item).then(function(newChildRef) {
            console.log("added record with id " + newChildRef.name());
          });
        }
        $scope.item = {};
      }
    }

  })
  .directive('jwItemForm', function() {
    return {
      templateUrl: 'views/item-form.html',
    };
  });
