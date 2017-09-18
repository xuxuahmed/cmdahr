materialAdmin
    .controller('attCtrl', ['$scope', '$log', '$http', 'user',
        function($scope, $log, $http, user) {
            $scope.user = user.data;
            $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            $scope.years = [];
            var d = new Date();

            for (i = 2008; i <= d.getFullYear(); i++) {
                $scope.years.push(i);
            };

            $scope.currMonth = $scope.months[d.getMonth()];
            $scope.currYear = $scope.years[$scope.years.length - 1];
            $scope.records = [];

            // Get Current Month start date
            $http.get("/startMonth/" + $scope.currYear + "/" + $scope.currMonth)
                .then(function(response) {
                    $scope.currStartDate = response.data;
                    var thisYear = d.getFullYear();
                    var thisMonth = d.getMonth();
                    var attendanceStartDate = $scope.currStartDate[0]['monthStart'];
                    var nextYear;
                    var nextMonth = moment(thisMonth, "MM").add(1, 'month').format('MM');

                    if (thisMonth == 12) {
                        nextYear = thisYear + 1;
                        var thisDate = nextYear + '-' + thisMonth;
                        var nextDate = nextYear + '-' + nextMonth;
                    } else {
                        nextYear = thisYear;
                        var thisDate = nextYear + '-' + thisMonth;
                        var nextDate = nextYear + '-' + nextMonth;
                    };

                    var daysRemainingInThisMonth = moment(thisDate, "YYYY-MM").daysInMonth() - attendanceStartDate;
                    var totalDaysInAttendanceMonth = daysRemainingInThisMonth + attendanceStartDate
                    var attendanceDate = attendanceStartDate + '-' + thisMonth + '-' + thisYear;

                    $scope.attendance = [];

                    for (i = 0; i < totalDaysInAttendanceMonth; i++) {
                        var listDate = moment(attendanceDate, "Do MM YYYY").format('Do MMM, YYYY, (dd)');

                        $scope.attendance.push({
                            "date": listDate
                        });

                        attendanceDate = moment(attendanceDate, "Do MM YYYY").add(1, 'day').format('Do MM YYYY');

                    }; // End of For Loop
                });

            $scope.loadValues = function() {

                $http.get("/weekendYear/" + $scope.currYear)
                    .then(function(response) {
                        $scope.weekend = response.data;
                    });

                $http.get("/isHoliday/" + $scope.currYear)
                    .then(function(response) {
                        $scope.holiday = response.data;
                    });

                $http.get("/isLeave/" + $scope.user[0].Ind_ID + "/" + $scope.currYear)
                    .then(function(response) {
                        $scope.leave = response.data;
                    });

                $http.get("/workingHoursCat/" + $scope.currYear + "/" + $scope.user[0].Type)

                .then(function(response) {
                    $scope.workingHours = response.data;

                });
            };

            //----------------------------------------------------------------------------------------            

            //---------------- Functions-----------

            function someValues(chkDate) {

                $http.get("/isHoliday/" + chkDate)
                    .then(function(response) {
                        $scope.holidayDate = response.data;
                        // console.log("$scope.holidayDate: ", $scope.holidayDate);
                        if ($scope.holidayDate.length != 0) {
                            return $scope.holidayDate;
                        }
                    });

            } // End of someValues


            $scope.submitVariables = function() {

                    $scope.currentYear = $scope.currYear;
                    $scope.currentMonth = $scope.currMonth;

                    $http.get("/startMonth/" + $scope.currYear + "/" + $scope.currMonth)
                        .then(function(response) {
                            $scope.currStartDate = response.data;
                            var thisYear = $scope.currYear;
                            var thisMonth = $scope.currMonth;
                            var arrayDate = [];

                            var attendanceStartDate = $scope.currStartDate[0]['monthStart'];
                            console.log("attedance start date:", attendanceStartDate);
                            var nextYear;
                            var nextMonth = moment(thisMonth, "MMM").add(1, 'month').format('MMM');
                            var prevMonth = moment(thisMonth, "MMM").subtract(1, 'month').format('MMM');
                            console.log("thismonth ----", thisMonth);

                            if (thisMonth == "Jan") {
                                console.log("In jan");
                                //console.log("before jan next Year is; ", nextYear);
                                nextYear = thisYear - 1;
                                console.log("Jan next Year is; ", nextYear);
                                var thisDate = thisYear + '-' + thisMonth;
                                var nextDate = nextYear + '-' + prevMonth;
                            } else {
                                nextYear = thisYear;
                                var thisDate = nextYear + '-' + thisMonth;
                                var nextDate = nextYear + '-' + prevMonth;
                            };

                            var daysRemainingInThisMonth = moment(nextDate, "YYYY-MMM").daysInMonth() - attendanceStartDate;
                            var totalDaysInAttendanceMonth = daysRemainingInThisMonth + attendanceStartDate
                            var attendanceDate = attendanceStartDate + '-' + prevMonth + '-' + nextYear;
                            var date1 = moment(attendanceDate, "DD-MMM-YYYY").format("YYYY-MM-DD");
                            var date2 = thisDate + '-' + 20;
                            date2 = moment(date2, "YYYY-MMM-DD").format("YYYY-MM-DD");

                            $scope.attendance = [];
                            var listDate = moment(attendanceDate, "DD-MMM-YYYY").format('Do MMM, YYYY, (dd)');
                            var atDate = moment(listDate, 'Do MMM, YYYY, (dd)').format("YYYY-MM-DD");

                            var j = 0;
                            for (i = 0; i < totalDaysInAttendanceMonth; i++) {

                                console.log("Begning at Date is: ", atDate);
                                var len =[];

                                $http.get("/getStaffInOut/" + $scope.user[0].Ind_ID + "/" + atDate)
                                    .then(function(response) {

                                        $scope.staffLog = response.data;
                                        console.log("response is; ", response.data);

                                        console.log("listDate date: ", listDate);

                                        len =  $scope.staffLog ;

                                        console.log("--len is: ", len);


                                    }); // End of httget getStaffInOut  

                                    console.log("len is; ", len) ;

                                var dutyStart = ($scope.workingHours[0].Start_time);
                                var dutyEnd = ($scope.workingHours[0].End_time);
                                var weekDay = moment(listDate, 'Do MMM, YYYY, (dd)').weekday();
                                var chkDate = moment(listDate, 'Do MMM, YYYY, (dd)').format("YYYY-MM-DD");

                                //  console.log("Week day: ", weekDay);

                                if (weekDay == 5 || weekDay == 6) {
                                    attendanceClass = 'danger';
                                    dutyStart = "<<OFF>>";
                                    dutyEnd = "";
                                };

                                var someDate = $scope.staffLog[j].Signing_DT;
                             var anotherDate = moment(someDate, "YYYY-MM-DD").format("YYYY-MM-DD");


                                // if ($scope.staffLog.length != 0) {
                                //     var j = 0;
                                //     var someDate = $scope.staffLog[j].Signing_DT;
                                //     var anotherDate = moment(someDate, "YYYY-MM-DD").format("YYYY-MM-DD");

                                //     console.log("J is: ", j);

                                //     console.log("1. at Date is: ", atDate);
                                //     console.log("2. list Date s: ", listDate);

                                //     console.log("Another DAte: ", anotherDate);
                                //     console.log("Check Date is: ", chkDate);
                                // }

                                if (anotherDate == chkDate) {
                                    console.log(" am in");
                                    $scope.attendance.push({
                                        "date": listDate,
                                        "dutyStart": dutyStart,
                                        "dutyEnd": dutyEnd,
                                        "Log": $scope.staffLog
                                    });
                                }
                                if (anotherDate != chkDate) {

                                    $scope.attendance.push({
                                        "date": listDate,
                                        "dutyStart": dutyStart,
                                        "dutyEnd": dutyEnd

                                        // "Out1":
                                    });
                                }

                                console.log("Attendance: ", $scope.attendance);

                                listDate = moment(listDate, 'Do MMM, YYYY, (dd)').add(1, 'day').format('Do MMM, YYYY, (dd)');

                                atDate = moment(atDate, 'YYYY-MM-DD').add(1, 'day').format('YYYY-MM-DD');
                                console.log("after atDAte", atDate);
                                j++;

                            }; // End of For Loop                          

                        }); // End of start month
                } // end of submit variables
        }

    ]);