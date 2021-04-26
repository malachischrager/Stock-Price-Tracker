import { Injectable } from '@angular/core';

// 1st way
// https://www.youtube.com/watch?v=YUr8pw0nO7Y
// import {
//   Plugins,
//   PushNotification,
//   PushNotificationToken,
//   PushNotificationActionPerformed,
//   Capacitor
// } from '@capacitor/core'
// import { Router } from '@angular/router'

// const { PushNotifications } = Plugins

// 2nd Way
// import { Firebase, FirebaseOriginal } from '@ionic-native/firebase';
// import { Platform } from '@ionic/angular';
// import { AngularFirestore } from '@angular/fire/firestore';
// import { FirebaseApp } from '@angular/fire';

@Injectable({
  providedIn: 'root'
})
export class FcmService {

  constructor(
    // public firebaseNative: FirebaseOriginal,
    // public afs: AngularFirestore,
    // public platform: Platform
  ) {}


  // 1st Way
  // public initPush() {
  //   if (Capacitor.platform !== 'web') {
  //     this.registerPush();
  //   }
  // }

  // private registerPush() {
  //   PushNotifications.requestPermission().then((permission) => {
  //     if (permission.granted) {
  //       // Register with able to recieve the push via APNS/FCM
  //       PushNotifications.register();
  //     } else {
  //       // Can't receive because we weren't allowed

  //     }
  //   })

    // Adds a listener to determine if registering for the token was successful
    // PushNotifications.addListener(
    //   'registration',
    //   (token: PushNotificationToken) => {
    //     console.log('My Token: ' + JSON.stringify(token));
    //   }
    // );

    // Runs when the push notification is received
    // PushNotifications.addListener(
    //   'pushNotificationReceived',
    //   async (notification: PushNotification) => {
    //     console.log("Push received: " + JSON.stringify(notification));
    //   }
    // );

    // Runs when the user clicks on the notification
    // PushNotifications.addListener(
    //   'pushNotificationActionPerformed',
    //   async (notification: PushNotificationActionPerformed) => {
    //     const data = notification.notification.data;
    //     console.log('Action Performed: ' + JSON.stringify(notification.notification));
    //     if (data.detailsId) {
    //       this.router.navigateByUrl()
    //     }
    //   }
    // )


  }


  // 2nd Way
//   async getToken() {
//     // let token;

//     // if (this.platform.is('ios')) {
//     //   console.log("Getting token for Notifications in IOS");
//     //   token = await this.firebaseNative.getToken();
//     //   await this.firebaseNative.grantPermission();
//     // }

//     // return this.saveTokenToFirestore(token)
//   }


//   private saveTokenToFirestore(token) {
//     // if (!token) return;
//     // const devicesRef = this.afs.collection('devices')

//     // const docData = {
//     //   token,
//     //   userID: 'testUser'
//     // }

//     // return devicesRef.doc(token).set(docData)
//   }

//   listenToNotifications() {
//     // return this.firebaseNative.onNotificationOpen()
//   }

// }
