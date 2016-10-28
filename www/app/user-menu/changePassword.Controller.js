(function () {
  'use strict';

  angular
    .module('app.userMenu')
    .controller('ChangePasswordController', ChangePasswordController);

  ChangePasswordController.$inject = ['$q', 'changePasswordFactory', '$state', 'validationHelperFactory', '$location', '$stateParams', '$localStorage', 'toast'];

  function ChangePasswordController($q, changePasswordFactory, $state, validationHelperFactory, $location, $stateParams, $localStorage, toast) {
    var vm = this;

    vm.passData = {};
    var userid = $localStorage._identity.userDetails.id;

    vm.submit = function () {
      vm.passData.password = vm.password;
      vm.passData.newPassword = vm.newPassword;
      vm.passData.id = userid;

      var firstError = null;
      console.log(vm.Form)
      if (vm.Form.$invalid) {
        validationHelperFactory.manageValidationFailed(vm.Form);
        return;
      }
      else {
        console.log(vm.passData);
        changePasswordFactory.change(vm.passData).then(function (response) {

          if (response.status == 200) {
            toast.show('Password Changed');
            $state.go('auth.signin');
          }
          else if (response.status == -1) {
            toast.show('Network Error');
            console.error(response);
          }
          else if (response.status == 400) {
            toast.show(response.data[0].message);
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
