materialAdmin
    .controller('leaveCtrl', ['$scope', '$log', '$http', 'user',
        function($scope, $log, $http, user) {
            $scope.user = user.data;
            $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];

            $scope.employDate;
            var today = moment(new Date()).format('DD MMM YYYY');
            var employDetails = [];
            var diff_years;
            var listArray = [];
            var getWeeekends = [];

            $http.get("/getEmployment/" + $scope.user[0].Ind_ID)
                .then(function(response) {
                    $scope.employment = response.data;
                    $scope.employDate = moment($scope.employment[0]['Employeddate']).format('DD MMM YYYY');


                    getmyweekend = function(date1, date2) {

                        return $http.get("/btwWeekend/" + date1 + "/" + date2)
                            .success(function(data) {
                                $scope.weekend = data;
                                // console.log("weekends in btwWeekend: ", $scope.weekend);
                            });
                    }

                    getmyholidays = function(date1, date2) {

                        return $http.get("/btwHoliday/" + date1 + "/" + date2)
                            .then(function(data) {

                                $scope.holiday = data.data;

                            });
                    }

                    if (($scope.employment[0].ResignedDate) == null) {

                        var Year1 = moment(today, "DD MMM YYYY").format("YYYY");
                        var yearEnd =Year1+"-"+ moment($scope.employment[0].Employeddate, "YYYY-MM-DD").format("MM-DD") ;
                        console.log("Year End is: ", yearEnd);

                        var Year2 = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").format("YYYY");

                        diff_years = Year1 - Year2;

                        if(yearEnd > Year1){
                            console.log("this date is greater");
                            diff_years = diff_years +1;
                        }

                        console.log("diff years is: ", diff_years);

                        var nextYear = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").add(1, 'year').format('DD MMM YYYY');

                        var firstYear = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").format('DD MMM YYYY');

                        var date1 = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").format('YYYY-MM-DD');

                        var date2 = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").add(1, 'year').format('YYYY-MM-DD');

                        var x = 0;

                        for (p = 0; p < diff_years; p++) {

                            // console.log("value of p is: ", p);

                            var d3 = moment(date1, "YYYY-MM-DD").add(diff_years, 'year').format('YYYY-MM-DD');

                            getmyholidays(d1, d3).then(function(data) {

                                hol = $scope.holiday;
                            });

                            if (p == 0) {

                                var d1 = date1;
                                var d2 = date2;
                                var f1 = date1;
                                var f2 = date2;

                                var week = [];
                                getmyweekend(d1, d2).then(function(data) {
                                    var week = $scope.weekend;

                                });

                                var D1 = d1;
                                var D2 = d2;
                            } // if (p==0)

                            if (p != 0) {

                                f1 = moment(f1, "YYYY-MM-DD").add(1, 'year').format('YYYY-MM-DD');
                                f2 = moment(f2, "YYYY-MM-DD").add(1, 'year').format('YYYY-MM-DD');
                            }

                            getCount(p, f1, f2);

                        } // End for for loop


                        checkHoliday = function(date) {

                            return $http.get("/isHoliday/" + date1)
                                .then(function(data) {
                                    $scope.chkHoliday = data.data;
                                    //  console.log("Check holidays re: ",$scope.chkHoliday = data.data );
                                });
                        }

                        isWeekend = function(date) {

                            return $http.get("/isWeekend/" + date1)
                                .then(function(data) {
                                    $scope.chkHoliday = data.data;
                                    //  console.log("Check holidays re: ",$scope.chkHoliday = data.data );
                                });
                        }

                        isLeaves = function() {

                            return $http.get("/leavetypes/")
                                .then(function(data) {
                                    $scope.leavetypes = data.data;
                                    //  console.log("Check holidays re: ",$scope.chkHoliday = data.data );
                                });
                        }

                        ifHoliday = function(date1) {
                            // console.log("date1 is: ", date1);

                            return $http.get("/isHoliday/" + date1)
                                .then(function(data) {
                                    $scope.chkHoliday = data.data;                                   
                                });

                        }

                        function getCount(p, d1, d2, holid) {
                            listLeaveTypes = [];
                            holidayDate = [];

                            $http.get("/leavetypes/")

                            .then(function(response) {

                                getmyweekend(d1, d2).then(function(data) {
                                    var weekend = $scope.weekend;
                                });

                                var size = p;

                                $scope.leaveTypes = response.data;
                                listLeaveTypes = $scope.leaveTypes;

                                var i = 0; // to find the policy id                               

                                angular.forEach($scope.leaveTypes, function(leavesTypes) {
                                    var y = 0;
                                    var temp = $scope.leaveTypes[i].LPolicyID;

                                    // countLeaves / 45 / 2015 - 09 - 05 / 2016 - 09 - 05 / 3
                                    $http.get("/countLeaves/" + $scope.user[0].Ind_ID + "/" + d1 + "/" + d2 + "/" + $scope.leaveTypes[i].LPolicyID)
                                        //  $http.get("/countLeaves/45/2015-09-05/2016-09-05/3")
                                        .then(function(response) {

                                            $scope.leaves = response.data;
                                            if (p == 3) {
                                                console.log("leave are: ", $scope.leaves);
                                            }
                                            // console.log("I am in in: year is before", p);

                                            if ($scope.leaves.length != 0) {

                                                var arraySize = $scope.leaves.length;
                                                var s = 0;
                                                var count = 0;
             
                                                for (var h = 0; h < arraySize; h++) {
                                                    // check if the date is a weekend or a holiday

                                                    // check if it is a weekday
                                                    if (($scope.leaves[s].LFromDT != $scope.weekend[0].Day1) ||
                                                        ($scope.leaves[s].LFromDT != $scope.weekend[0].Day2)) {

                                                        if (($scope.leaves[s].LFromDT) != ($scope.leaves[s].LToDt)) {

                                                            var from1 = moment($scope.leaves[s].LFromDT, 'YYYY-MM-DD').startOf('day');
                                                            var to1 = moment($scope.leaves[s].LToDt, 'YYYY-MM-DD').startOf('day');
                                                            var duration1 = moment(to1.diff(from1));
                                                            var one_day1 = 1000 * 60 * 60 * 24;
                                                            var days1 = Math.round(duration1 / one_day1) + 1;
                                                            var rounds = days1;
                                                            var y2 = moment($scope.leaves[s].LFromDT, 'YYYY-MM-DD');
                                                            console.log("y2 is: ", y2);
                                                            console.log("rounds is: ", rounds);

                                                            for (var j = 0; j < rounds; j++) {
                                                                // console.log("Iteration is: ", j);
                                                                $http.get("/isHoliday/" + y2)
                                                                    .then(function(response) {
                                                                        $scope.chkHoliday = response.data;
                                                                        listHoli = response.data;
                                                                       // console.log(" I am in side");
                                                                    });

                                                                dayofWeek = moment(y2, 'YYYY-MM-DD').format('ddd');
                                                                // console.log(" Day of the week is : ", dayofWeek);

                                                                if (dayofWeek == $scope.weekend[0].Day1) {
                                                                    console.log(" Day of the week is : ", dayofWeek, y2);
                                                                    days1 = days1 - 1;
                                                                    // console.log(" after Day of the week is : ", dayofWeek , days1);
                                                                }

                                                                if (dayofWeek == $scope.weekend[0].Day2) {
                                                                    console.log(" Day of the week is : ", dayofWeek, y2);
                                                                    days1 = days1 - 1;
                                                                    //   console.log(" after Day of the week is : ", dayofWeek , days1);
                                                                }

                                                                var len = 0;                                              

                                                                if ($scope.chkHoliday.length != 0) {
                                                                    // var holiday =  $scope.chkHoliday.length;
                                                                    console.log("holiday is -----: ", $scope.chkHoliday.length);
                                                                }

                                                                console.log("lllll", len);
                                                                console.log("length: ", listHoli.length);
                                                                // console.log("prototype : ", yes);

                                                                if (len != 0) {

                                                                    console.log("Yes today is a holiday", holidayDate);
                                                                    console.log("1. days is: ", days1);
                                                                    days1 = days1 - 1;
                                                                }
                                                                console.log("days is: ", days1);

                                                                y2 = moment(y2, "YYYY-MM-DD").add(1, 'day').format('YYYY-MM-DD');

                                                                // console.log("y2 is: --- ", y2);

                                                            } // End of for loop

                                                        } // End of if not weekend


                                                        if (($scope.leaves[s].LFromDT) == ($scope.leaves[s].LToDt)) {

                                                            var from = moment($scope.leaves[s].LFromDT, 'YYYY-MM-DD').startOf('day');
                                                            var to = moment($scope.leaves[s].LToDt, 'YYYY-MM-DD').startOf('day');
                                                            var duration1 = moment(to.diff(from));
                                                            var one_day = 1000 * 60 * 60 * 24;
                                                            var days1 = Math.round(duration1 / one_day) + 1;

                                                        } // End of if equal

                                                        count = count + days1;

                                                        s++;
                                                    } // End of for

                                                }

                                                listArray.push({
                                                    "Name": ($scope.leaves[y].LDesc),
                                                    "Leaves": count,
                                                    "LPolicyID": (temp),
                                                    "year": (p)
                                                });

                                                $scope.dd = [];
                                                $scope.dd = listArray;
                                            }

                                        }); // End of getEmployment

                                    i++;
                                });

                            }); // End of leaveTypes

                            console.log("List Array ", listArray);
                            //  return;
                        } // End of function

                    }
                    getArray(listArray, diff_years, $scope.employDate);

                }); // End of getEmployment
            finalLeaves = [];

            function getArray(listArray, years, empDate) {
                listLeaveTypes = [];
                console.log("List Array:    ======= ", listArray);
                isLeaves().then(function(data) {
                    listLeaveTypes = $scope.leavetypes;
                });

                $scope.arrayLeaves = [];
                var yearStart = moment(empDate, "DD-MMM-YYYY").format('DD MMM YYYY');
                var firstYear = moment(yearStart, "DD MMM YYYY").format('DD MMM YYYY');
                var secondYear = moment(firstYear, "DD MMM YYYY").add(1, 'year').format('DD MMM YYYY');
                var temp = 0;
                $scope.array1 = listArray;

                for (var z = 0; z < diff_years; z++) {

                    const some = 0;
                    $scope.arrayLeaves.push({
                        "year1": firstYear,
                        "year2": secondYear,
                        "l1": listArray

                    }); // End of arrayLeaves push

                    firstYear = moment(firstYear, "DD MMM YYYY").add(1, 'year').format('DD MMM YYYY');
                    secondYear = moment(secondYear, "DD MMM YYYY").add(1, 'year').format('DD MMM YYYY');
                    temp++;

                } // End for loop
                console.log(" array Leaves are: ", $scope.arrayLeaves);

            } // getArray Function
        } // material function scope
    ]); // End of Material Admin