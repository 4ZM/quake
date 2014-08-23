angular.module('quake', ['ionic', 'quake.controllers', 'quake.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $compileProvider) {
    
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|geo|file):/);
    
    $stateProvider
    
    // Setup an abstract state for the tabs directive
      .state('tab', {
        url: "/tab",
        abstract: true,
        templateUrl: "templates/tabs.html"
      })

    // Each tab has its own nav history stack:
      .state('tab.quakes', {
        url: '/quakes',
        views: {
          'tab-quakes': {
            templateUrl: 'templates/tab-quakes.html',
            controller: 'QuakesCtrl'
          }
        }
      })

      .state('tab.about', {
        url: '/about',
        views: {
          'tab-about': {
            templateUrl: 'templates/tab-about.html',
            controller: 'AboutCtrl'
          }
        }
      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/quakes');
  });

