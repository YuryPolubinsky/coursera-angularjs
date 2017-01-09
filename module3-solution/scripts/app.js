(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrowItDown = this;

  narrowItDown.showError = false;

  narrowItDown.findItems = function() {
    if(narrowItDown.searchString) {
      MenuSearchService.getMatchedMenuItems(narrowItDown.searchString).then(function(result) {
        if(result.length) {
          narrowItDown.foundItems = result;
          narrowItDown.showError = false;
        }
        else {
          narrowItDown.showError = true;
          narrowItDown.foundItems = null;
        }
      });
    }
    else {
      narrowItDown.showError = true;
      narrowItDown.foundItems = null;
    }

  };

  narrowItDown.removeItem = function(index) {
    narrowItDown.foundItems.splice(index, 1);
  }
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  this.getMatchedMenuItems = function(searchTerm) {
    return $http({method: "GET", url: "https://davids-restaurant.herokuapp.com/menu_items.json"}).then(function (result) {
      var foundItems = result.data.menu_items.filter(function(item) {
        return item.description.indexOf(searchTerm) !== -1;
      });

      return foundItems;
    });
  };
}

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    }
  };

  return ddo;
}

})();
