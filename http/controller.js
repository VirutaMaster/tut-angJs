angular.module("miApphttp",[])
    .controller("FirstController",function($scope,$http){
        $scope.posts = [];
        $scope.newPost={};

        $http.get("https://jsonplaceholder.typicode.com/posts")
            .then(function(datos){  
                console.log("ya cargo");
                $scope.posts=datos.data;
            },
            function(error){  
                console.log("no funca! revisa!");
        });

        $scope.addPost = function(){
            $http.post("https://jsonplaceholder.typicode.com/posts",
                {
                    title:$scope.newPost.title,
                    body:$scope.newPost.body,
                    userId:1
                }
            )
            .then(function(response){
                console.log(response);
                $scope.posts.push($scope.newPost);
                $scope.newPost={};
            },
            function(response){
                console.log("error")
            });
        }

    });