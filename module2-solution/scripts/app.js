(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  this.itemsToBuy = ShoppingListCheckOffService.itemsToBuy;

  this.buyItem = function(itemIndex) {
    ShoppingListCheckOffService.moveItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  this.alreadyBoughtItems = ShoppingListCheckOffService.itemsAlreadyBought;
}

function ShoppingListCheckOffService() {
  this.itemsToBuy = [
    {name: 'cookies', quantity: 5},
    {name: 'coca-cola', quantity: 1},
    {name: 'beer', quantity: 2},
    {name: 'tomatoes', quantity: 3},
    {name: 'sugar', quantity: 2},
    {name: 'milk', quantity: 6},
  ];

  this.itemsAlreadyBought = [];

  this.moveItem = function(itemIndex) {
    this.itemsAlreadyBought.push({name: this.itemsToBuy[itemIndex].name, quantity: this.itemsToBuy[itemIndex].quantity});
    this.itemsToBuy.splice(itemIndex, 1);
  };
}

})();
