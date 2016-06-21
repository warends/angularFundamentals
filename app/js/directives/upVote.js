'use-strict';

angular.module('eventsApp').directive('upVote', function(){
  return {
    restrict: 'E',
    templateUrl: '/templates/partials/upVote.html',
    replace: true,
    scope: {
      voteup: "&",
      votedown: "&",
      count: "="
    }

  };
});
