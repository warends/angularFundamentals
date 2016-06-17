'use strict';

angular.module('eventsApp').controller('cacheSampleCtrl', function($scope, myCache){

    $scope.addToCache = function(key, value){
      myCache.put(key, value);
    };

    $scope.readFromCache = function(key){
      return myCache.get(key);
    };

    $scope.getCacheStats = function(){
      return myCache.info();
    };
});
