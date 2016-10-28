(function() {
  'use strict';

  angular
    .module('app.auth')
    .factory('forgotFactory', forgotFactory);

  forgotFactory.$inject = ['$http','__env'];

  function forgotFactory($http, __env) {
    var service = {};

    service.abc = function (email) {
      console.log(email);
      var promise = $http.post(__env.uiServerUrl + '/users/forgot_password',email)
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

