var myApp = angular.module('myApp', [
    'ngRoute',
    'ngAnimate',
    'myControllers'
]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: './js/partials/homepage.html',
            controller: 'HomepageController'
        })
        .when('/contact', {
            templateUrl: './js/partials/contact.html',
            controller: 'ContactController'
        })
        .when('/details/:itemId', {
            templateUrl: './js/partials/details.html',
            controller: 'DetailsController'
        });
}]);
  