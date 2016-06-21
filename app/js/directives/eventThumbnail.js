'use-strict';

angular.module('eventsApp').directive('eventThumbnail', function(){
  return {
    restrict: 'E',
    templateUrl: '/templates/partials/eventThumbnail.html',
    replace: true,
    scope: {
      event: "="
    }
  };
});
