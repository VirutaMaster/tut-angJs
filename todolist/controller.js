angular.module("todoList",["LocalStorageModule"])
.controller("todoController",function($scope,localStorageService){
    if(localStorageService.get("milista-actividades")){
        $scope.todo = localStorageService.get("milista-actividades");
    }else $scope.todo=[];
    /*
    {
        descripcion: 'llamar a marta',
        fecha: '1-1-18 14:00pm'
    }
    */
   $scope.$watchCollection('todo',function(newVal,oldVal){
       localStorageService.set("milista-actividades",$scope.todo);
   })

    $scope.addActv = function(){
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    }

    $scope.clean = function(){
        $scope.todo = [];
    }
});