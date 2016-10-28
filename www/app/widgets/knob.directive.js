(function () {
  'use strict';

  angular.module('app.widgets').directive('dtRealTimeKnob', dtRealTimeKnob);

  function dtRealTimeKnob() {
    var directive = {
      templateUrl: 'app/widgets/realTimeKnob.html',
      restrict: 'E',
      scope: {
        knobdata: '='
      },
      controller: RealTimeKnobCtrl,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
  }

  RealTimeKnobCtrl.$inject = ['$scope'];

  function RealTimeKnobCtrl($scope) {
    var vm = this;

    activate();

    function activate() {
      vm.cpuoptions = {
        unit : "%",
        readOnly : true,
        size : 70,
        fontSize : '11px',
        textColor : 'rgb(154,137,181)',
        trackWidth : 5,
        barWidth : 10,
        trackColor : 'rgba(154,137,181,0.6)',
        barColor : 'rgba(154,137,181,0.9)'
      };
      vm.ramoptions = {
        unit : "MB",
        readOnly : true,
        size : 70,
        fontSize : '11px',
        textColor : 'rgb(154,137,181)',
        trackWidth : 5,
        barWidth : 10,
        trackColor : 'rgba(154,137,181,0.6)',
        barColor : 'rgba(154,137,181,0.9)',
        max : 1024
      };
    }

  }
})();
