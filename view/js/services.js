
myapp.factory('dataShare',function($rootScope){
  var service = {};
  service.sendData = function(data){
      this.data = data;
      $rootScope.$broadcast('data_shared');
  }
  service.getData = function(){
    console.log()    return this.data;
  };
  return service;
});