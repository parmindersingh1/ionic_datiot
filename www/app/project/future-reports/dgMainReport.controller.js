(function () {
  'use strict';

  angular
    .module('app.reports')
    .controller('DgMainReportController', DgMainReportController);

  DgMainReportController.$inject = ['$q', 'alarmsFactory', 'logger'];
  /* @ngInject */
  function DgMainReportController($q, alarmsFactory, logger) {

    var vm = this;

    activate();

    function activate() {


    };

  }
})();
