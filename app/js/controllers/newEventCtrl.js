'use strict';

angular.module('eventsApp').controller('newEventCtrl', function($scope, eventData){

  $scope.saveEvent = function(event, newEventForm) {
      if(newEventForm.$valid){
          eventData.save(event)
            .$promise
            .then(function(response){console.log('success', response)})
            .catch(function(response){console.log('failed', response)});

      }
  };

  $scope.cancelEvent = function(){
      window.location = '/eventDetails.html';
  };


});
