(function () {
"use strict";

angular.module('public')
.component('myInfo', {
  templateUrl: 'src/public/myinfo/myinfo.html',
  controller: SignUpController,
  controllerAs: 'myInfo'
});

SignUpController.$inject = ['CacheService', 'ApiPath'];
function SignUpController(CacheService, ApiPath) {
  var myInfo = this

  myInfo.basePath = ApiPath;
  myInfo.userInfo = CacheService.getUserInfo();
  myInfo.isNotRegisteredUser = myInfo.userInfo == null;
}

})();
