(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope']

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.empty = false;
        $scope.checked = false;

        $scope.checkLunch = function () {
            $scope.checked = true;
            var dishesArray = $scope.dishes.split(',').filter(function (v) {
                return v.trim() !== '';
            })
            console.log(dishesArray)

            if(dishesArray.length == 0){
                $scope.empty = true;
                $scope.message = 'Please enter data first'
            }
            else if (dishesArray.length <= 3) {
                $scope.empty = false;
                $scope.message = 'Enjoy!';
            }
            else {
                $scope.empty = false;
                $scope.message = 'Too much!';
            }

        }
    }


})();
