(function() {
  'use strict';

  angular
    .module('app.core')

    // PUSH NOTIFICATIONS
    .service('PushNotificationsService', function ($rootScope){
  	/* Apple recommends you register your application for push notifications on the device every time it’s run since tokens can change. The documentation says: ‘By requesting the device token and passing it to the provider every time your application launches, you help to ensure that the provider has the current token for the device. If a user restores a backup to a device other than the one that the backup was created for (for example, the user migrates data to a new device), he or she must launch the application at least once for it to receive notifications again. If the user restores backup data to a new device or reinstalls the operating system, the device token changes. Moreover, never cache a device token and give that to your provider; always get the token from the system whenever you need it.’ */

      this.register = function() {

      //   // ANDROID PUSH NOTIFICATIONS
        if(ionic.Platform.isAndroid())
        {
          FCMPlugin.getToken(
            function(token){
              console.log(token);
            },
            function(err){
              console.log('error retrieving token: ' + err);
            }
          );

          FCMPlugin.onNotification(
              function(data){
                if(data.wasTapped){
                  //Notification was received on device tray and tapped by the user.
                  console.log("tapped: "+ JSON.stringify(data) );
                }else{
                  //Notification was received in foreground. Maybe the user needs to be notified.
                  alert("else: "+ JSON.stringify(data) );
                }
              },
              function(msg){
                console.log('onNotification callback successfully registered: ' + msg);
              },
              function(err){
                console.log('Error registering onNotification callback: ' + err);
              }
            );

        }
      };
    });
} ());
