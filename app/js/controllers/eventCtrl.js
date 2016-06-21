'use strict';

angular.module('eventsApp').controller('eventCtrl', function($scope, eventData, $routeParams){

    eventData.getEvent($routeParams.eventId)
      .$promise
      .then(function(event) { $scope.event = event; })
      .catch(function(response) { console.log(response); });

      $scope.voteUpSession = function(session){
          session.upVoteCount++;
      };
      $scope.voteDownSession = function(session){
        session.upVoteCount--;
      }

});
