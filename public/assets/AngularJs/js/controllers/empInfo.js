materialAdmin
.controller('empInfoCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){

    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];

        $scope.submitVariables=function(currMonth,currYear,RCN)
    {$scope.info=[];$scope.i=0;$scope.history=[];

  $http.get("/viewUser/"+$scope.RCN )
        
          .then(function(response)
          {
            $scope.info = response.data;
            console.log("Hiiiiiiiiiii", $scope.info);



//  =========Designation History Details of the user
// Get designation history : user service
  $http.get("/getService/"+$scope.info[0].Ind_ID )
        
          .then(function(response)
          {
            $scope.service = response.data;

            console.log("service is:  " , $scope.service);
 

// Iterate through the designation to find service details
   angular.forEach($scope.service, function(services)
    {  
        
       // console.log("value of i is: ", $scope.i);    
     
        var testDate = $scope.service[$scope.i]['AssignedDate'];
        var AssignedDate = moment(testDate, "YYYY MM DD").format(' DD MMM YYYY');
        var endDate = $scope.service[$scope.i]['EndDate'];
        var terminateDate =moment(endDate, "YYYY MM DD").format(' DD MMM YYYY');
     var salary = $scope.service[$scope.i]['EmpSalary'];
        //console.log(" Post id ", $scope.service[$scope.i].Post_ID);
       // console.log(" Desig id ", $scope.service[$scope.i].Desig_ID);

    var DID= $scope.service[$scope.i].Desig_ID;
     var chit= $scope.service[$scope.i].RefDoc;
    var officeID1 = $scope.service[$scope.i]['OfficeID'];
console.log("Office ID1 is: ", officeID1);

$http.get("/selectOffice/"+$scope.service[$scope.i].OfficeID)
        
          .then(function(response)
          {
              $scope.office = response.data;
              $scope.officeName = $scope.office.AbrName; 

          console.log("Office name ",    $scope.office ) ;
            //  $scope.officeName = $scope.officeID[0].LOfficeName;
             
            
                                    
              });  // 


      $http.get("/userSalaryPost/"+$scope.service[$scope.i].Post_ID )
        
          .then(function(response)
          {
              $scope.salaryPost = response.data;



//////////////////////////////================

            //  console.log("user salaryPost: ",$scope.salaryPost ) ;
               $scope.history.push({"id":(DID),
                                   "amount":(salary),
                                   "post2":($scope.salaryPost[0].ClassNameL),
                                   "post":($scope.salaryPost[0].LName),
                                    "assigned":(AssignedDate),                                    
                                    "terminate":(terminateDate),
                                    "chit":(chit),
                                    "office":($scope.officeName)
                                     }
                                    ); 
      
       });// End of UserSalaryPost


      console.log("i before increment", $scope.i);
  $scope.i=$scope.i+1;
 

    // console.log("i after increment", $scope.i);
       }


       );// End of Angular ForEach


     console.log("Values of history: ", $scope.history); 
     

  // console.log("Values of salary post: ", $scope.post);
 
      var r =0;
    

angular.forEach($scope.history, function(value,key)
    { 
         
        $scope.history.push({"no":(r)}); 

            console.log("r: ", r);  
             r=r+1;                   

    } 

 );// End of Angular ForEach history

      }); // End of getService

 }); // End of getService





}// End of function submit variables

 }// End of Function Scope




 ]); // End of Material Admin