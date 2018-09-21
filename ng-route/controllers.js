angular.module("miApp")
.controller("DirectivasController",function($scope,$http){
  $http.get("https://api.github.com/users/virutamaster/repos")
  .then(function(datos){
       $scope.repos = datos.data;
       console.log($scope.repos);
  },
  function(){

  });

});