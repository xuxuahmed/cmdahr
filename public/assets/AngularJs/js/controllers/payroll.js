materialAdmin
.controller('payrollCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];


  //$http.get("/getService/"+$scope.user[0].Ind_ID )

   $http.get("/getService/163" )
        
          .then(function(response){
          
            $scope.service = response.data;



		console.log("I am in get service");

    
    
    }); // End of getService


 }// End of Function Scope
 ]); // End of Material Admin