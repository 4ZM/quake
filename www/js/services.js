angular.module('quake.services', [])

.factory('Quakes', function($http) {
  var quakes = [];

  return {
    all: function() {
      return quakes;
    },
    wipe: function() {
      quakes = [];
    },
    addQuake: function(newQuake) {
      quakes.push(newQuake);
    }
  }
});
