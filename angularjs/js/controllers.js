var myControllers = angular.module('myControllers', []);

myControllers.controller('ArticleController', function MyController($scope, $http){
    $http.get('js/articles.json').then(function(response){
        $scope.articles = response.data;
    });
});

myControllers.controller('ContactController', function MyController($scope, $http){
    $http.get('js/articles.json').then(function(response){
        $scope.articles = response.data;
    });
});
myControllers.controller('DetailsController', function MyController($scope, $http, $routeParams){
    $http.get('js/articles.json').then(function(response){
        $scope.articles = response.data;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevArticle = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevArticle = $scope.articles.length - 1;
        }

        if ($routeParams.itemId < $scope.articles.length-1) {
            $scope.nextArticle = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextArticle = 0;
        }

    });
});
    