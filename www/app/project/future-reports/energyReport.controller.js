(function () {
  'use strict';

  angular
    .module('app.reports')
    .controller('EnergyReportController', EnergyReportController);

  EnergyReportController.$inject = ['$q', 'alarmsFactory', 'logger'];
  /* @ngInject */
  function EnergyReportController($q, alarmsFactory, logger) {

    var vm = this;

    activate();

    function activate() {


    };

  }
})();
