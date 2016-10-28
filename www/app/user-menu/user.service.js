(function () {
  'use strict';

  angular
    .module('app.userMenu')

    .factory('userService', userService);

    userService.$inject = ['$http', '$localStorage', '__env'];

    function userService($http, $localStorage, __env) {
      var service = {};
      service.getUser= function() {
        return angular.copy($localStorage._identity.userDetails);
      };

      service.setUser = function(user) {
        $localStorage._identity.userDetails=user;
      };


      return service;
   }

}());
