(function () {
  'use strict';

  angular
    .module('app.dashboard')
    .controller('DashboardController', DashboardController)
    .controller('AppCtrl', AppCtrl);

  DashboardController.$inject = ['$q', 'dashboardFactory'];
  /* @ngInject */
  function DashboardController($q, dashboardFactory) {
    var vm = this;
    vm.dashboard = {};
    vm.dashboardData = {};
    vm.title = 'Site Dashboard';


    activate();

    function activate() {

      var promises = [getDashboard(), getDashboardData(), getData()];
      return $q.all(promises).then(function () {
        console.info('Activated Dashboard View');
      });

    }



    function getData() {
         var data={};
         data.dashboardData = {
            item: [
              {
                title: "Total Visits ",
                value: "3645",
                previous: "+11%",
                bar: "89",
                barColor: "azure",
                textStyle: "text-azure",
                partitionStyle: "partition-red"
              },
              {
                title: "Bouce rate ",
                value: "53 %",
                previous: "-1%",
                bar: "46",
                barColor: "green",
                textStyle: "text-green",
                partitionStyle: "partition-green"
              },
              {
                title: "Total Conversions ",
                value: "179",
                previous: "-12%",
                bar: "77",
                barColor: "purple",
                textStyle: "text-purple",
                partitionStyle: "partition-red"
              },
              {
                title: "Conversion Rate ",
                value: "7830 $",
                previous: "+11%",
                bar: "80",
                barColor: "orange",
                textStyle: "text-orange",
                partitionStyle: "partition-green"
              }
            ]
          };

        data.barGraphData= {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          series: ['First', 'Second'],
          data: [[65, 59, 80, 81, 56, 55, 40], [28, 48, 40, 19, 86, 27, 90]]
        };

        data.waveGraphData= {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          series: ['Alpha', 'Omega', 'Kappa'],
          data: [[656, 594, 806, 817, 568, 557, 408, 843, 642, 1202, 1322, 847], [282, 484, 402, 194, 864, 275, 905, 1025, 123, 1455, 650, 1651], [768, 368, 253, 163, 437, 678, 1239, 1345, 1898, 1766, 1603, 2116]]
        };

        data.expensesGraphData= {
          labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'i', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
          series: ['dataset'],
          data: [[65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 80, 81]]
        };

        data.realTimeKnobData= {
          randomUsers: 210,
          cpuvalue: 65,
          ramvalue: 330
        };


        vm.boxData = data.dashboardData.item;
        vm.BarGraphData = data.barGraphData;
        vm.WaveGraphData = data.waveGraphData;
        vm.ExpensesGraphData = data.expensesGraphData;
        vm.KnobData = data.realTimeKnobData;
    }

    function getDashboard() {
      var data = {
    id : "dashboard1",
    level : "client",
    entityId : "client1",
    title : "Site Dashboard",
    default : true,
    rows : [
      {
        rowIndex : 0,
        columns : [
          {
            columnIndex : 0,
            widget : {
              name : "boxHeader",
              title: "Total Visits ",
              // value: "3645",
              // previous:"+11%",
              // bar:"89",
              barColor:"azure",
              textStyle:"text-azure",
              partitionStyle:"partition-red"
            },
            cols : 3,
            esQuery : {
              //query dsl
            },
            dataMapping : {
              source : "dest"
            }
          },
          {
            columnIndex : 1,
            widget : {
              name : "boxHeader",
              title: "Bounce rate ",
              // value: "53 %",
              // previous:"-1%",
              // bar:"46",
              barColor:"green",
              textStyle:"text-green",
              partitionStyle:"partition-green"
            },
            cols : 3,
            esQuery : {
              //query dsl
            },
            dataMapping : {
              source : "dest"
            }
          },
          {
            columnIndex : 2,
            widget : {
              name : "boxHeader",
              title: "Total Conversions ",
              // value: "179",
              // previous:"-12%",
              // bar:"77",
              barColor:"purple",
              textStyle:"text-purple",
              partitionStyle:"partition-red"
            },
            cols : 3,
            esQuery : {
              //query dsl
            },
            dataMapping : {
              source : "dest"
            }
          },
          {
            columnIndex : 3,
            widget : {
              name : "boxHeader",
              title: "Conversion Rate ",
              // value: "7830 $",
              // previous:"+11%",
              // bar:"80",
              barColor:"orange",
              textStyle:"text-orange",
              partitionStyle:"partition-green"
            },
            cols : 3,
            esQuery : {
              //query dsl
            },
            dataMapping : {
              source : "dest"
            }
          }
        ]
      },
      {
        rowIndex : 1,
        columns : [
          {
            columnIndex : 0,
            widget : {
              name : "graph1",
              title: "Conversion Rate "
            },
            cols : 6,
            esQuery : {
              //query dsl
            },
            dataMapping : {
              source : "dest"
            }
          },
          {
            columnIndex : 1,
            widget : {
              name : "graph2",
              title: "Conversion Rate "
            },
            cols : 6,
            esQuery : {
              //query dsl
            },
            dataMapping : {
              source : "dest"
            }
          }
        ]
      },
      {
        rowIndex : 2,
        columns : [
          {
            columnIndex : 0,
            widget : {
              name : "map",
              title: "Sites "
            },
            cols : 12,
            esQuery : {
              //query dsl
            },
            dataMapping : {
              source : "dest"
            }
          }
        ]
      }
    ]
  };

        vm.dashboard = data;
        vm.title = data.title;
        return vm.dashboard;
    }

    function getDashboardData() {
        vm.dashboardData = {
    id : "dashboard1",
    rows : [
      {
        rowIndex : 0,
        columns : [
          {
            columnIndex : 0,
            widget : {
              name : "boxHeader",
              value: "3645",
              previous:"+11%",
              bar:"89"
            }
          },
          {
            columnIndex : 1,
            widget : {
              name : "boxHeader",
              value: "53 %",
              previous:"-1%",
              bar:"46"
            }
          },
          {
            columnIndex : 2,
            widget : {
              name : "boxHeader",
              value: "179",
              previous:"-12%",
              bar:"77"
            }
          },
          {
            columnIndex : 3,
            widget : {
              name : "boxHeader",
              value: "7830 $",
              previous:"+11%",
              bar:"80"
            }
          }
        ]
      },
      {
        rowIndex : 1,
        columns : [
          {
            columnIndex : 0,
            widget : {
              name : "graph1"
            }
          },
          {
            columnIndex : 1,
            widget : {
              name : "graph2"
            }
          }
        ]
      },
      {
        rowIndex : 2,
        columns : [
          {
            columnIndex : 0,
            widget : {
              name : "map"
            }
          }
        ]
      }
    ]
  };
        return vm.dashboardData;

    }












    //
    // function getData() {
    //   return dashboardFactory.getData()
    //     .then(function (response) {
    //       console.log(response);
    //       vm.boxData = response.data.dashboardData.item;
    //       vm.BarGraphData = response.data.barGraphData;
    //       vm.WaveGraphData = response.data.waveGraphData;
    //       vm.ExpensesGraphData = response.data.expensesGraphData;
    //       vm.KnobData = response.data.realTimeKnobData;
    //     })
    //     .catch(function (error) {
    //       console.error(error);
    //     });
    // }
    //
    // function getDashboard() {
    //   return dashboardFactory.getDashboard().then(function (response) {
    //     console.log(response.data.title);
    //     vm.dashboard = response.data;
    //     vm.title = response.data.title;
    //     return vm.dashboard;
    //   });
    // }
    //
    // function getDashboardData() {
    //   return dashboardFactory.getDashboardData().then(function (response) {
    //     //console.log(response.data);
    //     vm.dashboardData = response.data;
    //     return vm.dashboardData;
    //   });
    // }
  }

  function AppCtrl(userService) {
    var vm = this;
    vm.user=userService.getUser();
    // console.log(JSON.stringify(vm.user));
  }

})();
