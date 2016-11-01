'use strict';

/**
 * @ngdoc overview
 * @name dzh123App
 * @description
 * # dzh123App
 *
 * Main module of the application.
 */
angular.module('dzh123App', ["ngCookies", "ui.router"]).controller('con', ['$scope', '$http', function($scope, $http) {}]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$stateProvider.state('a', {
		url: '/a',
		templateUrl: 'views/a.html',
		controller: 'a1'
	}).state('b', {
		url: '/b',
		templateUrl: 'views/b.html',
		controller: 'b'
	}).state('c', {
		url: '/c',
		templateUrl: 'views/c.html',
		controller: 'd'
	}).state('d', {
		url: '/d',
		templateUrl: 'views/d.html',
		controller: 'd'
	})
	$urlRouterProvider.when('', '/a')
}])