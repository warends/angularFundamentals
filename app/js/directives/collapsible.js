angular.module('eventsApp').directive('collapsible', function(){
  return {
    restrict: 'E',
    replace: true,
    template: '<div><h4 ng-click="toggle()"class="well-title">{{title}}</h4><div ng-transclude ng-show="visible"></div></div>',
    controller: function($scope){
      $scope.visible = true;
      $scope.toggle = function(){
        $scope.visible = !$scope.visible;
      }
    },
    transclude: true,
    scope: {
      title: '@'
    }
  }
});
