/* global toastr:false, moment:false */
(function () {
  'use strict';

  var env = {};
  if(window){
    env = window.__env;
  }

  angular
    .module('app.core')
    // .constant('GCM_SENDER_ID', '173383874361')
    .constant('__env', env);

})();
