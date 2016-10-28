(function () {
  'use strict';

  angular
    .module('app.reports')
    .controller('TemperatureReportController', TemperatureReportController);

  TemperatureReportController.$inject = ['$q', 'alarmsFactory', 'logger'];
  /* @ngInject */
  function TemperatureReportController($q, alarmsFactory, logger) {

    var vm = this;

    activate();

    function activate() {


    };

  }
})();
