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
        .when('/articles', {
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

myApp.filter('startFrom', function() {
    return function(input, start) {
        start = +start;
        return input.slice(start);
    }
});
