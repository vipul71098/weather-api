
myapp.factory('dataShare',function($rootScope){
  var service = this;
  service.sendCity = function(city){
      this.city_name = city;
      
    };
      service.sendTemperature = function(Send_temperature){
      this.temperature = Send_temperature;
      $rootScope.$broadcast("dddd");
      

      console.log("sendTemperature------------",this.temperature)

    };
    service.sendHumidity = function(Send_humidity){
      this.humidity = Send_humidity;
            $rootScope.$broadcast("hhhh");

          

      console.log("sendHumidity------------",this.humidity)

    };
      service.sendWind = function(Send_wind){
      this.wind = Send_wind;
                  $rootScope.$broadcast("wwww");

          

      

    };
    //FORECAST 
    service.sendtoday=function(today){
       this.today_f = today;
       $rootScope.$broadcast("t1t1");

    
    };
     service.sendday1=function(day1){
       this.day1_f = day1;
      $rootScope.$broadcast("t2t2");

    
    };
     service.sendday2=function(day2){
       this.day2_f = day2;
     $rootScope.$broadcast("t3t3");

    
    };
     service.sendday3=function(day3){
       this.day3_f = day3;
    $rootScope.$broadcast("t4t4");

    
    };
    //FORECAST SEND DAY NAME
    service.sendtodayname=function(today_na){
       this.today_n = today_na;
     $rootScope.$broadcast("n1n1");

    
    };
    service.sendday1name=function(day1_na){
       this.day1_n = day1_na;
       $rootScope.$broadcast("n2n2");

    
    };
    service.sendday2name=function(day2_na){
       this.day2_n = day2_na;
     $rootScope.$broadcast("n3n3");

    
    };
    service.sendday3name=function(day3_na){
       this.day3_n = day3_na;
     $rootScope.$broadcast("n4n4");

    
    };//JHUHUH

     service.gettoday = function(){
       return this.today_f;
       console.log("ttttdtddtdtd",this.today_f)
    };
      service.getday1 = function(){
       return this.day1_f;
    };
      service.getday2 = function(){
       return this.day2_f;
    };
     service.getday3 = function(){
       return this.day3_f;
    };
     service.gettoday_n = function(){
       return this.today_n;
    };
     service.getday1name = function(){
       return this.day1_n;
    };
     service.getday2name = function(){
       return this.day2_n;
    };
     service.getday3name = function(){
       return this.day3_n;
    };
    //forecsat end

     service.getCity = function(){

    return this.city_name;
  };
  service.getTemperature = function(){
            console.log("getTemperature.........",this.temperature)

    return this.temperature;
  
};

  
  service.gethumidity = function(){
            console.log("gethumidity.........",this.humidity)

    return this.humidity;

  }; 
    service.getwind = function(){
            console.log("getwind.........",this.wind)

    return this.wind;
};

      return service;


});