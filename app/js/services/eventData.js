'use strict';

angular.module('eventsApp').factory('eventData', function($resource){

  var resource = $resource('/data/event/:id', {id: '@id'});
  return {
      getEvent: function(){
          return resource.get({id:'1.json'});
      },
      save: function(event){
          event.id = 999;
          return resource.save(event);
      }
};

});
