var myControllers = angular.module('myControllers', ['angularUtils.directives.dirPagination']);

myControllers.controller('ListbuildController', function MyController($scope, $http, $routeParams){
    $http.get('js/email.json').then(function(response){
        $scope.emails = response.data;
    });
});

