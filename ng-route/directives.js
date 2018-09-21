angular.module("miApp")
.directive("backImg",function(){
  return function(scope,element,attrs){
    //attrs.backImg (este caso solo para cuando no se usa el template de angular como parametro)
    attrs.$observe('backImg',function(value){
      element.css({
        "background": "url("+value+")",
        "background-size":"cover",
        "background-position":"center",
        "width": '100px',
        "height": '100px'
      });
    });
  }
});