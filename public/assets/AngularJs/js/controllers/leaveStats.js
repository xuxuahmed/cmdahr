materialAdmin
    .controller('leaveCtrl', ['$scope', '$log', '$http', 'user',
        function($scope, $log, $http, user) {
            $scope.user = user.data;
            $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];
            var staff = [];
            $scope.employDate;
            var today = moment(new Date()).format('DD MMM YYYY');
            var employDetails = [];
            var diff_years;
            var listArray = [];
            var getWeeekends = [];
           function loadVariables(date1, date2){

                 $http.get("/btwWeekend/"+date1+"/" + date2)
                    .then(function(response) {
                        $scope.weekend = response.data;
                        console.log("Loaded weekends are: ", $scope.weekend);


                    });

                $http.get("/btwHoliday/"+date1+"/" + date2)
                    .then(function(response) {
                        $scope.holiday = response.data;

                    });
                     
                      getWeeekends =  $scope.weekend;
           }



            $http.get("/getEmployment/" + $scope.user[0].Ind_ID)
                .then(function(response) {
                    $scope.employment = response.data;
                    $scope.employDate = moment($scope.employment[0]['Employeddate']).format('DD MMM YYYY');
                    staff.push({
                        "yearStart": $scope.employment[0].Employeddate
                    });

                    


                    if (($scope.employment[0].ResignedDate) == null) {

                        var Year1 = moment(today, "DD MMM YYYY").format("YYYY");
                        console.log("Year 1 is: ", Year1);

                        var Year2 = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").format("YYYY");
                        console.log("Year 2 is: ", Year2);


                        diff_years = Year1 - Year2;


                        console.log("Difference in years is: ", diff_years);

                        var nextYear = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").add(1, 'year').format('DD MMM YYYY');

                        var firstYear = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").format('DD MMM YYYY');

                        // Leaves
                        var date1 = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").format('YYYY-MM-DD');
                        var date2 = moment($scope.employment[0].Employeddate, "YYYY-MM-DD").add(1, 'year').format('YYYY-MM-DD');
                        console.log(date1);
                        console.log(date2);

                        //  var d1=date1;
                        // var d2 =date2;

                        for (p = 0; p <2; p++) {

                            var year = p;

                            if (p == 0) {
                                var d1 = date1;
                                var d2 = date2;

                                loadVariables(date1, date2);
                                console.log("got weekeds: ", getWeeekends[0]);
                                console.log("d1 is: ", d1);
                                console.log("d2 is: ", d2);
                                console.log("value of P is: ", p);
                                getCount(year, d1, d2);
                            }
                            if (p != 0) {

                                var d1 = moment(d1, "YYYY-MM-DD").add(1, 'year').format('YYYY-MM-DD');
                                var d2 = moment(d2, "YYYY-MM-DD").add(1, 'year').format('YYYY-MM-DD');
                                
                                loadVariables(date1, date2);
                                console.log("d1 is: ", d1);
                                console.log("d2 is: ", d2);
                                console.log("value of P is: ", p);
                                getCount(year, d1, d2);


                            }

                        }

                        function getCount(year, d1, d2) {

                            $http.get("/leavetypes/")

                            .then(function(response) {
                                $scope.leaveTypes = response.data;

                                // console.log("Leave Types: ", $scope.leavesTypes);

                                var i = 0;

                                angular.forEach($scope.leaveTypes, function(leavesTypes) {
                                    var y = 0;

                                    //  console.log("LeavesTypes Policy ID ", $scope.leaveTypes[i].LPolicyID);
                                    var temp = $scope.leaveTypes[i].LPolicyID;
                                   // console.log("value of temp is: ", temp);


                                    $http.get("/countLeaves/" + $scope.user[0].Ind_ID + "/" + d1 + "/" + d2 + "/" + $scope.leaveTypes[i].LPolicyID)
                                        .then(function(response) {

                                            $scope.leaves = response.data;
                                             




                                            if ($scope.leaves.length != 0) {
                                               
                                                // if ($scope.leaves[y].LFromDT == $scope.leaves[y].LToDt) {


                                                //     listArray.push({
                                                //         "Leaves": $scope.leaves.length,
                                                //         "LPolicyID": (temp),
                                                //         "Name": ($scope.leaves[y].LDesc),
                                                //         "year": (year)
                                                //     });

                                                // } // End of If

                                               // if ($scope.leaves[y].LFromDT != $scope.leaves[y].LToDt) {
                                                    var arraySize = $scope.leaves.length;
                                                    console.log("$scope.leaves.length in not:", $scope.leaves.length);
                                                    console.log("Leaves are for : ", $scope.leaves);
                                                    var s = 0;
                                                    var count =0;

                                                    for (var h = 0; h < arraySize; h++) {

                                                        var from = moment($scope.leaves[s].LFromDT, 'YYYY-MM-DD').startOf('day');
                                                        var to = moment($scope.leaves[s].LToDt, 'YYYY-MM-DD').startOf('day');

                                                        var duration1 = moment(to.diff(from));
                                                        var one_day=1000*60*60*24;

                                                        var days1= Math.round(duration1/one_day)+1;


                                                        console.log("from is : ", from);
                                                        console.log("to is: ", to);
                                                         console.log("days1 : ", days1);



                                                       
                                                        count = count + days1;


                                                        s++;

                                                    } // End of for

                                                     listArray.push({
                                                            "Name": ($scope.leaves[y].LDesc),
                                                            "Leaves": count,
                                                            "LPolicyID": (temp),
                                                            "year": (year)
                                                        });
                                                                                           


                                            }

                                        }); // End of getEmployment
                                    
                                    i++;
                                });
                               console.log("List Array ", listArray);

                            }); // End of leaveTypes
                            return;
                        } // End of function

                    }





                }); // End of getEmployment
        } // material function scope
    ]); // End of Material Admin