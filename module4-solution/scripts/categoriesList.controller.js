(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesListController', CategoriesListController);


CategoriesListController.$inject = ['MenuDataService'];
function CategoriesListController(MenuDataService) {
  var categoriesList = this;
  MenuDataService.getAllCategories().then(function(result) {
    categoriesList.items = result.data;
  });
}

})();
