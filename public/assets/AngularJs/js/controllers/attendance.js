materialAdmin
.controller('attCtrl', ['$scope','$log','$http',
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

       

// Get Current Month start date
           $http.get("/startMonth/" +$scope.currYear +"/"+$scope.currMonth)
         
          .then(function(response){
            $scope.currStartDate = response.data;

            var thisYear =   $scope.currYear;
            var thisMonth = d.getMonth();

            // console.log("This Month is : ", thisMonth);
           // console.log("This Year is : ", thisYear);

           var attendanceStartDate = $scope.currStartDate[0]['monthStart'];
           // console.log("Attendance Start Date is: ", attendanceStartDate);

            var nextYear;
            var nextMonth = moment(thisMonth, "MM").add(1,'month').format('MM');

            // console.log("next month is: ", nextMonth);
            if(thisMonth == 12){
                nextYear = thisYear+1;
                var thisDate = nextYear+'-'+thisMonth;
                var nextDate = nextYear+'-'+nextMonth;
            }else{
                nextYear = thisYear;
                var thisDate = nextYear+'-'+thisMonth;
                var nextDate = nextYear+'-'+nextMonth;
            };

        // console.log("Next Year is  : ", nextYear);

        // console.log("Default Month Start Date is: ",$scope.currStartDate);

           
            var daysRemainingInThisMonth = moment(thisDate, "YYYY-MM").daysInMonth()-attendanceStartDate;
            var totalDaysInAttendanceMonth = daysRemainingInThisMonth+attendanceStartDate
            var attendanceDate = attendanceStartDate+'-'+thisMonth+'-'+thisYear;

            $scope.attendance=[];
// console.log("Days Reamining in this month is: " ,daysRemainingInThisMonth);
// console.log("Total Days in this month is : " ,totalDaysInAttendanceMonth);
// console.log("Attendance Date is : " ,attendanceDate);

              for (i = 0; i < totalDaysInAttendanceMonth; i++) {
                var listDate = moment(attendanceDate, "Do MM YYYY").format('Do MMM, YYYY, (dd)');
                // console.log("List Date is: ", listDate);
               
             //  $scope.attendance.push('listDate':listDate);

                $scope.attendance.push({ "date" : listDate }); 


                attendanceDate = moment(attendanceDate, "Do MM YYYY").add(1,'day').format('Do MM YYYY');
               // console.log("Attendance Date is : ", attendanceDate);

                var weekDay = moment(attendanceDate, "Do MM YYYY").weekday();

                 // console.log("WeekDay is  : ", weekDay);

                var attendanceClass = '';

                if(weekDay == 6 || weekDay == 0){
                    attendanceClass = 'danger';
                };


            }; // End of For Loop

            // console.log("Attendance Final: ", $scope.attendance);

          });


//tableBody.innerHTML = tableBody.innerHTML + '<tr class="'+attendanceClass+'"><td>'+listDate+'</td><td>'+'N/A'+'</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td></tr>';

          //==============================


      $scope.updateTable = function () {





       $http.get('/getAttendanceYear/2017-03-02/81')
         
          .then(function(response){
            $scope.records = response.data;

          

          });

//=============



      }

  $scope.submitVariables=function(currMonth,currYear,RCN)
    {
      
          $http.get("/weekendYear/" +$scope.currYear)
         
          .then(function(response){
            $scope.weekend = response.data;

            // console.log("Weekends are: ",$scope.weekend);

          });

           $http.get("/isHoliday/" +$scope.currYear)
         
          .then(function(response){
            $scope.holiday = response.data;

            // console.log("Holidays are: ",$scope.holiday);

          });


          $scope.user = [];
     $http.get("/getUser/" +$scope.RCN )
        
          .then(function(response){
            $scope.user = response.data;

            // console.log("Current User: ",$scope.user[0].Ind_ID);
           


    $http.get("/isLeave/" +$scope.user[0].Ind_ID +"/"+$scope.currYear)
         
          .then(function(response){
            $scope.leave = response.data;

            // console.log("Leaves: ",$scope.leave);

          });

          $http.get("/workingHoursCat/" +$scope.currYear+"/"+$scope.user[0].Type)
         
          .then(function(response){
            $scope.workingHours = response.data;
            
 // console.log("WorkingHour are: ",$scope.workingHours);
           
           });

            

           

          });
         


        // console.log("Current Month: ",$scope.currMonth);
        // console.log("Current Year: ",$scope.currYear);
        // console.log("Current User RCN: ",$scope.RCN);


        //====================================

          $scope.currentYear = $scope.currYear;
          $scope.currentMonth = $scope.currMonth;

// console.log("New selected years is: ", $scope.currentYear);
// console.log("New selected month is: ", $scope.currentMonth);


        $http.get("/startMonth/" +$scope.currentYear +"/"+$scope.currentMonth)
         
          .then(function(response){
            $scope.currentStartDate = response.data;

            var thisYear =   $scope.currentYear;
            var thisMonth = ($scope.currentMonth);

            // console.log("This Month is : ", thisMonth);
           // console.log("This Year is : ", thisYear);

           var attendanceStartDate = $scope.currentStartDate[0]['monthStart'];
           // console.log("Attendance Start Date is:* ", attendanceStartDate);

            var nextYear;
            var nextMonth = moment(thisMonth, "MMM").add(1,'month').format('MMM');

            // console.log("next month is: ", nextMonth);
            if(thisMonth == 12){
                nextYear = thisYear+1;
                var thisDate = nextYear+'-'+thisMonth;
                var nextDate = nextYear+'-'+nextMonth;
            }else{
                nextYear = thisYear;
                var thisDate = nextYear+'-'+thisMonth;
                var nextDate = nextYear+'-'+nextMonth;
            };

        // console.log("Next Year is  : ", nextYear);

        // console.log("Default Month Start Date is: ",$scope.currStartDate);

           
            var daysRemainingInThisMonth = moment(thisDate, "YYYY-MMM").daysInMonth()-attendanceStartDate;
            var totalDaysInAttendanceMonth = daysRemainingInThisMonth+attendanceStartDate
            var attendanceDate = attendanceStartDate+'-'+thisMonth+'-'+thisYear;

            $scope.attendance=[];

// console.log("Days Reamining in this month is: " ,daysRemainingInThisMonth);
// console.log("Total Days in this month is : " ,totalDaysInAttendanceMonth);
// console.log("Attendance Date is : " ,attendanceDate);
     



              for (i = 0; i < totalDaysInAttendanceMonth; i++) {
                var listDate = moment(attendanceDate, "Do MMM YYYY").format('Do MMM, YYYY, (dd)');
                // console.log("List Date is: ", listDate);

$scope.currentDate = moment(attendanceDate,"Do MMM YYYY").format( 'YYYY-MM-DD');
console.log("Current Date is: " , $scope.currentDate);

 $http.get("/getAttendanceYear/" +$scope.currentDate+"/"+$scope.RCN)
         
          .then(function(response){
            $scope.check_in = response.data;
            
     
       console.log("Checking time for date: " + response.data);
           
           });
        
     //################################################################################################          
             //  $scope.attendance.push('listDate':listDate);

                $scope.attendance.push({ 
               "id" : i,
               "date" : listDate,
               "duty_time_start": $scope.workingHours[0].Start_time,
               "duty_time_end": $scope.workingHours[0].End_time,
                "checkinout": $scope.check_in.checktime

               //  tableBody.innerHTML = tableBody.innerHTML + '<tr><td>'+listDate+'</td><td>'+'N/A'+'</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td></tr>';

        
    });


                attendanceDate = moment(attendanceDate, "Do MMM YYYY").add(1,'day').format('Do MMM YYYY');
               // console.log("Attendance Date is : ", attendanceDate);

                var weekDay = moment(attendanceDate, "Do MMM YYYY").weekday();

                 // console.log("WeekDay is  : ", weekDay);

                var attendanceClass = '';

                if(weekDay == 6 || weekDay == 0){
                    attendanceClass = 'danger';
                };


            };
             // console.log("Attendance Final: ", $scope.attendance);

          });


    }     


         // angular.forEach($scope.dates, function(dates){


         //     $scope.records.push(dates);
         //   });


        // console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));

          //   console.log("New records value are: ", $scope.records)   ;

      $scope.updateTable();

 }]);
 