materialAdmin
.controller('managementGroupsManagerCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];




$http.get("/allGroupRoster/").then(function(response)
 {
    $scope.group= response.data;
    console.log("group ", $scope.group);



 var active ;
 var i=0;

 $scope.arraygroup=[];


angular.forEach($scope.group, function(post)
    { 
      console.log("i am in ");
      active ="";

     if(($scope.group[i].active) == 0)
      {        
          active = "Yes";          

      }
       if(($scope.group[i].active) == 1)
      {        
          active = "No";
      }
           $scope.arraygroup.push({"id":(i+1),
                            "GName":($scope.group[i].GName),
                            "Description": ($scope.group[i].Description),
                            "active":(active)});
            i = i+1; 

                     
     });
          console.log("group array ",  $scope.arraygroup);

        
     });

 }]); // End of Material Admin
 