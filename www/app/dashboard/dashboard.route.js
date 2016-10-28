(function() {
  'use strict';

  angular
    .module('app.dashboard')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    var otherwise = '/app/dashboard';
    routerHelper.configureStates(getStates(), otherwise);
  }

  function getStates() {
    return [
      {
        state: 'app',
        config: {
          url: '/app',
          templateUrl: "app/core/side-menu.html",
          abstract: 'true',
          resolve: {
            authorize: ['authorization',
              function(authorization) {
                return authorization.authorize();
              }
            ]
          },
          controller: 'AppCtrl',
          controllerAs: 'vm'
        }
      },
      {
        state: 'app.dashboard',
        config: {
          url: '/dashboard',
          views: {
            'menuContent': {
              templateUrl: '/app/dashboard/dashboard.html',
              data: {
                roles: ['User']
              },
              controller: 'DashboardController',
              controllerAs: 'vm',
              bindToController : true,
              title: 'Dashboard'
             }
          }

        }
      }

    ];
  }
})();
