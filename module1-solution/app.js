(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

$scope.lunch = [];
$scope.message = "";
$scope.check = 0;
var checkarray = [];



 //var nesto = $scope.lunch.split(',')[0];
$scope.check = function(){
  $scope.message = "Please enter data first!"
  //= checksize.length;
checkarray = $scope.lunch.split(',');
var array = [];
  for(var i=0;i<checkarray.length;i++){
    if(checkarray[i]!=""){
      //$scope.message = "brise";

      array.push(checkarray[i]);
    }
  }

// $scope.message = array.length;
if(array.length!=0)
  {
    if(array.length<=3 ){
         $scope.message = "Enjoy!"
     } else {
         $scope.message = "Too much!"
     }
  }else {
      $scope.message = "Please enter data first"
  }


  };

}

})();
