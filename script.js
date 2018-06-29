var  myapp = angular.module("mymodule", ['ngRoute']);
  myapp.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl : 'try1.html',
        controller  : 'MainCtrl'
      }) 

      .when('/try1', {
        templateUrl : 'view/try1.html',
        controller  : 'MainCtrl'
      })
      .when('/wheather', {
        templateUrl : 'view/wheather.html',
        controller  : 'MainCtrl2'
      })

      .when('/forecast', {
        templateUrl : 'view/forecast.html',
        controller : 'forecast_ctrl'
        
      });
      

  });
  myapp.controller("mainController", function($scope){
    $scope.message = "Hey bro this is My home, You got it";

  });
  // myapp.controller("aboutController",['$scope',function($scope){
  //   $scope.message="If you want to know about me then do Google you shit!! ";
  // }]);
  // myapp.controller("contactController", ['$scope',function($scope){
  //  $scope.message= "First take Appointment from my Assistant, you Dumb";
  // }]);
  myapp.controller('MainCtrl', ['$scope','dataShare','$http',
    function ($scope,dataShare,$http) {   

         $scope.text = '';
         $scope.temperature;
         $scope.send = function(){
          var city=$scope.text;
          // var city = $scope.city;
       $http.get("http://api.openweathermap.org/data/2.5/weather?q="+city+
          "&appid=d7a198fa79be04f2659c4a8b7dc62f80").then(function(response){
        
        $scope.temperature=response.data.main.temp; 
        $scope.humidity=response.data.main.humidity;
        $scope.wind=response.data.wind.speed;

   
        dataShare.sendTemperature($scope.temperature);            
        console.log($scope.temperature);
        dataShare.sendHumidity($scope.humidity);            
        console.log($scope.humidity);
         dataShare.sendWind($scope.wind);            
        console.log($scope.wind);

     });

         dataShare.sendCity($scope.text);
           
           
          
          
           };
         }
    
]);

myapp.controller('MainCtrl2', ['$scope','dataShare','$rootScope','$http',
    function ($scope,dataShare,$rootScope,$http) { 

      $rootScope.$on("dddd",function(){
         var t=dataShare.getTemperature();
         $scope.temperature1 = t;
          $scope.temperature2= $scope.temperature1 - 273.15; 
          $scope.temperature =Math.round($scope.temperature2)
         console.log("teteetetet",$scope.temperature1)
      })
         // $scope.temperature1 = dataShare.getTemperature(); 

      $scope.text1 = '';
    $scope.text1 =dataShare.getCity();      

   $rootScope.$on("hhhh",function(){
             $scope.humidity = dataShare.gethumidity();

   })
      $rootScope.$on("wwww",function(){
             $scope.humidity = dataShare.gethumidity();
         $scope.wind = dataShare.getwind();

   })
    
         
                
              //   console.log("$on",$scope.text1);
              //  $scope.$on('data_shared',function(){
                $scope.getforecast = function(){
                  var city_n=$scope.text1;
                  $http.get("http://api.openweathermap.org/data/2.5/forecast?q="+city_n+"&appid=f139dbfbf9499797b15885d34d3cafcb"
              ).then(function(response){       
              var today = new Date();
              var dd = today.getDate()+1;
              var dd1 = today.getDate()+2;
              var dd2 = today.getDate()+3;
              var dd3 = today.getDate()+4;

              var mm = today.getMonth()+1; 
              var yyyy = today.getFullYear();
              if(dd<10) 
              {
                  dd='0'+dd;
               } 

              if(mm<10) 
               {
                 mm='0'+mm;
                 } 
                   $scope.today = yyyy+'-'+mm+'-'+dd;

                   $scope.today1 = yyyy+'-'+mm+'-'+dd1;
                   $scope.today2 = yyyy+'-'+mm+'-'+dd2;
                   $scope.today3 = yyyy+'-'+mm+'-'+dd3;
                   console.log("ddatat",$scope.today3)

              var gsDayNames = [
                                   'Sunday',
                                   'Monday',
                                   'Tuesday',
                                   'Wednesday',
                                   'Thursday',
                                    'Friday',
                                    'Saturday'
              ];
                  

var d = new Date($scope.today);
$scope.daytoday = gsDayNames[d.getDay()];
var e = new Date($scope.today1);
$scope.dayName1 = gsDayNames[e.getDay()];
var f = new Date($scope.today2);
$scope.dayName2 = gsDayNames[f.getDay()];
var g = new Date($scope.today3);
$scope.dayName3 = gsDayNames[g.getDay()];


              var f = response.data.list;
              console.log(f)

                for(i=0;i<f.length;i++){
                
                  $scope.time_string = "12:00:00";  //time string 
                  $scope.date_string=$scope.today;  //date string
                  $scope.date_string1=$scope.today1;
                  $scope.date_string2=$scope.today2;
                  $scope.date_string3=$scope.today3;



                   if(f[i].dt_txt == $scope.date_string +" "+ $scope.time_string){
                      $scope.data=f[i];
                      
                      
                  }
                  if(f[i].dt_txt == $scope.date_string1 +" "+ $scope.time_string){
                      $scope.day1=f[i];
                      
                  }
                  if(f[i].dt_txt == $scope.date_string2 +" "+ $scope.time_string){
                      $scope.day2=f[i];
                      
                  }if(f[i].dt_txt == $scope.date_string3 +" "+ $scope.time_string){
                      $scope.day3=f[i];
                      
                  }

                }
              dataShare.sendtodayname($scope.daytoday);
              dataShare.sendday1name($scope.dayName1);
              dataShare.sendday2name($scope.dayName2);
              dataShare.sendday3name($scope.dayName3);

              dataShare.sendtoday($scope.data);
              dataShare.sendday1($scope.day1);
              dataShare.sendday2($scope.day2);
              dataShare.sendday3($scope.day3);



              
        });   
              //dataShare.sendtoday($scope.data);
              //console.log('hweudgeg',$scope.data)

                }//getforecast function end
              
       
    }
]);// END OF MAINCTRL
myapp.controller("forecast_ctrl",['$scope','dataShare','$rootScope',function($scope,dataShare,$rootScope){
         
           $rootScope.$on("t1t1",function(){
                       $scope.today= dataShare.gettoday();

     var t1=$scope.today.main.temp - 273.15;
            $scope.today_t =Math.round(t1);
   })
          $rootScope.$on("t2t2",function(){
          $scope.day1=dataShare.getday1();
          var t2=$scope.day1.main.temp - 273.15;
            $scope.day1_t =Math.round(t2);
   })
            $rootScope.$on("t3t3",function(){
          $scope.day2=dataShare.getday2();
          var t3=$scope.day2.main.temp - 273.15;
            $scope.day2_t =Math.round(t3);
             


   })
               $rootScope.$on("t4t4",function(){
          $scope.day3=dataShare.getday3();
          var t4=$scope.day3.main.temp - 273.15;
            $scope.day3_t =Math.round(t4);

   })
    
          
          
          
          //  var t2=$scope.day1.main.temp - 273.15;
          
          // $scope.day1_t=Math.round(t2);
          //  var t3=$scope.day2.main.temp - 273.15;
          //  $scope.day2_t=Math.round(t3);
          //   var t4 = $scope.day3.main.temp - 273.15;
          //   console.log("fuck you",t4)
          //    $scope.day3_t=Math.round(t4);


        

       $rootScope.$on("n1n1",function(){
        $scope.today_n=dataShare.gettoday_n(); 

   })
         $rootScope.$on("n2n2",function(){
        $scope.day1_n=dataShare.getday1name(); 

   })
           $rootScope.$on("n3n3",function(){
        $scope.day2_n=dataShare.getday2name();  

   })
             $rootScope.$on("n4n4",function(){
        $scope.day3_n=dataShare.getday3name();            

   })
          
           
           


}]);//END OF forecast_ctrl