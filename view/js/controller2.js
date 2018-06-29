myapp.controller('Ctrl2', ['$scope','dataShare',
    function ($scope,dataShare) {         
         
                $scope.name = '';
                $scope.$on('data_shared',function(){
                            var text =  dataShare.getData();    
              $scope.name = text;
        });
    }
]);
