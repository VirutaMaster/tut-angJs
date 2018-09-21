angular.module("todoList",["LocalStorageModule"])
//los factories retornan un objeto, que puede tener un constructor
.factory("todoService",function(localStorageService){
    var todoService = {};
    todoService.key = "milista-actividades";
    todoService.activities = [];

    if(localStorageService.get(todoService.key)){
        todoService.activities = localStorageService.get(todoService.key);
    }else todoService.activities = [];

    todoService.add = function(newActv){
        todoService.activities.push(newActv);
        todoService.upadteLocalStorage();
    }

    todoService.upadteLocalStorage = function(){
        localStorageService.set(todoService.key,todoService.activities);
    }

    todoService.clean = function(){
        todoService.activities = [];
        todoService.upadteLocalStorage();
        return todoService.getAll();
    }

    todoService.getAll = function(){
        return todoService.activities;
    }

    todoService.remove = function(item){
        todoService.activities = todoService.activities.filter(function(activity){
            return activity !== item;
        });
        todoService.upadteLocalStorage();
        return todoService.getAll();
    }

    return todoService;
})

.controller("todoController",function($scope,todoService){
    /* cuando creo el factory me ahorro el codigo ya que ahora esta en un service en el factory
    if(localStorageService.get("milista-actividades")){
        $scope.todo = localStorageService.get("milista-actividades");
    }else $scope.todo=[];

   $scope.$watchCollection('todo',function(newVal,oldVal){
       localStorageService.set("milista-actividades",$scope.todo);
   })*/
    $scope.todo = todoService.getAll();
    $scope.newActv = {};
    $scope.addActv = function(){
        todoService.add($scope.newActv);
        $scope.newActv = {};
    }
    /*
    $scope.addActv = function(){
        $scope.todo.push($scope.newActv);
        $scope.newActv = {};
    }
    */

    $scope.removeActv = function(item){
        $scope.todo = todoService.remove(item);
    }

    $scope.clean = function(){
        $scope.todo = todoService.clean();
    }

    /*
    $scope.clean = function(){
        $scope.todo = [];
    }
    */
});