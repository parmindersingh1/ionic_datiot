(function () {
  'use strict';

  angular
    .module('app.userMenu')
    .controller('userProfileController', UserProfileController);

  UserProfileController.$inject = ['userService', 'toast' ];

  function UserProfileController( userService, toast) {
    var vm = this;

    vm.user = userService.getUser();

  }
}());
