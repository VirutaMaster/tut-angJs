/*   FORMA DE METODO ENCADENADO
angular.module("miApp",[])
.controller("FirstController",function($scope){
    $scope.nombre = "Rama";
}).controller("SecondController",function($scope){
    $scope.apellido = "Perez";
})
*/

/* FORMA DEFINIDA COMO VARIABLE
var app = angular.module("miApp",[]);
app.controller("FirstController",function($scope){
    $scope.nombre = "Rama";
})
*/

angular.module("miApp",[])
.controller("FirstController",function($scope){
    $scope.nombre = "Rama";
    $scope.nuevoComentario = {};
    $scope.comentarios = [
        {
            comentario: "hola che",
            username: "pepe"
        },
        {
            comentario: "chau gente",
            username: "mario"
        }
    ];
    $scope.agregarComentario = function(){
        $scope.comentarios.push($scope.nuevoComentario);
        $scope.nuevoComentario={};
    }
}
)