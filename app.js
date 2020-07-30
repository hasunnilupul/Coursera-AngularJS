(function () {
'use strict';
angular.module('myFirstApp',[])
    .controller('MyFirstController',function ($scope) {
        $scope.name="Hasun Nilupul";
        $scope.welcomeMessage=function () {
            return "Welcome to my Test Angular App";
        };
    })
})();