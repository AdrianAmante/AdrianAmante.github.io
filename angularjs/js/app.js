var myApp = angular.module('myApp', [
    'ngRoute',
    'myControllers'
]);

myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix('');
    $routeProvider
        .when('/', {
            templateUrl: 'js/partials/articles.html',
            controller: 'ArticleController'
        })
        .when('/contact', {
            templateUrl: 'js/partials/contact.html',
            controller: 'ContactController'
        })
        .when('/details/:itemId', {
            templateUrl: 'js/partials/details.html',
            controller: 'DetailsController'
        });


}]);
  