var myapp = angular.module("myapp",[ngroute])
            .config(function($routeprovider){
             $routeprovider
             .when("/first",{
              templateUrl:"view/first.html";
              controlller:"Ctrl2'"
             })
            });