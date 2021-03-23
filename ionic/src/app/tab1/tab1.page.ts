import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from "firebase/app";
import "firebase/auth";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public rsi = [
    { val: 'RSI Hourly', isChecked: true },
    { val: 'RSI Daily', isChecked: false },
    { val: 'RSI 4 Hours', isChecked: false },
    { val: 'RSI Monthly', isChecked: false }
  ];
  constructor(
    public fireauth: AngularFireAuth,
    public afs: AngularFirestoreModule,
    public firestore: AngularFirestore
    // public afsc: AngularFirestoreCollection

  ) {}

  anonymouseSignIn() {
    return new Promise<any>((resolve, reject) => {
      this.fireauth.signInAnonymously().then((data) => {
        resolve(data);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject(`login failed ${error.message}`);
      });
    });
  }

  updatePreferences() {
    let userid = firebase.auth().currentUser.uid;
    let perferencesArray = new Array;
    for(let i = 0; i < this.rsi.length; i++) {
      if(this.rsi[i].isChecked) {
        perferencesArray.push(this.rsi[i].val);
      }
    }
    return new Promise<any>((resolve, reject) => {
      this.firestore.collection('/preferences').add({
        userID: userid,
        preferences: perferencesArray
      })
      .then(
        (res) => {
          resolve(res)
        },
        err => reject(err)
      )
      })
  }
  

  ngOnInit() {
    this.anonymouseSignIn();
  }

}
