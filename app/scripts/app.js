'use strict';

angular.module('angularPluraltutApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/_eventDetails.html',
        controller: 'EventCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/_editEvent.html',
        controller: 'EditEventCtrl'
      })
      .when('/profile', {
        templateUrl: 'views/_editProfile.html',
        controller: 'EditProfileCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });