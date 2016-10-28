(function () {
  'use strict';

  angular
    .module('app.auth')
    .factory('principal', principal);

  principal.$inject = ['$q', '$http', '$timeout', '$localStorage', '__env'];

  /* @ngInject */
  function principal($q, $http, $timeout, $localStorage, __env) {
    // var _identity = undefined;
    // var _authenticated = false;

    var service = {
      //authenticate: authenticate,
      identity: identity,
      isAuthenticated: isAuthenticated,

      //isIdentityResolved: isIdentityInLocalStorage,
      isInAnyRole: isInAnyRole,
      isInRole: isInRole,

      signin: signin,
      signout: signout
    };
    return service;

    ////////////////

    // function authenticate(identity) {
    //   $localStorage._identity = identity;
    //   //_identity = identity;
    //   _authenticated = identity != null;
    // }

    function identity(force) {
      var deferred = $q.defer();
      if (force === true) {
        clearLocalStorage();
      }
      // check and see if we have retrieved the identity data from the server. if we have, reuse it by immediately resolving
      if (isIdentityInLocalStorage()) {
        if (isAuthenticated()) {
          deferred.resolve($localStorage._identity);
        }
        else {
          $http.post(__env.uiServerUrl + '/session/refresh', {refreshToken: $localStorage._identity.refresh_token})
            .then(function (response) {
                if (response.status == 200) {
                  $localStorage._identity = response.data;
                  $localStorage.loggedInTimeStamp = Date.now();
                  //_authenticated = true;
                  $http.defaults.headers.common['Authorization'] = 'Bearer ' + $localStorage._identity.access_token;
                  deferred.resolve($localStorage._identity);
                }
                else {
                  clearLocalStorage();
                  //_authenticated = false;
                  deferred.reject("Session Expired");
                }
              },
              function (response) {
                clearLocalStorage();
                //_authenticated = false;
                deferred.reject("Error connecting server");
              });
        }
      }
      else {
        deferred.reject("Signin required");
      }
      return deferred.promise;
    }

    function isAuthenticated() {
      // console.log("isAuthenticated (_authenticated) : " + _authenticated);
      // console.log("isAuthenticated (angular.isDefined($localStorage._identity)) : " + angular.isDefined($localStorage._identity));
      // var val = _authenticated && angular.isDefined($localStorage._identity);
      // console.log("isAuthenticated (_authenticated && angular.isDefined($localStorage._identity) : " + val);
      // return _authenticated && angular.isDefined($localStorage._identity);
      if (isIdentityInLocalStorage()) {
        var currentTimeStamp = Date.now();
        var loggedInTimeStamp = $localStorage.loggedInTimeStamp;
        var expiryTimePeriod = $localStorage._identity.expires_in * 1000;//in seconds as rest of things are in milliseconds
        if ((currentTimeStamp - loggedInTimeStamp) < expiryTimePeriod) {
          return true;
        }
        else {
          return false;
        }
      }
      else {
        return false;
      }
    }

    function isIdentityInLocalStorage() {
      return angular.isDefined($localStorage._identity);
    }

    function isInAnyRole() {
      //TODO Below implementation need to be changed. Should get data from _identity.userDetails object
      // if (!_authenticated || !_identity.roles) return false;
      //
      // for (var i = 0; i < roles.length; i++) {
      //   if (this.isInRole(roles[i])) return true;
      // }
      //
      // return false;
      return true;
    }

    function isInRole() {
      // TODO Below implementation need to be changed. Should get data from _identity.userDetails object
      // if (!_authenticated || !_identity.roles) return false;
      // return _identity.roles.indexOf(role) != -1;
      return true;
    }

    function clearLocalStorage() {
      if(isIdentityInLocalStorage()) {
        delete $localStorage._identity;
        delete $localStorage.loggedInTimeStamp;
      }
    }

    function signin(user, password, rememberMe) {
      var deferred = $q.defer();
      $http.post(__env.uiServerUrl + '/session/login/', {userName: user, password: password})
        .then(function (response) {
            if (response.status == 200) {
              $localStorage._identity = response.data;
              $localStorage.loggedInTimeStamp = Date.now();
              //_authenticated = true;
              $http.defaults.headers.common['Authorization'] = 'Bearer ' + $localStorage._identity.access_token;
              deferred.resolve($localStorage._identity);
            }
            else {
              clearLocalStorage();
              //_authenticated = false;
              deferred.reject("Invalid Login credentials");
            }
          },
          function (response) {
            clearLocalStorage();
            //_authenticated = false;
            deferred.reject("Error connecting server");
          });
      return deferred.promise;

    }

    function signout() {
      clearLocalStorage();
      //_authenticated = false;
    }
  }

})();
