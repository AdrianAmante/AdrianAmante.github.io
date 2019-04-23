var myControllers = angular.module('myControllers', []);

myControllers.controller('ListbuildController', function MyController($scope, $http, $routeParams){
    $http.get('js/email.json').then(function(response){
        $scope.emails = response.data;
        $scope.whichItem = $routeParams.itemId;

        if ($routeParams.itemId > 0) {
            $scope.prevEmail = Number($routeParams.itemId) - 1;
        } else {
            $scope.prevEmail = $scope.emails.length - 1;
        }

        if ($routeParams.itemId < $scope.emails.length-1) {
            $scope.nextEmail = Number($routeParams.itemId) + 1;
        } else {
            $scope.nextEmail = 0;
        }

    $scope.currentPage = 0;
    $scope.pageSize = 10;
    $scope.data = [];
    $scope.q = '';

    $scope.getData = function () {
      return $filter('filter')($scope.data, $scope.q)
    }

    $scope.numberOfPages=function(){
        return Math.ceil($scope.getData().length/$scope.pageSize);
    }

    for (var i=0; i<65; i++) {
        $scope.data.push("Item "+i);
    }

    $scope.$watch('q', function(newValue,oldValue){                       if(oldValue!=newValue){
        $scope.currentPage = 0;
      }
    },true);

    });
});

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
