(function () {
  'use strict';

  var core = angular.module('app.core');

  
  core.config(localStorageProviderConfig)

  localStorageProviderConfig.$inject = ['$localStorageProvider'];

  /* @ngInject */
  function localStorageProviderConfig ($localStorageProvider) {
    $localStorageProvider.setKeyPrefix('iAccel : ');
  }

})();
