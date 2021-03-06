/**
@toc
1. setup - whitelist, appPath, html5Mode
*/

'use strict';

angular.module('myApp', [
'ngRoute', 'ngSanitize', 'ngTouch',		//additional angular modules
'ds.ng-bootstrap-sizes'
]).
config(['$routeProvider', '$locationProvider', '$compileProvider', function($routeProvider, $locationProvider, $compileProvider) {
	/**
	setup - whitelist, appPath, html5Mode
	@toc 1.
	*/
	// $locationProvider.html5Mode(false);		//can't use this with github pages / if don't have access to the server
	// var staticPath ='/';
	var staticPath;
	// staticPath ='/';		//nodejs (local)
	staticPath = '/ng-bootstrap-sizes/';		//gh-pages
	var appPathRoute = '/';
	var pagesPath = staticPath + 'pages/';

	$routeProvider.when(appPathRoute + 'home', { templateUrl: pagesPath + 'home/home.html' });

	$routeProvider.otherwise({ redirectTo: appPathRoute + 'home' });
}]);
