'use strict';

angular.module('isuWorldStandingsApp').
  factory('isuwsService', ['$http', function($http) {
    var isuwsApi = {};
    isuwsApi.getLadies = function() {
      return $http.get('data/wsladies.htm');
    };

    isuwsApi.getMen = function() {
      return $http.get('data/wsmen.htm');
    };

    isuwsApi.getPairs = function() {
      return $http.get('data/wspairs.htm');
    };

    isuwsApi.getDance = function() {
      return $http.get('data/wsdance.htm');
    };

    isuwsApi.getCountries = function() {
      return $http.get('data/countries.json');
    };

    return isuwsApi;
  }]);
