angular.module('quake.controllers', [])

  .controller('QuakesCtrl', function($scope, $http, $ionicLoading, Quakes) {
    $scope.quakes = [];
    $scope.refreshing = false;

    $scope.refresh = function()
    {
      $scope.refreshing = true;

      $http.get('http://apis.is/earthquake/is').
        success(function(data) {
          newQuakes = [];

          try {
            newQuakes = angular.fromJson(data).results;
	  }
	  catch(err) {
            $ionicLoading.show({ template: 'Bad format, earthquake list could not be updated.', noBackdrop: true, duration: 2000 });
	  }

          for (i = 0; i < newQuakes.length; ++i) {
            var d = new Date(newQuakes[i].timestamp);
            var ds = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDay() + ' ' + d.getHours() + ':' + d.getMinutes();
            newQuakes[i].time = ds
          }
          
          $scope.quakes = newQuakes; 
          $ionicLoading.show({ template: 'Earthquake list updated', noBackdrop: true, duration: 2000 });	
        }).
        error(function(data, status) {
    	  $ionicLoading.show({ template: 'Could not update earthquake list', noBackdrop: true, duration: 2000 });
        }).
        finally(function() {
          $scope.refreshing = false;
        });
    };
  })

  .controller('AboutCtrl', function($scope) {
  });
