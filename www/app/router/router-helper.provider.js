/* Help configure the state-base ui.router */
(function() {
  'use strict';

  angular
    .module('app.router')
    .provider('routerHelper', routerHelperProvider);

  routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];
  /* @ngInject */
  function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
    /* jshint validthis:true */
    var config = {
      docTitle: undefined,
      resolveAlways: {}
    };

    if (!(window.history && window.history.pushState)) {
      window.location.hash = '/';
    }

    //$locationProvider.html5Mode(true);

    this.configure = function(cfg) {
      angular.extend(config, cfg);
    };

    this.$get = RouterHelper;
    RouterHelper.$inject = ['$location', '$rootScope', '$state', 'authorization', 'principal', 'toast', '$ionicLoading'];
    /* @ngInject */
    function RouterHelper($location, $rootScope, $state, authorization, principal, toast, $ionicLoading) {
      var handlingStateChangeError = false;
      var hasOtherwise = false;
      var stateCounts = {
        errors: 0,
        changes: 0
      };

      var $body = $('body');

      var service = {
        configureStates: configureStates,
        getStates: getStates,
        stateCounts: stateCounts
      };

      init();

      return service;

      ///////////////

      function configureStates(states, otherwisePath) {
        states.forEach(function(state) {
          state.config.resolve =
            angular.extend(state.config.resolve || {}, config.resolveAlways);
          $stateProvider.state(state.state, state.config);
        });
        if (otherwisePath && !hasOtherwise) {
          hasOtherwise = true;
          $urlRouterProvider.otherwise(otherwisePath);
        }
      }

      function init() {
        handleStateChangeStart();
        handleRoutingErrors();
        handleStateChange();
        handleStateNotFond();
      }

      function getStates() { return $state.get(); }

      function handleStateChangeStart(){
        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
          //start loading bar on stateChangeStart
          $ionicLoading.show({
      			template: 'Loading...'
      		});
          //$scope.horizontalNavbarCollapsed = true;
          if (toState.name == "app.pagelayouts.boxedpage") {
            $body.addClass("app-boxed-page");
          } else {
            $body.removeClass("app-boxed-page");
          }
          $rootScope.toState = toState;
          $rootScope.toStateParams = toParams;
          if (principal.isAuthenticated()) authorization.authorize();
        });
      }

      function handleRoutingErrors() {
        // Route cancellation:
        // On routing error, go to the dashboard.
        // Provide an exit clause if it tries to do it twice.
        $rootScope.$on('$stateChangeError',
          function(event, toState, toParams, fromState, fromParams, error) {
            if (handlingStateChangeError) {
              return;
            }
            stateCounts.errors++;
            handlingStateChangeError = true;
            var destination = (toState &&
              (toState.title || toState.name || toState.loadedTemplateUrl)) ||
              'unknown target';
            var msg = 'Error routing to ' + destination + '. ' +
              (error.data || '') + '. <br/>' + (error.statusText || '') +
              ': ' + (error.status || '');
            // logger.warn(msg, [toState]);
            toast.show(msg);
            $location.path('/');
          }
        );
      }

      function handleStateChange() {
        $rootScope.$on('$stateChangeSuccess',
          function(event, toState, toParams, fromState, fromParams) {
            stateCounts.changes++;
            handlingStateChangeError = false;
            var title = config.docTitle + ' ' + (toState.title || '');
            $rootScope.title = title; // data bind to <title>

            //stop loading bar on stateChangeSuccess
            event.targetScope.$watch("$viewContentLoaded", function () {

              $ionicLoading.hide();
            });

            // scroll top the page on change state
            $('#app .main-content').css({
              position: 'relative',
              top: 'auto'
            });

            $('footer').show();

            window.scrollTo(0, 0);

            if (angular.element('.email-reader').length) {
              angular.element('.email-reader').animate({
                scrollTop: 0
              }, 0);
            }

            // Save the route title
            $rootScope.currTitle = $state.current.title;
          }
        );
      }

      function handleStateNotFond(){
        $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
          //$rootScope.loading = false;
          // logger.log("state not found", unfoundState.to);
        });
      }
    }
  }
})();
