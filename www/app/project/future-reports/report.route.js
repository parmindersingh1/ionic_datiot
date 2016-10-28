(function() {
  'use strict';

  angular
    .module('app.project')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app.dgMainReport',
        config: {
          url: '/dgMainReport',
          templateUrl: '/app/project/future-reports/dgMainReport.html',
          data: {
            roles: ['User']
          },
          controller: 'DgMainReportController',
          controllerAs: 'vm',
          bindToController : true,
          ncyBreadcrumb: {
            label: 'DG and Main Usage Report'
          },
          title: 'DG and Main Usage'
        }
      },
      {
        state: 'app.energyReport',
        config: {
          url: '/energyReport',
          templateUrl: '/app/project/future-reports/energyReport.html',
          data: {
            roles: ['User']
          },
          controller: 'EnergyReportController',
          controllerAs: 'vm',
          bindToController : true,
          ncyBreadcrumb: {
            label: 'Energy Usage Report'
          },
          title: 'Energy Usage'
        }
      },
      {
        state: 'app.temperatureReport',
        config: {
          url: '/temperatureReport',
          templateUrl: '/app/project/future-reports/temperatureReport.html',
          data: {
            roles: ['User']
          },
          controller: 'TemperatureReportController',
          controllerAs: 'vm',
          bindToController : true,
          ncyBreadcrumb: {
            label: 'Temperature Report'
          },
          title: 'Temperature'
        }
      },
      {
        state: 'app.alertReport',
        config: {
          url: '/alertReport',
          templateUrl: '/app/project/future-reports/alertReport.html',
          data: {
            roles: ['User']
          },
          controller: 'AlertReportController',
          controllerAs: 'vm',
          bindToController : true,
          ncyBreadcrumb: {
            label: 'Alert Report'
          },
          title: 'Alerts'
        }
      },
      {
        state: 'app.acOnOffReport',
        config: {
          url: '/acOnOff',
          templateUrl: '/app/project/future-reports/acOnOffReport.html',
          data: {
            roles: ['User']
          },
          controller: 'AcOnOffReportController',
          controllerAs: 'vm',
          bindToController : true,
          ncyBreadcrumb: {
            label: 'AC On/Off'
          },
          title: 'Report AC On/Off'
        }
      },
      {
        state: 'app.comparisonReport',
        config: {
          url: '/comparisonReport',
          templateUrl: '/app/project/future-reports/comparisonReport.html',
          data: {
            roles: ['User']
          },
          controller: 'ComparisionReportController',
          controllerAs: 'vm',
          bindToController : true,
          ncyBreadcrumb: {
            label: 'Asset Comparison Reports'
          },
          title: 'Asset Comparison'
        }
      }

    ];
  }
})();
