myapp.controller('Ctrl', ['$scope','dataShare',
    function ($scope,dataShare) {         
         $scope.name = '';
         $scope.send = function(){
           dataShare.sendData($scope.name);
           window.location="wheather.html";
         };

    }
]);