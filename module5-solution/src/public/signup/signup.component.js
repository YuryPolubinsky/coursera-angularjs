(function () {
"use strict";

angular.module('public')
.component('signUp', {
  templateUrl: 'src/public/signup/signup.html',
  controller: SignUpController,
  controllerAs: 'reg'
});

SignUpController.$inject = ['MenuService', 'CacheService'];
function SignUpController(MenuService, CacheService) {
  var signUp = this;

  signUp.submit = function () {
    MenuService.getMenuItem(signUp.user.menunumber).then(function (response) {
      if(response.error) {
        CacheService.deleteUserInfo();
        
        signUp.isInfoSaved = false;
        signUp.isInvalidMenuItem = true;
      }
      else {
        signUp.user.selectedMenuItem = response;
        CacheService.saveUserInfo(signUp.user);

        signUp.isInfoSaved = true;
        signUp.isInvalidMenuItem = false;
      }
    })
  }

}

})();
