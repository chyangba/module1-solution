(function(){
    'use strict';
    angular.module('myApp', []).controller('lunchController', lunchController);
    lunchController.$inject = ['$scope'];
    function lunchController($scope){
        $scope.checkItems = function(str){
            if(!str || 0 === str.length){
                $scope.resaultCheck = 'Please enter data first';
            }else{
                 var count = str.match(/,/g).length;
                 console.log(count);
                 if(count < 3 ){
                     $scope.resaultCheck = 'Enjoy!';
                     $scope.active = 'green';
                 }else{
                      $scope.resaultCheck = 'Too much!';
                     $scope.active = 'red';
                 }
            }
        };
    };
}());

