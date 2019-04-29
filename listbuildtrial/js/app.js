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
            templateUrl: 'js/partials/listbuild.html',
            controller: 'ListbuildController'
        })
        .when('/login', {
            templateUrl: 'js/partials/login.html',
            controller: 'ListbuildController'
        })
        .when('/thankyou', {
            templateUrl: 'js/partials/thankyou.html',
            controller: 'ListbuildController'
        });
}]);
