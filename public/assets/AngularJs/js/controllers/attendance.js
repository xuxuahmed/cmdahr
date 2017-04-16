materialAdmin
.controller('attCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
        
        $scope.months=['January','February','March','April','May','June','July',
        'August','September','October','November','December'];

        $scope.years=[]

        var d = new Date();
        
        for(i = 2008; i <= d.getFullYear(); i++) {
          $scope.years.push(i);
        }

        $scope.currentMonth = $scope.months[d.getMonth()];
        $scope.currentYear = $scope.years[$scope.years.length - 1];
      //  console.log($scope.currentMonth);
        $scope.records = [];

      $scope.updateTable = function () {
        $http.get('/checkinout/' + ($scope.months.indexOf($scope.currentMonth) + 1) + '/' + $scope.currentYear)
          .then(function(response){
            $scope.records = response.data;
          });
      }

      $scope.updateTable();

 }]);
 