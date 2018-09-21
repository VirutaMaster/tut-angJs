angular.module("todoList",["LocalStorageModule"])
//los factories retornan un objeto, que puede tener un constructor
.service("todoService",function(localStorageService){
    this.key = "milista-actividades";
    this.activities = [];

    if(localStorageService.get(this.key)){
        this.activities = localStorageService.get(this.key);
    }else this.activities = [];

    this.add = function(newActv){
        this.activities.push(newActv);
        this.upadteLocalStorage();
    }

    this.upadteLocalStorage = function(){
        localStorageService.set(this.key,this.activities);
    }

    this.clean = function(){
        this.activities = [];
        this.upadteLocalStorage();
        return this.getAll();
    }

    this.getAll = function(){
        return this.activities;
    }

    this.remove = function(item){
        this.activities = this.activities.filter(function(activity){
            return activity !== item;
        });
        this.upadteLocalStorage();
        return this.getAll();
    }
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