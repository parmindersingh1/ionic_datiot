(function () {
  'use strict';

  angular
    .module('app.core')
    .controller('InitController', InitController);

  InitController.$inject = ['$http'];

  /* @ngInject */
  function InitController($http) {
    var vm = this;

    activate();

    ////////////////

    function activate() {

    }
  }

})();
