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
        console.log("In here 1");
      
        $http.get("/menus")
        .then (function (response){
            $scope.menu=response.data;
            // console.log($scope.menu);          
      

        //listArrays to store only the names of menus
      var listMenus=[];
      var subMenus=[]; 
    

//forloop to get the name from details array and store it in listArray 
    //   angular.forEach($scope.menu, function(menus)
    //   {     
    //     //  console.log("Im in for each");
    //     listMenus.push(menus.menu_name,menus.class,menus.submenus);
    //     subMenus.push(menus.menu_name,menus.submenus)
        
    //  //   console.log(listArray);       
    //   });// End of for Each list Array
    //    $scope.menuArray=listMenus;
    //    $scope.subMenuArray=subMenus;
       
// console.log($scope.menuArray );  
 console.log($scope.subMenuArray );  
          });
    }]);