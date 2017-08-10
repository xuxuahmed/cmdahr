materialAdmin
.controller('salarySlipCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];

      


$scope.years=[];


        var d = new Date();
        
        for(i = 2008; i <= d.getFullYear(); i++) {
          $scope.years.push(i);
        };

        $scope.currMonth = $scope.months[d.getMonth()];       
        $scope.currYear = $scope.years[$scope.years.length - 1];    
        $scope.records = [];        
        $scope.user = [];
   
      $http.get("/getUser/163" )
        
          .then(function(response){
            $scope.user = response.data;

            $scope.RCN= $scope.user[0].RCN;
            $scope.name = $scope.user[0].Name;

          //  console.log("scope RNC is " , $scope.RCN); 

    });  // End of getUser


$scope.submitVariables=function(currMonth,currYear,RCN)
    {      
        
        //console.log("Current Month is ", $scope.currMonth);

        var thisMonth = moment($scope.currMonth, "MMM").format('MM');

        $http.get("/allSalaryYear/" +$scope.currYear+"-"+thisMonth+"-01" )
        
          .then(function(response){
            $scope.salaryMonths = response.data;
            
           // console.log("NextMonth " , thisMonth);
 
           // console.log("Salary Months " , $scope.salaryMonths);
           // console.log("ID of the salary month is: ",  $scope.salaryMonths[0].SalMonthID)  


          
             $http.get("/finalSalaryExists/"+$scope.salaryMonths[0].SalMonthID+"/"+ $scope.RCN)
        
          .then(function(response){
            $scope.sal = response.data;          

          //  console.log("Salary details " , $scope.sal);

        var sum =[];
           

             angular.forEach($scope.sal, function(sal){

          
             sum.push(sal.Amount);
            console.log("$scope sum value is: " , sum);           

            }); // End of foreach
             var total = 0;    $scope.listTotal = [];

             for(i=0; i<sum.length; i++){

                
             var sums = parseFloat(sum[i]);

               total  =parseFloat(total)

             console.log("sums  is:",sums);
              console.log("Total is:",total);


            total =sums+total;

              
              console.log("Total isssss  is:",total);
             }
             
             $scope.total_amount = total;
         
             $scope.listTotal.push({"T":total});
          
             sum.push({"T":total});
 console.log("Array sum:",sum);

    });  // End of getUser
 

    });  




      }// End of SubmitVariables function





 }// End of Function Scope
 ]); // End of Material Admin
 