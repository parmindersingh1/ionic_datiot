(function() {
  'use strict';
  angular.module('app.dashboard')
    .factory('dashFactory', dashFactory);

  dashFactory.$inject = ['$http', '__env'];

  function dashFactory($http, __env) {
    var service = {};

    service.getData = function () { // TODO below need to be changed
      var promise = $http.get(__env.nodeJsUrl + '/user/1')
        .then(

          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    };
    service.getDashboard = function(id) {
      var promise = $http.get(__env.nodeJsUrl + '/dashboard/' + id)
        .then(

          function (response) {
            return response;
          },
          function (response) {
            return response;
          });
      return promise;
    };

    service.getDashboardData = function(id) {
      var promise = $http.get(__env.nodeJsUrl + '/dashboardData/' + id)
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
})();

