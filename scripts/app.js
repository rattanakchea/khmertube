'use strict';

var global = {
  title: 'Khmer Tube',

  channels: [
    {'name': 'Cambodian Idol',
      'id': 'UC8b-bkP65mcy4wMFEw3eirw',
      'playlist': {
        'uploadedVideo': 'UU8b-bkP65mcy4wMFEw3eirw',
        'liveShowWeek1': 'PLpFfrFW3a-RveHYUgImU68VhGIZUK_PfK',
        'greenMile': 'PLpFfrFW3a-Rv1NR-_a76IsxcP73FqlLp1'
      }  
    },
    {'name': 'The Voice Cambodia',
      'id': 'UCosuzQQUHjoPXUePHOiQSdg',
      'playlist': {
        'uploadedVideo': 'PLUway4xenNk7siZIsAFDdC0JOkvwok7Wn',
        'liveShowWeek1': 'PLUway4xenNk7siZIsAFDdC0JOkvwok7Wn',
        'greenMile': 'PLUway4xenNk7siZIsAFDdC0JOkvwok7Wn'
      }
    }
    ]
}

var app = angular.module('khmerTubeApp', [
  'ngRoute'
  ])
.config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl',
    controllerAs: 'main'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl',
    controllerAs: 'about'
  })
  .when('/channel/:channelId',{
    templateUrl: 'views/main.html',
    controller: 'MenuCtrl',
    controllerAs: 'menu'
  })
  .when('/browse/:videoId',{
    templateUrl: 'views/browse.html',
    controller: 'BrowseCtrl',
    controllerAs: 'browse'
  })
  .otherwise({
    redirectTo: '/'
  });
});

//youtube safe url
app.config(function($sceDelegateProvider) {
 $sceDelegateProvider.resourceUrlWhitelist([
   // Allow same origin resource loads.
   'self',
   // Allow loading from our assets domain.  Notice the difference between * and **.
   'http://www.youtube.com/embed/**']);
 });