(function () {
  'use strict';

  angular.module('app.widgets').directive('dtWaveGraph', dtWaveGraph);

  function dtWaveGraph() {
    var directive = {
      templateUrl: 'app/widgets/waveGraph.html',
      restrict: 'E',
      scope: {
        wavegraphdata: '='
      },
      controller: WaveGraphCtrl,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
  }

  WaveGraphCtrl.$inject = ['$scope'];

  function WaveGraphCtrl($scope) {
    var vm = this;

    activate();

    function activate() {

      vm.colors = [{
        fillColor : 'rgba(90,135,112,0.6)',
        strokeColor : 'rgba(90,135,112,1)',
        pointColor : 'rgba(90,135,112,1)'
      }, {
        fillColor : 'rgba(127,140,141,0.6)',
        strokeColor : 'rgba(127,140,141,1)',
        pointColor : 'rgba(127,140,141,1)'
      }, {
        fillColor : 'rgba(148,116,153,0.6)',
        strokeColor : 'rgba(148,116,153,1)',
        pointColor : 'rgba(148,116,153,1)'
      }];


      vm.options = {
        maintainAspectRatio : false,
        responsive : true,
        scaleFontFamily : "'Helvetica', 'Arial', sans-serif",
        scaleFontSize : 11,
        scaleFontColor : "#aaa",
        scaleShowGridLines : true,
        tooltipFontSize : 11,
        tooltipFontFamily : "'Helvetica', 'Arial', sans-serif",
        tooltipTitleFontFamily : "'Helvetica', 'Arial', sans-serif",
        tooltipTitleFontSize : 12,
        scaleGridLineColor : 'rgba(0,0,0,.05)',
        scaleGridLineWidth : 1,
        bezierCurve : true,
        bezierCurveTension : 0.4,
        scaleLineColor : 'transparent',
        scaleShowVerticalLines : false,
        pointDot : false,
        pointDotRadius : 2,
        pointDotStrokeWidth : 1,
        pointHitDetectionRadius : 20,
        datasetStroke : true,
        tooltipXPadding: 20,
        datasetStrokeWidth : 2,
        datasetFill : true,
        animationEasing : "easeInOutExpo"
      };
    }

  }
})();

