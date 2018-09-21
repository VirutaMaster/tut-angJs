angular.module("miAppDirectivas",[])
.directive("backImg",function(){

  return function(scope,element,attrs){
    //attrs.backImg (este caso solo para cuando no se usa el template de angular como parametro)
    attrs.$observe('backImg',function(value){
      element.css({
        "background": "url("+value+")",
        "background-size":"cover",
        "background-position":"center"
      });
    });
  }
})
.controller("DirectivasController",function($scope,$http){
   $http.get("https://api.github.com/users/virutamaster/repos")
   .then(function(datos){
        $scope.repos = datos.data;
        console.log($scope.repos);
   },
   function(){

   });

});