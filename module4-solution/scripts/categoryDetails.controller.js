(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailsController', CategoryDetailsController);


CategoryDetailsController.$inject = ['MenuDataService', '$stateParams'];
function CategoryDetailsController(MenuDataService, $stateParams) {
  var categoryDetails = this;
  MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function(result) {
    categoryDetails.items = result.data.menu_items;
  });
}

})();
