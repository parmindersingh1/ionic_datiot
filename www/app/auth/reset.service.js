(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('resetFactory', resetFactory);

  resetFactory.$inject = ['$http','__env'];

  function resetFactory($http, __env) {
    var service = {};

    service.abc = function (passData) {
      console.log(passData);
      var promise = $http.post(__env.uiServerUrl + '/users/reset_password', passData)
        .then(

          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    };

    return service;
  };
}());
