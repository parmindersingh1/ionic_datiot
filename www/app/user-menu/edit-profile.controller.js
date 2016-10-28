(function () {
  'use strict';

  angular
    .module('app.userMenu')
    .controller('EditProfileController', EditProfileController);

  EditProfileController.$inject = ['$q', 'userProfileFactory', '$state', '$http', 'validationHelperFactory','$stateParams', 'userService', 'toast', '$cordovaCamera', '$ionicLoading' ];

  function EditProfileController($q, userProfileFactory, $state, $http, validationHelperFactory, $stateParams, userService, toast, $cordovaCamera, $ionicLoading) {
    var vm = this;

    vm.user = userService.getUser();
    vm.user.city = 'adsasd';
    vm.user.zipcode = '125001';
    vm.imgURI = "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg";

    vm.takePhoto = function () {
          var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                vm.imgURI = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                // An error occured. Show a message to the user
            });
        }

        vm.choosePhoto = function () {
          var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

            $cordovaCamera.getPicture(options).then(function (imageData) {
                vm.imgURI = "data:image/jpeg;base64," + imageData;
            }, function (err) {
                // An error occured. Show a message to the user
            });
        };





    var activate = function () {
    console.log(vm.user);
    };

    var userid = vm.user.id;

    vm.save = function () {
      var firstError = null;
      if (vm.Form.$invalid) {
        validationHelperFactory.manageValidationFailed(vm.Form);
        return;
      }
      else {
        console.log(vm.user);
        userProfileFactory.edit(vm.user).then(function (response) {
          if (response.status == 200) {
          userService.setUser(response.data);
            toast.show('Edit Saved');
            $state.go('app.dashboard');
          }
          else if (response.status == -1) {
            toast.show('Network Error');
            console.error(response);
          }
          else if (response.status == 400) {
            toast.show(response.data.errors[0].message);
            console.error(response);
          }
          else {
            toast.show('Some problem');
            console.error(response);
          }
        });

      }
    };
  }
}());
