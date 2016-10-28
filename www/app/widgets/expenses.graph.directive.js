(function () {
  'use strict';

  angular.module('app.widgets').directive('dtExpensesGraph', dtExpensesGraph);

  function dtExpensesGraph() {
    var directive = {
      templateUrl: 'app/widgets/expensesGraph.html',
      restrict: 'E',
      scope: {
        expensesgraphdata: '='
      },
      controller: ExpensesGraphCtrl,
      controllerAs: 'vm',
      bindToController: true
    };
    return directive;
  }

  ExpensesGraphCtrl.$inject = ['$scope'];

  function ExpensesGraphCtrl($scope) {
    var vm = this;

    activate();

    function activate() {

      vm.colors = [{
        fillColor : 'rgba(154,137,181,0.6)',
        highlightFill : 'rgba(154,137,181,0.9)'
      }];
      // Chart.js Options - complete list at http://www.chartjs.org/docs/
      vm.options = {
        maintainAspectRatio : false,
        showScale : false,
        barDatasetSpacing : 0,
        tooltipFontSize : 11,
        tooltipFontFamily : "'Helvetica', 'Arial', sans-serif",
        responsive : true,
        scaleBeginAtZero : true,
        scaleShowGridLines : false,
        scaleLineColor : 'transparent',
        barShowStroke : false,
        barValueSpacing : 5
      };

    }

  }
})();

