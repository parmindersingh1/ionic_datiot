(function() {
  'use strict';

  angular
    .module('app.core')
    .factory('toast', toast);

  toast.$inject = ['ionicToast'];

  /* @ngInject */
  function toast(ionicToast) {
    var service = {
      show: showToast,
    };

    return service;
    /////////////////////

    function showToast(message) {
        ionicToast.show(message, 'bottom', false, 2500);
    }


  }
} ());
