(function() {
  'use strict';

  angular
    .module('app.userMenu')
    .run(appRun);

  appRun.$inject = ['routerHelper'];
  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'app.userProfile',
        config: {
          url: '/user-profile',
          views: {
            'menuContent': {
              controller:'userProfileController',
              controllerAs:'vm',
              templateUrl: '/app/user-menu/user-profile.html',
              data: {
                roles: ['User']
              }
            }
          }
        }
      },
      {
        state: 'app.editProfile',
        config: {
          url: '/edit-profile',
          views: {
            'menuContent': {
              controller:'EditProfileController',
              controllerAs:'vm',
              templateUrl: '/app/user-menu/edit-profile.html',
              data: {
                roles: ['User']
              }
            }
          }
        }
      },
      {
        state: 'app.changepassword',
        config: {
          url: '/changepassword',
          views: {
            'menuContent': {
              controller:'ChangePasswordController',
              controllerAs:'vm',
              templateUrl: '/app/user-menu/changePassword.html'
            }
          }
        }
      }
    ];

  }
})();
