angular.module('eventsApp').controller('eventListCtrl', function($scope,  eventData){

  $scope.events = eventData.getAllEvents();

});
