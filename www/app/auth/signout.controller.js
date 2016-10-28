(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('SignoutController', SignoutController);

  SignoutController.$inject = ['$state', 'principal'];
  /* @ngInject */
  function SignoutController($state, principal) {
    var vm = this;

    activate();

    function activate() {
      principal.signout();
      console.log("User log out successfully");
      $state.go('auth.signin');
    }
  }
})();
