var materialAdmin = angular.module('materialAdmin', [
    'ngAnimate',
    'ngResource',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
    'oc.lazyLoad',
    'nouislider',
    'ngTable'
  
]

);
 
materialAdmin.controller('menuCtrl',['$scope','$log','$http',
 function($scope,$log,$http){
      
        $http.get("/menus")
        .then (function (response){
            $scope.menu=response.data;


            
      var listMenus=[];
      var subMenus=[]; 
    
  
 //console.log($scope.subMenuArray );  
          });


       
    }]);