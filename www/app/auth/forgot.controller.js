(function() {
  'use strict';

  angular
    .module('app.auth')
    .controller('ForgotController', ForgotController);

  ForgotController.$inject = ['$q','forgotFactory','$state', 'validationHelperFactory', 'toast'];

  function ForgotController($q, forgotFactory, $state, validationHelperFactory, toast) {
    var vm = this;

    vm.submit = function() {
      var firstError = null;
      if (form.$invalid) {
        validationHelperFactory.manageValidationFailed(vm.form);
        return;
      }
      else {

        forgotFactory.abc(vm.email).then(function (response) {

          if (response.status == 200) {
            toast.show('This is a toast at the top.');
            $state.go('auth.signin');
          }
          else if (response.status == -1) {
            toast.show('Network Error');
            console.error(response);
          }
          else if (response.status == 400) {
            toast.show('Invalid data received at backend');
            console.error(response);
          }else if (response.status == 404) {
            toast.show(response.data[0].message);
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
