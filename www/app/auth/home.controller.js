(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$state', 'principal'];

  /* @ngInject */
  function HomeController($state, principal) {
    var vm = this;
    vm.signout = signout;

    function signout() {
      principal.authenticate(null);
      $state.go('app.signin');
    }
  }

})();

