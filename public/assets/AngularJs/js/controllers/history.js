materialAdmin
.controller('historyCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
      $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];

// Get User information
      $scope.user = [];// $http.get("/getUser/" +$scope.RCN )
      $http.get("/getUser/163" )
        
      .then(function(response){
          $scope.user = response.data;         
          $scope.post=[];
          $scope.history=[];
          $scope.i=0;
  listOffice =[]; 

//  =========Designation History Details of the user
// Get designation history : user service
      $http.get("/getService/"+$scope.user[0].Ind_ID )        
        .then(function(response)
         {
            $scope.service = response.data;
// Iterate through the designation to find service details

            listDesignation =[];
              var f =0;

          angular.forEach($scope.service, function(services)
          {   
            var testDate = $scope.service[$scope.i]['AssignedDate'];
            var AssignedDate = moment(testDate, "YYYY MM DD").format(' DD MMM YYYY');
            var endDate = $scope.service[$scope.i]['EndDate'];
            var terminateDate =moment(endDate, "YYYY MM DD").format(' DD MMM YYYY');
            var salary = $scope.service[$scope.i]['EmpSalary'];
            var DID= $scope.service[$scope.i].Desig_ID;
            var chit= $scope.service[$scope.i].RefDoc;
            var officeID1 = $scope.service[$scope.i]['OfficeID'];
            

           
      

            $http.get("/selectOffice/"+officeID1)
        
            .then(function(response)
            {
                $scope.officeName = response.data; 

                // console.log("Value in office name" ,$scope.officeName); 


            angular.forEach($scope.officeName, function(office)
            {             
        
                listOffice.push({"name":($scope.officeName[0].AbrName)}); 
                $scope.h = $scope.h+1;
              

            });// End of Angular ForEach office

                                                                    
            }); // End of selectOffice

            $scope.h=0;
            listPost =[];
           

            

               officeABR =[];
             console.log("value of post: ",(listPost[0]));
              officeABR= listOffice;



              // console.log("value in ABR: ", officeABR[0].name);

            listDesignation.push({"assigned":(AssignedDate), 
                               "terminate":(terminateDate),
                               "salary":(salary)});

            $scope.history.push({ "amount":(listDesignation[$scope.i].salary),
                                  "no":($scope.i+1),
                                  "assigned":(listDesignation[$scope.i].assigned),
                                  "terminate":(listDesignation[$scope.i].terminate)}); 
  
 

$http.get("/userSalaryPost/"+$scope.service[$scope.i].Post_ID )
        
            .then(function(response)
            {
            //  console.log( "value of f " , f);
                $scope.salaryPost = response.data;  
                listPost.push({"post": ($scope.salaryPost[0].LName)})  ;
                 
               //$scope.age.splice(0,0,{childCount:"Child 1 Age"})

               $scope.post.push({"post":($scope.salaryPost[0].LName)}) ;
             
            });// End of UserSalaryPost



            console.log( "value of salary post" , $scope.post); 


            $scope.i=$scope.i+1;


   
        });// End of Angular ForEach function services


          


          console.log("Values of history: ", $scope.history); 

      }); // End of $http getService


//=============Allowance Details=======================================================
$scope.allowance=[];
$scope.q =0;
var temp;


  // get all the allowance for an employee
       $http.get("/viewEmpAllowance/"+$scope.user[0].Ind_ID )
        
          .then(function(response)
          {
              $scope.empAllow = response.data;
             //  console.log("Employee allowance is: ", $scope.empAllow);

          listAmount = [];
          $scope.p =0;



        angular.forEach($scope.empAllow, function(value,key)
        { 
           
            temp = $scope.empAllow[$scope.q]['Allow_ID'];  
            var empAssignedDate = moment($scope.empAllow[$scope.q].FromDate, "YYYY MM DD").format(' DD MMM YYYY');
            var empTermDate = moment($scope.empAllow[$scope.q].ToDate, "YYYY MM DD").format(' DD MMM YYYY'); 

       
            listAmount.push({"amount":($scope.empAllow[$scope.q].amount),
                          "remarks": ($scope.empAllow[$scope.q].Remarks)}); 

            $http.get("/viewAllowance/"+temp )           
        
            .then(function(response)
            { 

                $scope.AllowanceName =  response.data;
                listArray = [];


        angular.forEach($scope.AllowanceName, function(AllowanceNames)
        { 
        // console.log("$scope.AllowanceName[0].AllowName", $scope.AllowanceName[0].AllowName);

            listArray.push({"name":($scope.AllowanceName[0].AllowName)});

       });// End of Angular ForEach history


          $scope.allowance.push({"Name":(listArray[0].name),
                                "Amount":(listAmount[$scope.p].amount),
                                "remarks":(listAmount[$scope.p].remarks),
                                "assigned":(empAssignedDate),
                                "terminated":(empTermDate),"no":($scope.p+1)
                                });           

               $scope.p = $scope.p+1; 
          }); 

      // End of http get Veiw Allowance


        $scope.q = $scope.q+1;   
                                

        });// End of Angular ForEach history            


      });// End of View EmpAllowance  
 
    });  // End of get User

 }]); // End of Material Admin