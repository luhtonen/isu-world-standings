'use strict';

/**
 * @ngdoc overview
 * @name isuWorldStandingsApp
 * @description
 * # isuWorldStandingsApp
 *
 * Main module of the application.
 */
angular
  .module('isuWorldStandingsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/men', {
        templateUrl: 'views/main.html',
        controller: 'MenCtrl'
      })
      .when('/ladies', {
        templateUrl: 'views/main.html',
        controller: 'LadiesCtrl'
      })
      .when('/pairs', {
        templateUrl: 'views/main.html',
        controller: 'PairsCtrl'
      })
      .when('/dance', {
        templateUrl: 'views/main.html',
        controller: 'DanceCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/men'
      });
  });
