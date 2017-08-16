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
                        var weekDay = moment(attendanceDate, "Do MM YYYY").weekday();
                        var attendanceClass = '';

                        if (weekDay == 6 || weekDay == 0) {
                            attendanceClass = 'danger';
                        };
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


$http.get("/countAttBtw/45/2017-02-20/2017-03-21")

                .then(function(response) {
                    $scope.newdata = response.data;
                    console.log("new data is: ", $scope.newdata);


                });




            $scope.submitVariables = function() {

                $scope.currentYear = $scope.currYear;
                $scope.currentMonth = $scope.currMonth;

                $http.get("/startMonth/" + $scope.currentYear + "/" + $scope.currentMonth)

                .then(function(response) {
                    $scope.currentStartDate = response.data;

                    var thisYear = $scope.currentYear;
                    var thisMonth = ($scope.currentMonth);
                    var attendanceStartDate = $scope.currentStartDate[0]['monthStart'];
                    var nextYear;
                    var nextMonth = moment(thisMonth, "MMM").add(1, 'month').format('MMM');

                    if (thisMonth == 12) {
                        nextYear = thisYear + 1;
                        var thisDate = nextYear + '-' + thisMonth;
                        var nextDate = nextYear + '-' + nextMonth;
                    } else {
                        nextYear = thisYear;
                        var thisDate = nextYear + '-' + thisMonth;
                        var nextDate = nextYear + '-' + nextMonth;
                    };

                    var daysRemainingInThisMonth = moment(thisDate, "YYYY-MMM").daysInMonth() - attendanceStartDate;
                    var totalDaysInAttendanceMonth = daysRemainingInThisMonth + attendanceStartDate
                    var attendanceDate = attendanceStartDate + '-' + thisMonth + '-' + thisYear;
                    var date1 = thisYear + '-' + moment($scope.currMonth, "MMM").format("MM") + '-' + attendanceStartDate;
                    var date2 = thisYear + '-' + moment(nextMonth, "MMM").format("MM") + '-' + attendanceStartDate;




                    console.log("date 1: ", date1);
                    //  console.log("date 2: " ,date2);

                    $scope.attendance = [];
                    // console.log("attendance date is: ", attendanceDate);

                    $http.get("/staffAttBtw/" + $scope.user[0].Ind_ID + "/" + date1 + "/" + date2)
                        .then(function(response) {

                            $scope.check_in = response.data;

                            // console.log("$scope.check_in: ", $scope.check_in);

                            var dateY = $scope.check_in.length;
                            console.log("datY is (Total nof of Days between 2 dates): ", dateY);
                            var w = 0;
                            var listDate = [];


                            // get list date and save it to an array
                            var checkDate = date1;
                            var arrayDate = []
                            var tempDate;
                            checkDate = moment(date1, "DD MMM YYYY").add(1, 'day').format('DD MMM YYYY');
                            console.log("check Date is: ", checkDate);


                            var tempDate = moment(checkDate, "DD MMM YYYY").format("YYYY-MM-DD");
                            console.log("Initial Temp Date is: ", tempDate);

                            console.log("Check in data: ", $scope.check_in);

                            for (var p = 0; p < totalDaysInAttendanceMonth; p++) {



                                arrayDate.push({
                                    "day": (w),
                                    "Date": (tempDate)
                                });

                                w = w + 1;

                            }

                            console.log("arrayDate is: ", arrayDate);

                        });

                });

            }
        }
    ]);