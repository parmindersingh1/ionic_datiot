(function () {
  'use strict';

  angular
    .module('app.reports')
    .controller('AlertReportController', AlertReportController);

  AlertReportController.$inject = ['$q', 'alarmsFactory', 'logger'];
  /* @ngInject */
  function AlertReportController($q, alarmsFactory, logger) {

    var vm = this;

    activate();

    function activate() {


    };

  }
})();
