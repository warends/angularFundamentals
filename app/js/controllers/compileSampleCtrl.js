'use strict';

angular.module('eventsApp').controller('compileSampleCtrl', function($scope, $cookieStore, $timeout){

  var promise = $timeout(function(){
    $scope.name = "Will Arends";
  }, 3000);

  $scope.cancel = function(){
    $timeout.cancel(promise);
  };

  $scope.event = {id:1, name: "My Event"};

  $scope.saveCookie = function(event){
    $cookieStore.put('event', event);
  };

  $scope.getCookie = function(event){
    console.log($cookieStore.get('event'));
  };

  $scope.removeCookie = function(event){
    $cookieStore.remove('event');
  };


});
