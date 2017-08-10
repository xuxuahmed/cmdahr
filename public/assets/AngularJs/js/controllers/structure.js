materialAdmin
.controller('masterStructureCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];


$http.get("/allAllowance").then(function(response)
 {
    $scope.allow= response.data;
  //  console.log("Allowances; ", $scope.allow);

 });



$http.get("/allSalaryMaster/").then(function(response)
 {
    $scope.struct= response.data;
  //  console.log("leaves are; ", $scope.struct);

$scope.arrayStruct = []; var i =0;
 var sum;
 var allowName;
 var A2;
 var A3;
 var A4;
 var a1;
 var a2;
 var a3;
 var a4;
 var active;

 var len_allow = ($scope.allow).length;
 console.log("lenth is: ", len_allow);

angular.forEach($scope.struct, function(leave)
    { 

$scope.p =0;
 allowName ="";
 A2 ="";
 A3="";
 active ="";

     for(var q=0; q<len_allow; q++)
     {
         //   console.log("I am in ");

      if(($scope.struct[i].Allowance1) == $scope.allow[$scope.p].Allow_ID)
      {
       // console.log("I am in ");

          allowName = $scope.allow[q].AllowName;
      }


      if(($scope.struct[i].Allowance2) == $scope.allow[$scope.p].Allow_ID)
      {
        console.log("I am in A2");

          A2 = $scope.allow[q].AllowName;
          console.log("Allow Name is: ", A2);
      }
   
   if(($scope.struct[i].Allowance3) == $scope.allow[$scope.p].Allow_ID)
      {
        console.log("I am in A3");

          A3 = $scope.allow[q].AllowName;
          console.log("Allow Name is: ", A3);
      }

       if(($scope.struct[i].Cancel) == 1)
      {
        
          active = "No";
          

      }
       if(($scope.struct[i].Cancel) == 0)
      {
        
          active = "Yes";
          
          
      }
       $scope.p=$scope.p+1;

     }
      

        sum = parseFloat($scope.struct[i].Amount);
         a1 = parseFloat($scope.struct[i].a1amount);
         a2 = parseFloat($scope.struct[i].a2amount);
         a3 = parseFloat($scope.struct[i].a3amount);


           $scope.arrayStruct.push({"id":(i+1),
                            "LName":($scope.struct[i].LName),
                            "ClassNameL":($scope.struct[i].ClassNameL),
                            "Amount":(sum),
                            "Allowance1":(allowName),
                            "a1amount":(a1),
                            "A2":(A2),
                            "a2amount":(a2),
                             "A3":(A3),
                            "a3amount":(a3),
                            "active":(active)})
        i = i+1;    
        console.log("Array Leaves are: ", $scope.arrayStruct);

    });// End of Angular forEach



 });

 }// End of Function Scope
 ]); // End of Material Admin
 