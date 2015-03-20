'use strict';

/**
 * @ngdoc function
 * @name isuWorldStandingsApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Navigation Controller of the isuWorldStandingsApp
 */
angular.module('isuWorldStandingsApp')
  .controller('NavCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.navLinks = [{
      title: 'men',
      linkText: 'Men'
    }, {
      title: 'ladies',
      linkText: 'Ladies'
    }, {
      title: 'pairs',
      linkText: 'Pairs'
    }, {
      title: 'dance',
      linkText: 'Ice Dance'
    }, {
      title: 'about',
      linkText: 'About'
    }];

    $scope.navClass = function(path) {
      return $location.path().substring(1) === path ? 'active': '';
    };
  }]);
