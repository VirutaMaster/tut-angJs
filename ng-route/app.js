angular.module("miApp",["ngRoute"])
.config(function($routeProvider){
  $routeProvider
  .when("/",{
    controller: "DirectivasController",
    templateUrl: "templates/home_directives.html"
  })
})
