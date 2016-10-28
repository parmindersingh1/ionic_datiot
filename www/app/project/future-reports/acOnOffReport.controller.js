(function () {
  'use strict';

  angular
    .module('app.reports')
    .controller('AcOnOffReportController', AcOnOffReportController);

  AcOnOffReportController.$inject = ['$q', 'alarmsFactory', 'logger'];
  /* @ngInject */
  function AcOnOffReportController($q, alarmsFactory, logger) {

    var vm = this;

    activate();

    function activate() {


    };

  }
})();
