(function () {
'use strict';

angular.module('lunchCheck', [])

.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {

$scope.lunch = []; //input array
$scope.message = "";
//$scope.check = 0;
var checkarray = [];

      $scope.check = function(){
          $scope.message = "Please enter data first!";
          checkarray = $scope.lunch.split(',');
          var array = [];

          //create array without empty elements
            for(var i=0;i<checkarray.length;i++){
              if(checkarray[i]!=""){
                array.push(checkarray[i]);
              }
            }

            if(array.length!=0)
              {
                if(array.length<=3 ){
                     $scope.message = "Enjoy!"
                 } else {
                     $scope.message = "Too much!"
                 }
              }else {
                  $scope.message = "Please enter data first!"
              }
        };
}

})();
