angular.module("miFiltersApp",[])
.filter("toMayusculas",function(){
    return function(texto){
        //return String(texto).replace(/<[^>]+>/gm,'');
        return String(texto).toUpperCase();
    }
})
.controller("FiltersController",function($scope){
    $scope.unacadena = 'mi perro Es enorme y Come dog chow';
});