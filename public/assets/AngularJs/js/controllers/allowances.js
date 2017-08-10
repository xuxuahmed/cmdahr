materialAdmin
.controller('masterAllowanceCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];



$http.get("/leavetypes/").then(function(response)
 {
    $scope.leaveTypes = response.data;
    console.log("leaves are; ", $scope.leaveTypes);

$scope.arrayLeaves = []; var i =0;

angular.forEach($scope.leaveTypes, function(leave)
    { 
           $scope.arrayLeaves.push({"id":(i+1),
                            "EnglishName":($scope.leaveTypes[i].EnglishName),
                            "Dhivehi Name":($scope.leaveTypes[i].DhivehiName)})
        i = i+1;    
        console.log("Array Leaves are: ", $scope.arrayLeaves);

    });// End of Angular forEach



 });

 }// End of Function Scope
 ]); // End of Material Admin
 