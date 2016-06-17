'use strict';

angular.module('eventsApp', ['ngResource'])

  .factory('myCache', function($cacheFactory){
      return $cacheFactory('myCache', {capcity:3});
  });
