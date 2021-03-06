'use strict';

/**
 * @ngdoc function
 * @name isuWorldStandingsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the isuWorldStandingsApp
 */
angular.module('isuWorldStandingsApp')
  .controller('MainCtrl', ['$scope', '$location', 'isuwsService', function ($scope, $location, isuwsService) {
    isuwsService.getCountries().success(function(response) {
      $scope.counries = response;
    });

    this.getLastUpdated = function(response) {
      return angular.element(response).find('#DataList1').find('tr').last().find('td').text();
    };

    function countryLookup(iocCode) {
      for (var i = 0; i < $scope.counries.length; i++) {
        if ($scope.counries[i].ioc === iocCode) {
          return $scope.counries[i];
        }
      }
    }

    this.parseHtml = function(data) {
      var rows = angular.element(data).find('#DataList1').find('.content');
      var skaters = [];
      for (var i = 0; i < rows.length; i++) {
        var skater = {};
        var row = angular.element(rows[i]);
        var a = row.find('.name').find('a');
        skater.name = a.text();
        if (!!a.attr('href')) {
          skater.href = a.attr('href');
        }
        if (!!a.attr('class')) {
          skater.class = a.attr('class');
        }
        skater.country = countryLookup(row.find('.name').find('span').text());
        skater.seasons = parseSeasons(row);
        skater.points = calculatePoints(skater.seasons);
        skaters[i] = skater;
      }
      return skaters;
    };

    function calculatePoints(seasons) {
      var points = 0;
      var last = true;
      for (var i = seasons.length - 1; i >= 0; i--) {
        var season = seasons[i];
        var modifier = 1;
        if (last) {
          modifier = 0.7;
        }
        points += Math.round(season.bestISU * modifier) +
          Math.round(season.bestGP * modifier) +
          Math.round(season.secondGP * modifier) +
          Math.round(season.bestOther * modifier) +
          Math.round(season.secondOther * modifier);
        last = false;
      }
      return points;
    }

    function parseSeasons(row) {
      var result = [];
      var seasons = row.find('.season').find('span');
      var bestISU = row.find('.bestISU').find('span');
      var bestGP =  row.find('.bestGrandPrix').find('span');
      var secondGP =  row.find('.secondGrandPrix').find('span');
      var bestOther =  row.find('.bestSelectedInternational').find('span');
      var secondOther =  row.find('.secondSelectedInternational').find('span');
      result[0] = createSeason(seasons[0].firstChild.data,
         bestISU[0].firstChild.data,
         bestGP[0].firstChild.data,
         secondGP[0].firstChild.data,
         bestOther[0].firstChild.data,
         secondOther[0].firstChild.data);
      result[1] = createSeason(seasons[1].firstChild.data.replace('100%', '70%'),
        bestISU[1].firstChild.data,
        bestGP[1].firstChild.data,
        secondGP[1].firstChild.data,
        bestOther[1].firstChild.data,
        secondOther[1].firstChild.data);
      return result;
    }

    function createSeason(seasonstr, isubest, gpbest, gpsecond, intbest, intsecond) {
      var season = {};
      season.season = seasonstr;
      season.bestISU = getNumber(isubest, 0);
      season.bestGP = getNumber(gpbest, 0);
      season.secondGP = getNumber(gpsecond, 0);
      season.bestOther = getNumber(intbest, 0);
      season.secondOther = getNumber(intsecond, 0);
      return season;
    }

    function getNumber(number, defaultValue) {
      if (!!number && !isNaN(number)) {
        return parseInt(number);
      }
      return defaultValue;
    }
  }])
  .controller('MenCtrl', ['$scope', '$controller', 'isuwsService', function($scope, $controller, isuwsService) {
    var mainCtrl = $controller('MainCtrl', {$scope: $scope});
    isuwsService.getMen().success(function(response) {
      $scope.skaters = mainCtrl.parseHtml(response);
      $scope.activeTab = 'men';
      $scope.lastUpdated = mainCtrl.getLastUpdated(response);
    });
  }])
  .controller('LadiesCtrl', ['$scope', '$controller', 'isuwsService', function($scope, $controller, isuwsService) {
    var mainCtrl = $controller('MainCtrl', {$scope: $scope});
    isuwsService.getLadies().success(function(response) {
      $scope.skaters = mainCtrl.parseHtml(response);
      $scope.activeTab = 'ladies';
      $scope.lastUpdated = mainCtrl.getLastUpdated(response);
    });
  }])
  .controller('PairsCtrl', ['$scope', '$controller', 'isuwsService', function($scope, $controller, isuwsService) {
    var mainCtrl = $controller('MainCtrl', {$scope: $scope});
    isuwsService.getPairs().success(function(response) {
      $scope.skaters = mainCtrl.parseHtml(response);
      $scope.activeTab = 'pairs';
      $scope.lastUpdated = mainCtrl.getLastUpdated(response);
    });
  }])
  .controller('DanceCtrl', ['$scope', '$controller', 'isuwsService', function($scope, $controller, isuwsService) {
    var mainCtrl = $controller('MainCtrl', {$scope: $scope});
    isuwsService.getDance().success(function(response) {
      $scope.skaters = mainCtrl.parseHtml(response);
      $scope.activeTab = 'dance';
      $scope.lastUpdated = mainCtrl.getLastUpdated(response);
    });
  }]);
