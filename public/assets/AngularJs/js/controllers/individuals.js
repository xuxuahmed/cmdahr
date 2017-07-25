materialAdmin
.controller('indCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){

$http.get("/individuals")
        .then (function (response){
            $scope.staff=response.data;
 
          });

 $http.get("/education")
 		.then(function(response){
 			$scope.edu=response.data;
 		});



 $http.get("/education")
 		.then(function(response){
 			$scope.edu=response.data;
 		});

 }]);