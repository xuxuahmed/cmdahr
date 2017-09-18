materialAdmin
    .controller('historyCtrl', ['$scope', '$log', '$http', 'user', 'leaveTypes', 'allLeaves', 'employ',
        function($scope, $log, $http, user, leaveTypes, allLeaves, employ) {
            $scope.user = user.data;
            $scope.allLeaves = allLeaves.data;
            $scope.employ = employ.data;
            $scope.leaveTypes = leaveTypes.data;
            $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];

            // Get User information

            $scope.post = [];
            $scope.history = [];
            $scope.i = 0;
            listOffice = [];
            listArray = [];

            //  =========Designation History Details of the user
            // Get designation history : user service
            $http.get("/getService/" + $scope.user[0].Ind_ID)
                .then(function(response) {
                    $scope.service = response.data;
                    // Iterate through the designation to find service details

                    listDesignation = [];
                    var f = 0;

                    angular.forEach($scope.service, function(services) {
                        var testDate = $scope.service[$scope.i]['AssignedDate'];
                        var AssignedDate = moment(testDate, "YYYY MM DD").format(' DD MMM YYYY');
                        var endDate = $scope.service[$scope.i]['EndDate'];
                        var terminateDate = moment(endDate, "YYYY MM DD").format(' DD MMM YYYY');
                        var salary = $scope.service[$scope.i]['EmpSalary'];
                        var DID = $scope.service[$scope.i].Desig_ID;
                        var chit = $scope.service[$scope.i].RefDoc;
                        var officeID1 = $scope.service[$scope.i]['OfficeID'];

                        $http.get("/selectOffice/" + officeID1)

                        .then(function(response) {
                            $scope.officeName = response.data;

                            // console.log("Value in office name" ,$scope.officeName); 

                            angular.forEach($scope.officeName, function(office) {

                                listOffice.push({
                                    "name": ($scope.officeName[0].AbrName)
                                });
                                $scope.h = $scope.h + 1;

                            }); // End of Angular ForEach office

                        }); // End of selectOffice

                        $scope.h = 0;
                        listPost = [];
                        officeABR = [];
                        console.log("value of post: ", (listPost[0]));
                        officeABR = listOffice;

                        // console.log("value in ABR: ", officeABR[0].name);

                        listDesignation.push({
                            "assigned": (AssignedDate),
                            "terminate": (terminateDate),
                            "salary": (salary)
                        });

                        $scope.history.push({
                            "amount": (listDesignation[$scope.i].salary),
                            "no": ($scope.i + 1),
                            "assigned": (listDesignation[$scope.i].assigned),
                            "terminate": (listDesignation[$scope.i].terminate)
                        });

                        $http.get("/userSalaryPost/" + $scope.service[$scope.i].Post_ID)

                        .then(function(response) {
                            //  console.log( "value of f " , f);
                            $scope.salaryPost = response.data;
                            listPost.push({
                                "post": ($scope.salaryPost[0].LName)
                            });

                            //$scope.age.splice(0,0,{childCount:"Child 1 Age"})

                            $scope.post.push({
                                "post": ($scope.salaryPost[0].LName)
                            });

                        }); // End of UserSalaryPost

                        //   console.log("value of salary post", $scope.post);

                        $scope.i = $scope.i + 1;

                    }); // End of Angular ForEach function services

                    //   console.log("Values of history: ", $scope.history);

                }); // End of $http getService


            //=============Allowance Details=======================================================
            $scope.allowance = [];
            $scope.q = 0;
            var temp;

            // get all the allowance for an employee
            $http.get("/viewEmpAllowance/" + $scope.user[0].Ind_ID)

            .then(function(response) {
                $scope.empAllow = response.data;
                //  console.log("Employee allowance is: ", $scope.empAllow);

                listAmount = [];
                $scope.p = 0;

                angular.forEach($scope.empAllow, function(value, key) {

                    temp = $scope.empAllow[$scope.q]['Allow_ID'];
                    var empAssignedDate = moment($scope.empAllow[$scope.q].FromDate, "YYYY MM DD").format(' DD MMM YYYY');
                    var empTermDate = moment($scope.empAllow[$scope.q].ToDate, "YYYY MM DD").format(' DD MMM YYYY');

                    listAmount.push({
                        "amount": ($scope.empAllow[$scope.q].amount),
                        "remarks": ($scope.empAllow[$scope.q].Remarks)
                    });

                    $http.get("/viewAllowance/" + temp)

                    .then(function(response) {

                        $scope.AllowanceName = response.data;
                        listArray = [];
                        angular.forEach($scope.AllowanceName, function(AllowanceNames) {

                            listArray.push({
                                "name": ($scope.AllowanceName[0].AllowName)
                            });

                        }); // End of Angular ForEach history

                        $scope.allowance.push({
                            "Name": (listArray[0].name),
                            "Amount": (listAmount[$scope.p].amount),
                            "remarks": (listAmount[$scope.p].remarks),
                            "assigned": (empAssignedDate),
                            "terminated": (empTermDate),
                            "no": ($scope.p + 1)
                        });

                        $scope.p = $scope.p + 1;
                    });

                    // End of http get Veiw Allowance

                    $scope.q = $scope.q + 1;

                }); // End of Angular ForEach history      


            }); // End of View EmpAllowance

            getmyweekend = function(d1, d2) {

                return $http.get("/btwWeekend/" + d1 + "/" + d2)
                    .success(function(data) {
                        $scope.weekend = data;
                        // console.log("weekends in btwWeekend: ", $scope.weekend);
                    });
            }


            ifHoliday = function(date1) {

                return $http.get("/isHoliday/" + date1)
                    .then(function(data) {
                        $scope.chkHoliday = data.data;

                    });
            }


            //======================== staff leaves history
            getUserHistory();

            function getUserHistory() {

                listLeaves = $scope.leaveTypes;
                console.log("Leave Types are: ", $scope.leaveTypes);
                var d1 = $scope.employ[0].Employeddate;
                var d2 = moment(new Date()).format('YYYY-MM-DD');
                console.log("d1: ", d1, "d2: ", d2);
                var Year1 = moment(d2, "YYYY-MM-DD").format("YYYY"); //employed year
                var Year2 = moment(d1, "YYYY-MM-DD").format("YYYY"); //this year 
                diff_years = Year1 - Year2;
                var thisYear = ($scope.employ[0].Employeddate);
                var nextYear = moment(d1, "YYYY-MM-DD").add(1, 'year').format("YYYY-MM-DD");

                for (var i = 0; i < diff_years; i++) {

                    angular.forEach(listLeaves, function(listLeaves) {
                        var y = 0;
                        var temp = listLeaves.LPolicyID;
                        getmyweekend(d1, d2).then(function(data) {
                            $scope.weekend = data.data;                         
                        });

                        console.log("next year:", nextYear, " This year: ", thisYear);

                        $http.get("/countLeaves/" + $scope.user[0].Ind_ID + "/" + thisYear + "/" + nextYear + "/" + temp)

                        .then(function(response) {

                            $scope.leaves = response.data;

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

                                            for (var j = 0; j < rounds; j++) {
                                                var len = 0;

                                                dayofWeek = moment(y2, 'YYYY-MM-DD').format('ddd');

                                                if (dayofWeek == $scope.weekend[0].Day1) {

                                                    days1 = days1 - 1;                                                   
                                                }

                                                if (dayofWeek == $scope.weekend[0].Day2) {

                                                    days1 = days1 - 1;                                                    
                                                }

                                                function myFunction(date1) {
                                                   var len =0;

                                                   $http.get("/isHoliday/" + date1)
                                                        .then(function(data) {
                                                            $scope.chkHoliday = data.data;                                                           
                                                            len = $scope.chkHoliday.length;
                                                            console.log("len is: ", len);
                                                            console.log("days1 is; ", days1);
                                                            

                                                        });

                                                        if (len==1){
                                                            days1 = days1 - 1;}
                                                    
                                                }

                                               myFunction(y2); // Function is called, return value will end up in x

                                                

                                                y2 = moment(y2, "YYYY-MM-DD").add(1, 'day').format('YYYY-MM-DD');
                                            }

                                            var start = moment($scope.leaves[s].LFromDT, 'YYYY-MM-DD').format('DD-MMM-YYYY');
                                            var end = moment($scope.leaves[s].LToDt, 'YYYY-MM-DD').format('DD-MMM-YYYY');

                                            listArray.push({
                                                "id": $scope.leaves[s].LID,
                                                "leaves": (listLeaves.EnglishName),
                                                "start": (start),
                                                "ends": (end),
                                                "days": (days1),
                                                "desc": $scope.leaves[s].LDesc
                                            }); // End of listArray

                                            count = count + days1;
                                        } //End of if

                                        if (($scope.leaves[s].LFromDT) == ($scope.leaves[s].LToDt)) {

                                            var from = moment($scope.leaves[s].LFromDT, 'YYYY-MM-DD').format('DD-MMM-YYYY');
                                            var to = moment($scope.leaves[s].LToDt, 'YYYY-MM-DD').format('DD-MMM-YYYY');
                                            days1 = 1;
                                            listArray.push({
                                                "id": $scope.leaves[s].LID,
                                                "leaves": (listLeaves.EnglishName),
                                                "start": (from),
                                                "ends": (to),
                                                "days": (days1),
                                                "desc": $scope.leaves[s].LDesc
                                            }); // End of listArray

                                        } // End of if

                                        s++;
                                    } // End of if

                                } // End of for loop

                                // console.log("listArray is: ", listArray);
                                $scope.dd = listArray;
                            }

                        }); // End of count Leaves

                    }); // End of getEmployment

                    nextYear = moment(nextYear, "YYYY-MM-DD").add(1, 'year').format("YYYY-MM-DD");
                    thisYear = moment(thisYear, "YYYY-MM-DD").add(1, 'year').format("YYYY-MM-DD");

                }

            } // End of getUserHistory function
        }
    ]); // End of Material Admin