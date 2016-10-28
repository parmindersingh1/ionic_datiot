(function() {
  'use strict';

  angular
    .module('app.auth')
    .run(appRun);

  /* @ngInject */
  function appRun(routerHelper) {
    routerHelper.configureStates(getStates());
  }

  function getStates() {
    return [
      {
        state: 'auth',
        config: {
          abstract: true,
          url: '/auth',
          templateUrl: 'app/auth/auth.html'
        }
      },
      {
        state: 'auth.signin',
        config: {
          url: '/signin',
          templateUrl: "/app/auth/login_login.html",
          controller: 'SigninController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.signout',
        config: {
          controller: 'SignoutController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.forgot',
        config: {
          url: '/forgot',
          templateUrl: "/app/auth/login_forgot.html",
          controller: 'ForgotController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.registration',
        config: {
          url: '/registration',
          templateUrl: "/app/auth/login_registration.html"
        }
      },
      {
        state: 'auth.reset',
        config: {
          url: '/reset',
          templateUrl: "/app/auth/reset_password.html",
          controller: 'ResetController',
          controllerAs: 'vm'
        }
      },
      {
        state: 'auth.lockscreen',
        config: {
          url: '/lock',
          templateUrl: "/app/auth/login_lock_screen.html"
        }
      }
    ];
  }
})();
