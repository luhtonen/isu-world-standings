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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
