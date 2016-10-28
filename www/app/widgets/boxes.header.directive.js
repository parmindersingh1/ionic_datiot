(function () {
  'use strict';

  angular.module('app.widgets').directive('dtBoxHeader', dtBoxHeader);

  function dtBoxHeader() {
    var directive = {
      templateUrl: 'app/widgets/boxHeader.html',
      restrict: 'E',
      scope: {
        boxdata: '='
      },
      controller: BoxHeaderCtrl,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
  }

  BoxHeaderCtrl.$inject = ['$scope'];

  function BoxHeaderCtrl($scope) {
    var vm = this;

    activate();

    function activate() {

    }

  }
})();
