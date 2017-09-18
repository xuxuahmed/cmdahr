materialAdmin
    .controller('holidayManagerCtrl', ['$scope', '$log', '$http',
        function($scope, $log, $http) {
            $scope.months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
                'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
            ];

            var today = moment(new Date()).format('DD MMM YYYY');
            var year = moment(new Date()).format('YYYY');
            console.log("year  is: ", year);
            $scope.currentYear = year;


            arrayHolidays = [];

            $http.get("/isHoliday/" + year).then(function(response) {
                $scope.holidays = response.data;
                console.log("Holidays of the year is; ", $scope.holidays);
                var i = 0;


                angular.forEach($scope.holidays, function(holiday) {
                    var currentDate = moment($scope.holidays[i].HolidayDate).format('DD MMM YYYY');
                    arrayHolidays.push({
                        "id": (i + 1),
                        "date": (currentDate),
                        "reason": ($scope.holidays[i].HolidayReason)
                    })
                    i = i + 1;

                }); // End of Angular forEach

                console.log("Array Holidays of the year is; ", arrayHolidays);

                $scope.days = arrayHolidays;
            }); // End of isHOliday 
            $scope.submitCurrent = function() {
                arrayHolidays = [];

                $http.get("/isHoliday/" + year).then(function(response) {
                    $scope.holidays = response.data;
                    console.log("Holidays of the year is; ", $scope.holidays);
                    var i = 0;


                    angular.forEach($scope.holidays, function(holiday) {
                        var currentDate = moment($scope.holidays[i].HolidayDate).format('DD MMM YYYY');
                        arrayHolidays.push({
                            "id": (i + 1),
                            "date": (currentDate),
                            "reason": ($scope.holidays[i].HolidayReason)
                        })
                        i = i + 1;

                    }); // End of Angular forEach

                    console.log("Array Holidays of the year is; ", arrayHolidays);
                    var today = moment(new Date()).format('DD MMM YYYY');
                    var year = moment(new Date()).format('YYYY');
                    console.log("year  is: ", year);
                    $scope.currentYear = year;

                    $scope.days = arrayHolidays;
                }); // End of isHOliday 

            }

            $scope.newHoliday = function(date, description) {
                console.log("Date: ", $scope.AddDate);
                console.log("Description: ", $scope.AddDescription);
                
                // change date format

                var hol = moment($scope.AddDate, "dd-MMM-YYYY").format("YYYY-MM-DD");
                console.log("hol is:", hol);

                 $http.get("/isHoliday/" + hol).then(function(response) {
                    $scope.holExists = response.data;
                    console.log("Holiday Already exists; ",  $scope.holExists);

                    if($scope.holExists.length==0){
                        //Add holiday entry
                        $http.send(Request , $scope.AddDate,$scope.AddDescription);
                    }                  

                });

            }


            $scope.submitVariables = function(currYear) {
                console.log("I am clicked; ", currYear);

                if (currYear != $scope.currYear) {
                    console.log("I am in iF; ", currYear);

                    arrayHolidays = [];
                    //var nextMonth = moment(thisMonth, "MMM").add(1,'month').format('MMM');

                    var newyear = moment($scope.currentYear, "YYYY").add(-1).format('YYYY');
                    console.log("Previous Year is: ", newyear);

                    $http.get("/isHoliday/" + newyear).then(function(response) {
                        $scope.holiday = response.data;
                        console.log("Holidays of the year is; ", $scope.holidays1);
                        var i = 0;

                        angular.forEach($scope.holiday, function(holiday) {
                            var currentDate = moment($scope.holiday[i].HolidayDate).format('DD MMM YYYY');
                            arrayHolidays.push({
                                "id": (i + 1),
                                "date": (currentDate),
                                "reason": ($scope.holiday[i].HolidayReason)
                            })
                            i = i + 1;

                        }); // End of Angular forEach

                        console.log("Array Holidays of the year is previous; ", arrayHolidays);

                        $scope.days = arrayHolidays;

                        $scope.currentYear = newyear;
                    }); // End of isHOliday

                }
            }

        } // End of Function Scope
    ]); // End of Material Admin