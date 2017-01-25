(function () {
"use strict";

angular.module('common')
.service('CacheService', CacheService);


function CacheService() {
  var service = this;

  service.saveUserInfo = function (userInfo) {
    service.savedUserInfo = userInfo;
  }

  service.getUserInfo = function () {
    return service.savedUserInfo ? service.savedUserInfo : null;
  }
}

})();
