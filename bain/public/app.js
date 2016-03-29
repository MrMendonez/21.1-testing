angular.module('testApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise('/home');
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/home.html'
  })
  .state('newPage', {
    url: '/newpage',
    template: 'bain'
  });
});