(function () {
  'use strict';

  angular
    .module('app.auth')
    .controller('ResetController', ResetController);

  ResetController.$inject = ['$q', 'resetFactory', '$state', 'validationHelperFactory', '$location', '$stateParams', 'toast'];

  function ResetController($q, resetFactory, $state, validationHelperFactory, $location, $stateParams, toast) {
    var vm = this;

    vm.key = '';
    vm.passData = {};


    vm.passData.key = $location.search().key;


    vm.submit = function () {
      vm.passData.newPassword = vm.newPassword;
      vm.passData.confirmPassword = vm.confirmPassword;

      var firstError = null;
      if (reset_form.$invalid) {
        validationHelperFactory.manageValidationFailed(vm.Form);
        return;
      }
      else {
        console.log(vm.passData);
        resetFactory.abc(vm.passData).then(function (response) {

          if (response.status == 200) {
            toast.show('Password Reset');
            $state.go('auth.signin');
          }
          else if (response.status == -1) {
            toast.show('Network Error');
            console.error(response);
          }
          else if (response.status == 400) {
            toast.show('Invalid data received at backend');
            console.error(response);
          }
          else {
            toast.show('Some problem');
            console.error(response);
          }
        });

      }
    }

  }
}());
