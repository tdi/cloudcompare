'use strict';

angular.module('cloudcompare', [
  'ngRoute',
]).controller('ServicesCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.searchServices = '';

  $http.get('services.json').success(function(data) {
    $scope.services = data;
  });

  $http.get('mapping.json').success(function(data) {
    $scope.mapping = data;
  });
}])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'compare.html',
    controller: 'ServicesCtrl'
  });

  $locationProvider.html5Mode(true);
}]);
