    // GET ATTENDANCE START DATE
    $scope.getAttendance =  function(attendanceStartYear,attendanceStartMonth){

    UserService.attendanceStartYear =$scope.currentYear ;
    UserService.attendanceStartMonth = $scope.currentMonth;

    // var attendanceStartYear = 2017;

    $http.get(UserService.globalRoot + "/attendanceStartDate/"+attendanceStartYear+"/"+attendanceStartMonth)
        .then(function (response) {
            $scope.startDate = response.data;

            var thisYear =  UserService.attendanceStartYear;
            var thisMonth = UserService.attendanceStartMonth;
            var attendanceStartDate = $scope.startDate[0]['startDay'];

            var nextYear;
            var nextMonth = moment(thisMonth, "MM").add(1,'month').format('MM');
            if(thisMonth == 12){
                nextYear = thisYear+1;
                var thisDate = nextYear+'-'+thisMonth;
                var nextDate = nextYear+'-'+nextMonth;
            }else{
                nextYear = thisYear;
                var thisDate = nextYear+'-'+thisMonth;
                var nextDate = nextYear+'-'+nextMonth;
            };

            var daysRemainingInThisMonth = moment(thisDate, "YYYY-MM").daysInMonth()-attendanceStartDate;
            var totalDaysInAttendanceMonth = daysRemainingInThisMonth+attendanceStartDate
            var attendanceDate = attendanceStartDate+'-'+thisMonth+'-'+thisYear;
            var tableHead = document.getElementById('attendanceTable');

            tableHead.innerHTML = tableHead.innerHTML + '<thead><tr><th>Date</th><th>Duty Time</th><th>IN</th><th>OUT</th><th>IN</th><th>OUT</th><th>IN</th><th>OUT</th><th>IN</th><th>OUT</th></tr></thead>';

            for (i = 0; i < totalDaysInAttendanceMonth; i++) {
                var listDate = moment(attendanceDate, "Do MM YYYY").format('Do MMM, YYYY, (dd)');
                attendanceDate = moment(attendanceDate, "Do MM YYYY").add(1,'day').format('Do MM YYYY');

                var weekDay = moment(attendanceDate, "Do MM YYYY").weekday();
                var attendanceClass = '';

                if(weekDay == 6 || weekDay == 0){
                    attendanceClass = 'danger';
                };



                tableBody.innerHTML = tableBody.innerHTML + '<tr class="'+attendanceClass+'"><td>'+listDate+'</td><td>'+'N/A'+'</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td><td>Row 3</td></tr>';

                // end find the duty type of user

            };

        });
    };
    // END GET ATTENDANCE START DATE

    var thisYear = moment().format('YYYY');
    var thisMonth = moment().format('MM');
    $scope.getAttendance(thisYear,thisMonth);

       $scope.submitVariables=function(currentMonth,currentYear)
    {
       

      console.log("Current Year: ",$scope.currentMonth);
      console.log("Current Month: ",$scope.currentYear);

    }
