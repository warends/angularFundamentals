'use strict';

angular.module('eventsApp').controller('eventCtrl', function($scope, eventData){

    eventData.getEvent()
      .$promise
      .then(function(event) { $scope.event = event; })
      .catch(function(response) { console.log(response); });


});
