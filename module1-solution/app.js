(function () {
    'use strict';
    angular.module('Module1Solution',[])
        .controller('LunchCheckController',LunchCheckController);
    LunchCheckController.$inject=['$scope'];
    function LunchCheckController($scope) {
        $scope.inputValue="";
        $scope.lunchCheckMessage="";
        $scope.textColor="black";
        $scope.borderColor="none";
        function checkLunch(data) {
            var items=0;
            var dataArray=data;
            dataArray=data.split(',');
            for(var i=0;i<dataArray.length;i++){
                if(dataArray[i].length!=0){
                    if(dataArray[i]!=" "){
                        items++;
                    }
                }
            }
            if(items<=3){
                return "Enjoy!";
            }else if(items>3){
                return "Too much!";
            }
        }

        $scope.showMessage=function () {
            $scope.lunchCheckMessage="";
            if($scope.inputValue.length!=0) {
                $scope.lunchCheckMessage = checkLunch($scope.inputValue);
                $scope.textColor="green";
                $scope.borderColor="2px solid #4CAF50";
            }else {
                $scope.lunchCheckMessage="Please enter data first";
                $scope.textColor="red";
                $scope.borderColor="2px solid #F00";
            }
        }
    }
})();