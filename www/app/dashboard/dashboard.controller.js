(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController)
    .controller('AppCtrl', AppCtrl);

  DashboardController.$inject = ['$q', 'dashFactory'];
  AppCtrl.$inject = ['userService'];
  /* @ngInject */
  function DashboardController($q, dashFactory) {
    var vm = this;
    vm.dashboard = {};
    vm.dashboardData = {};
    vm.title = 'Dashboard';



  }

 function AppCtrl(userService) {
   var vm = this;
   vm.user=userService.getUser();
   console.log(JSON.stringify(vm.user));
 }

})();
