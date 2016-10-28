(function() {
  'use strict';

  angular
    .module('app.userMenu')
    .factory('userProfileFactory', userProfileFactory);

  userProfileFactory.$inject = ['$http', '$localStorage', '__env'];

  function userProfileFactory($http, $localStorage__env) {
    var service = {};


    service.edit = function (user) {
      var promise = $http.post(__env.userServerUrl + '/editUser/'+user.id,user)
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
