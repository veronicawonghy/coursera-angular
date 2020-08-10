(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope']

    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.message = '';

        $scope.checkLunch = function () {
            var dishesArray = $scope.dishes.split(',').filter(function (v) {
                return v.trim() !== '';
            })
            console.log(dishesArray)

            if (dishesArray.length <= 3) {
                $scope.message = 'Enjoy!';
            }
            else {
                $scope.message = 'Too much!';
            }

        }
    }


})();
