angular.module('eventsApp').controller('editProfileCtrl', function($scope, gravitarUrlBuilder){
    $scope.user = {

    }

    $scope.getGravitarUrl = function(email){
      return gravitarUrlBuilder.buildGravitarUrl(email);
    }

});
