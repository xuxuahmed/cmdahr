materialAdmin
.controller('mastrPostCtrl', ['$scope','$log','$http',
 function($scope,$log,$http){
    $scope.months=['Jan','Feb','Mar','Apr','May','Jun','Jul',
        'Aug','Sep','Oct','Nov','Dec'];




$http.get("/allPost/").then(function(response)
 {
    $scope.posts= response.data;
    console.log("Posts; ", $scope.posts);

listpost =[];
$scope.post = $scope.posts.sort(response.postEng);




console.log("Post; ", $scope.post);
 var active ;
 var i=0;
 $scope.arrayPost=[];
 $scope.val=[];
angular.forEach($scope.post, function(post)
    { 
      console.log("i am in ");
      active ="";

     

     if(($scope.post[i].Active) == 0)
      {        
          active = "Active";          

      }
       if(($scope.post[i].Active) == 1)
      {        
          active = "Inactive";
      }
           $scope.arrayPost.push({"id":(i+1),
                            "postEng":($scope.post[i].postEng),
                            "active":(active)});
            i = i+1; 
      $scope.val.push(i); 
                     
     });
          
        console.log("val: ", $scope.val);


     });

 }]); // End of Material Admin
 