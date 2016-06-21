angular.module('eventsApp').controller('eventListCtrl', function($scope, $location, eventData){

  $scope.events = eventData.getAllEvents();

});
