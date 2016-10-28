(function () {
  'use strict';

  angular.module('app.widgets').directive('dtBarGraph', dtBarGraph);

  function dtBarGraph() {
    var directive = {
      templateUrl: 'app/widgets/barGraph.html',
      restrict: 'E',
      scope: {
        bargraphdata: '='
      },
      controller: BarGraphCtrl,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
  }

  BarGraphCtrl.$inject = ['$scope'];

  function BarGraphCtrl($scope) {
    var vm = this;

    activate();

    function activate() {

      vm.colors = [{
        fillColor : 'rgba(148,116,153,0.7)',
        highlightFill : 'rgba(148,116,153,1)'
      }, {
        fillColor : 'rgba(127,140,141,0.7)',
        highlightFill : 'rgba(127,140,141,1)'
      }];

      vm.options = {
        maintainAspectRatio : false,
        tooltipFontSize : 11,
        tooltipFontFamily : "'Helvetica', 'Arial', sans-serif",
        responsive : true,
        scaleFontFamily : "'Helvetica', 'Arial', sans-serif",
        scaleFontSize : 11,
        scaleFontColor : "#aaa",
        scaleBeginAtZero : true,
        tooltipTitleFontFamily : "'Helvetica', 'Arial', sans-serif",
        tooltipTitleFontSize : 12,
        scaleShowGridLines : true,
        scaleLineColor : 'transparent',
        scaleShowVerticalLines : false,
        scaleGridLineColor : "rgba(0,0,0,.05)",
        scaleGridLineWidth : 1,
        barShowStroke : false,
        barStrokeWidth : 2,
        barValueSpacing : 5,
        barDatasetSpacing : 1
      };

    }

  }
})();
