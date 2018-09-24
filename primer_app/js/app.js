angular.module()
.config(function($routeProvider){
    $routeProvider
    .when("/",{
        controller: "homeController",
        templateUrl: "templates/home.html"
    })
    .when("/quienes",{
        controller: "quienesController",
        templateUrl: "templates/quienes_somos.html"
    })
    .when("/contacto",{
        controller: "contactoController",
        templateUrl: "templates/contacto.html"
    });
})