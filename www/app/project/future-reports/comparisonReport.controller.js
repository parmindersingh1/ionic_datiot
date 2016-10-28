(function () {
  'use strict';

  angular
    .module('app.reports')
    .controller('ComparisionReportController', ComparisionReportController);

  ComparisionReportController.$inject = ['$q', 'alarmsFactory', 'logger'];
  /* @ngInject */
  function ComparisionReportController($q, alarmsFactory, logger) {

    var vm = this;

    activate();

    function activate() {


    };

  }
})();
