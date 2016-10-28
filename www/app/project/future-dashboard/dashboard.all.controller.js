(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardAllController', DashboardAllController);

  DashboardAllController.$inject = ['$q', 'dashboardFactory'];
  /* @ngInject */
  function DashboardAllController($q, dashboardFactory) {
    var vm = this;
    vm.dashboard = {};
    vm.dashboardData = {};
    vm.title = 'Client Dashboard';


    activate();

    function activate() {

      var promises = [getDashboard(), getDashboardData(), getData()];
      return $q.all(promises).then(function () {
        console.log('Activated Dashboard View');
      });




      // var promises = [getMessageCount(), getPeople()];
      // return $q.all(promises).then(function() {
      //   //logger.info('Activated Dashboard View');
      // });

    }

    function getData() {
      return dashboardFactory.getData()
        .then(function (response) {
          console.log(response);
          vm.boxData = response.data.dashboardData.item;
          vm.BarGraphData = response.data.barGraphData;
          vm.WaveGraphData = response.data.waveGraphData;
          vm.ExpensesGraphData = response.data.expensesGraphData;
          vm.KnobData = response.data.realTimeKnobData;
        })
        .catch(function (error) {
          console.error(error);
        });
    }

    function getDashboard() {
      return dashboardFactory.getDashboard().then(function (response) {
        console.log(response.data.title);
        vm.dashboard = response.data;
        vm.title = response.data.title;
        return vm.dashboard;
      });
    }

    function getDashboardData() {
      return dashboardFactory.getDashboardData().then(function (response) {
        //console.log(response.data);
        vm.dashboardData = response.data;
        return vm.dashboardData;
      });
    }
  }

})();
