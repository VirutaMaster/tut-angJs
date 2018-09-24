angular.module("FinalApp",["ngRoute","ngResource"])
.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "MainController",
        templateUrl: "templates/home.html"
    })
})