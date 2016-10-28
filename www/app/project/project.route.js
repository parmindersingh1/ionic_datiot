(function() {
  'use strict';

  angular
    .module('app.project')
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
          //template: '<div ui-view class="fade-in-up"></div>',
          templateUrl: '/app/core/side-menu.html',
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
                templateUrl: '/app/project/future-dashboard/dashboard.html',
                data: {
                  roles: ['User']
                },
                controller: 'DashboardController',
                controllerAs: 'vm',
                bindToController : true,
                title: 'Site Dashboard'
              }
            }
        }
      },
      {
        state: 'app.dashboardAll',
        config: {
          url: '/dashboardAll',
          views: {
            'menuContent': {
                templateUrl: '/app/project/future-dashboard/dashboard-all.html',
                data: {
                  roles: ['User']
                },
                controller: 'DashboardAllController',
                controllerAs: 'vm',
                bindToController : true,
                title: 'Client Dashboard'
              }
            }  
        }
      }

    ];
  }
})();
