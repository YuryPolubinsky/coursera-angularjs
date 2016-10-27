(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.message = "";
  $scope.notSepartedDishes = "";
  $scope.textBoxCssClassName = "";
  $scope.messageCssClassName = "";

  $scope.checkDishes = function () {
    if ($scope.notSepartedDishes == "") {
      $scope.message = "Please enter data first";
      $scope.textBoxCssClassName = "has-error";
      $scope.messageCssClassName = "text-danger";
      return;
    }

    var dishes = $scope.notSepartedDishes.split(',');
    var trimmedDishesArray = [];

    for (var i = 0; i < dishes.length; i++) {
      if (dishes[i].trim().length > 0) {
          trimmedDishesArray[trimmedDishesArray.length] = dishes[i].trim();
      }
    }


    if (trimmedDishesArray.length <= 3) {
      $scope.message = "Enjoy!";
      $scope.textBoxCssClassName = "has-success";
      $scope.messageCssClassName = "text-success";
    }
    else {
      $scope.message = "Too much!";
      $scope.textBoxCssClassName = "has-success";
      $scope.messageCssClassName = "text-success";
    }
  };
}

})();
