materialAdmin
.controller('mastrPostClassCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];




$http.get("/allPostClass/").then(function(response)
 {
    $scope.postClass= response.data;
    console.log("Posts Class; ", $scope.postClass);

listpost =[];

 var active ;
 var i=0;

 $scope.arrayPostClass=[];


angular.forEach($scope.postClass, function(post)
    { 
      console.log("i am in ");
      active ="";

     

     if(($scope.postClass[i].active) == 0)
      {        
          active = "Active";          

      }
       if(($scope.postClass[i].active) == 1)
      {        
          active = "Inactive";
      }
           $scope.arrayPostClass.push({"id":(i+1),
                            "PclassEng":($scope.postClass[i].PclassEng),
                            "active":(active)});
            i = i+1; 

                     
     });
          
        
     });

 }]); // End of Material Admin
 