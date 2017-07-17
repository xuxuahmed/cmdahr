materialAdmin
.controller('leaveCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];

        $scope.years=[];

        var d = new Date();
        
        for(i = 2008; i <= d.getFullYear(); i++) 
        {
          $scope.years.push(i);
        };// End of for

        $scope.currMonth = $scope.months[d.getMonth()];       
        $scope.currYear = $scope.years[$scope.years.length - 1];    
        $scope.records = [];

        
        $scope.user = [];
    // $http.get("/getUser/" +$scope.RCN )
      $http.get("/getUser/163" )
        
          .then(function(response){
            $scope.user = response.data;

            $scope.RCN= $scope.user[0].RCN;

            console.log("scope RNC is " , $scope.RCN);



     $http.get("/getService/"+$scope.user[0].Ind_ID )
        
          .then(function(response)
          {
            $scope.service = response.data;

            console.log("service is:  " , $scope.service);

    $scope.i = 0;

    leave_stat = [];

    var today = moment(new Date()).format ('DD MMM YYYY');
    console.log("Today is : ", today);


    var yearStart = moment($scope.service[0]['AssignedDate']).format('DD MMM YYYY');     

    console.log("Year Starts in  : ", yearStart);

// Service Years

    angular.forEach($scope.service, function(services)
    {     
        
        console.log("value of i is: ", $scope.i);    
     
        var testDate = $scope.service[$scope.i]['AssignedDate']; 
      

      if(($scope.service[$scope.i].EndDate) == null)
      {

        console.log("I am in, present year is : ", $scope.service[$scope.i].EndDate);

        var Year1 = moment(today, "DD MMM YYYY").format("YYYY");
        console.log("Year 1 is: ", Year1);

        var Year2 = moment(yearStart, "DD MMM YYYY").format("YYYY");
        console.log("Year 2 is: ", Year2);


       diff_years = Year1 - Year2;
       

       console.log("Difference in years is: ", diff_years);

       var nextYear =  moment(yearStart, "DD MMM YYYY").add(1,'year').format('DD MMM YYYY');
       
       var firstYear = moment(yearStart, "DD MMM YYYY").format('DD MMM YYYY');

       // Leaves
       var date1 = moment(yearStart, "DD MMM YYYY").format('YYYY-MM-DD');
       var date2= moment(yearStart, "DD MMM YYYY").add(1,'year').format('YYYY-MM-DD');

       $http.get("/LeaveBtw/"+$scope.user[0].Ind_ID+"/"+date1+"/"+date2)
        
          .then(function(response){
            $scope.leaves_btw = response.data;

           console.log("First Year: ", firstYear);
           console.log("Leaves between date1 and date2: ", $scope.leaves_btw);

           Leaves_sum= [];


     angular.forEach($scope.leaves_btw, function(leaves_btw)
       { 
        console.log("$scope.leaves_btw.LPolicyID= ",$scope.leaves_btw.LPolicyID );
          if( $scope.leaves_btw.LPolicyID == "1")

          {
            console.log("I am in 0 position");
          }

       });// End of angular forEach

             });



          for (var q = 0; q <=diff_years; q++)
          {

              leave_stat.push({ "date" : firstYear, nextYear });
      

              console.log("Value of leave_stat" , leave_stat);

              firstYear= moment(firstYear, "DD MMM YYYY").add(1,'year').format('DD MMM YYYY');

              nextYear= moment(nextYear, "DD MMM YYYY").add(1,'year').format('DD MMM YYYY');

              console.log("First Y" , firstYear);

              console.log("Next Y" , nextYear); 

          }// End of for loop
        
      }// End of if 
      else
        { 
          $scope.i = $scope.i +1;
        }// End of else
         

       });;

   
      

      }); // End of getService
 

    });  
 

 }]);
 