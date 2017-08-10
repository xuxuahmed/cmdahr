materialAdmin
.controller('leaveCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];

        $scope.user = [];

//======== $http.get("/getUser/" +$scope.RCN )
      $http.get("/getUser/163" )
        
          .then(function(response){
            $scope.user = response.data;

            $scope.RCN= $scope.user[0].RCN;
            $scope.id =$scope.user[0].Ind_ID;
         //   console.log("Individual id of user is: ", $scope.id);
            staff = [];
            $scope.employDate;

         
//=====Find the total years of staff=========================

  $http.get("/getEmployment/"+$scope.id).then(function(response){
            $scope.employment = response.data;            
           $scope.employDate = moment($scope.employment[0]['Employeddate']).format('DD MMM YYYY');    
           
           staff.push({"yearStart":$scope.employDate});
          // console.log("staff is: ", staff);
           var today = moment(new Date()).format ('DD MMM YYYY');

  


if(($scope.employment[0].ResignedDate) == null)
      {
          var Year1 = moment(today, "DD MMM YYYY").format("YYYY");
          var Year2 = moment(staff[0].yearStart, "DD MMM YYYY").format("YYYY");

        //  console.log("Year 2 is: ", Year2);
          diff_years = Year1 - Year2;
          staff.push({"years":(diff_years)}) ;
          dateList =[];

          staffDetails =[];


          var nextYear =  moment(staff[0].yearStart, "DD MMM YYYY").add(1,'year').format('DD MMM YYYY');
          var firstYear = moment(staff[0].yearStart, "DD MMM YYYY").subtract(1,'year').format('DD MMM YYYY');     
          var date0 = moment(staff[0].yearStart, "DD MMM YYYY").format('YYYY-MM-DD'); 
        
          var date2= moment(staff[0].yearStart, "DD MMM YYYY").add(1,'year').format('YYYY-MM-DD'); 
         // console.log("date list is: ", dateList) ;

leave_sum=[];
sigma_Leaves =[];
         var arr = [];


console.log("Array is: ", arr);

//staff[1].years
var b = 0;

$scope.iteration = 0;
for (var q = 0; q <4; q++)
{    
 
  $http.get("/LeaveBtw/"+$scope.user[0].Ind_ID+"/"+date0+"/"+date2)       
          .then(function(response)
{
            $scope.leaves_btw = response.data;

//======== count the sum of each leaves in a year===========  

//************************************

$http.get("/leavetypes/").then(function(response)
{
      $scope.leavesTypes = response.data;
      var len_leavesTypes = ($scope.leavesTypes).length;
      $scope.p =0;
      var total =0;
      var temp=0;
      temp = len_leavesTypes-1;

     angular.forEach($scope.leavesTypes, function(ltype)
       { 
            $scope.y = 0;
            var amount =0;
            var value;
            val = ($scope.leaves_btw).length-1;

       angular.forEach($scope.leaves_btw, function(leaves_btw){ 
     
       if( $scope.leaves_btw[$scope.y].LPolicyID == $scope.leavesTypes[$scope.p]['LPolicyID'])
           {
              leave_sum.push({"name":($scope.leavesTypes[$scope.p].EnglishName),"count":(amount)});
              amount=amount+1;
           }

           console.log("value of $scope.iteration is : ", $scope.iteration);
 
        if($scope.y == val )
        {         
            console.log("value of y is : ", $scope.y);
            console.log("value of val : ", val);
            console.log("value of p : ", $scope.p);

          sigma_Leaves.push({ "name":($scope.leavesTypes[$scope.p].EnglishName),
            "LPolicyID":($scope.p),  "count":(amount)}); 
              arr.push({"name":sigma_Leaves});     
        }
          $scope.y = $scope.y+1;
     
        }); 
        console.log("value of y is after iteration : ", $scope.y);

    if($scope.p == temp)
      {
        console.log("we are equal");
        console.log("value of b is: ", b);
     
         staffDetails.push({"year1":dateList[b].Year1,
          "year2":dateList[b].Year2,
          "SL":sigma_Leaves[b+1].count
          });         
         
            sigma_Leaves =[];     
            b=b+1;
       }     
      
         $scope.p = $scope.p+1;
       
        });// End of $http Leavetypes            


      });// End of angular leavetypes

//************************************

    }); // End of betweenDates

          firstYear = moment(firstYear, "DD MMM YYYY").add(1,'year').format('DD MMM YYYY');    
          nextYear =  moment(firstYear, "DD MMM YYYY").add(1,'year').format('DD MMM YYYY');
          date0= moment(firstYear, "DD MMM YYYY").add(1,'year').format('YYYY-MM-DD');
          date2= moment(nextYear, "DD MMM YYYY").add(1,'year').format('YYYY-MM-DD');
          dateList.push({"Year1":firstYear,"Year2":nextYear}); 

          console.log("First year istttt: " ,firstYear);
          console.log("Next Year istttttt: ", nextYear); 
          console.log("$scope.iteration: ", $scope.iteration);
          console.log("arr: ", arr); 
           console.log("staff details: " ,staffDetails); 
            
     $scope.iteration = $scope.iteration+1;
    }// End of For loop

    console.log("Date List: ", dateList);

 } // End if
 
  $scope.staffD=staffDetails;
    }); // End of getEmployement 



 }); // End of getUser 

 }]); // End of Material Admin