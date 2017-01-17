(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoryDetailsController', CategoryDetailsController);


CategoryDetailsController.$inject = ['items'];
function CategoryDetailsController(items) {
  var categoryDetails = this;
  categoryDetails.items = items.data.menu_items;
}

})();
