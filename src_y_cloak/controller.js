angular.module("miApp",[])

.controller("AppController",function($scope,$http){
   $http.get("https://api.github.com/users/virutamaster/repos")
   .then(function(datos){
        $scope.repos = datos.data;
        console.log($scope.repos);
   },
   function(){

   });

});