(function () {
'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
    $scope.name = "Veronica"
    $scope.sayHello = function() {
        return "Hello Coursera";
    }
});

})();


