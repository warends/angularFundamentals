'use strict';

angular.module('eventsApp', ['ngResource', 'ngCookies', 'ngRoute'])

  .config(function($routeProvider, $locationProvider){
    $routeProvider
      .when('/newEvent', {
        templateUrl: '/templates/newEvent.html',
        controller: 'newEventCtrl'
      })
      .when('/editProfile', {
        templateUrl: '/templates/editProfile.html',
        controller: 'editProfileCtrl'
      })
      .when('/event/:eventId', {
        templateUrl: '/templates/eventDetails.html',
        controller: 'eventCtrl'
      })
      .when('/sampleDirective', {
        templateUrl: '/templates/directive.html',
        controller: 'sampleDirectiveCtrl'
      })
      .when("/events", {
        templateUrl: '/templates/eventsList.html',
        controller: 'eventListCtrl'
      })
      .otherwise ({ redirectTo: '/events'});

      $locationProvider.html5Mode(true);
  })

  .factory('myCache', function($cacheFactory){
      return $cacheFactory('myCache', {capcity:3});
  });
