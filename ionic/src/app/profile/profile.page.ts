import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

import { HttpClient } from '@angular/common/http';
import firebase from "firebase/app";
import "firebase/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public alerts:any = undefined;
  public rsi = [
    { val: 'RSI Hourly', isChecked: true },
    { val: 'RSI Daily', isChecked: false },
    { val: 'RSI 4 Hours', isChecked: false },
    { val: 'RSI Monthly', isChecked: false }
  ];
  constructor(
    public http: HttpClient,
    public fireauth: AngularFireAuth,
    public afs: AngularFirestoreModule,
    public firestore: AngularFirestore,
    ) {}

  async anonymouseSignIn() {

    await this.fireauth.signInAnonymously();
    // return new Promise<any>((resolve, reject) => {
    //   this.fireauth.signInAnonymously().then((data) => {
    //     resolve(data);
    //   }).catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     reject(`login failed ${error.message}`);
    //   });
    // });
  }

  async addPreferences() {
    let userid = firebase.auth().currentUser.uid;
    console.log(userid);
    let perferencesArray = new Array;
    let documentId;
    for(let i = 0; i < this.rsi.length; i++) {
      if(this.rsi[i].isChecked) {
        perferencesArray.push(this.rsi[i].val);
      }
    }

    const res = await this.firestore.collection('alerts').doc(userid).collection("alertsID").add({
      preferences: perferencesArray
    });
    console.log(res);
    //   this.firestore.collection('alerts').doc(userid).collection("alertsID").add({
    //       preferences: perferencesArray
    //     }
    //   ).then(
    //       (res) => {
    //         documentId = res;
    //         console.log(res);
    //         resolve(res)
    //       },
    //       err => reject(err)
    //     )
    //     })

    // new Promise<any>((resolve, reject) => {

    //   this.firestore.collection('all_alerts').doc().collection("alertsID").add({
    //       userID : userid,
    //       preferences: perferencesArray
    //     }
    //   ).then(
    //       (res) => {
    //         documentId = res;
    //         console.log(res);
    //         resolve(res)
    //       },
    //       err => reject(err)
    //     )
    //     })


    // http request to backend
    this.http.post('http://localhost:8080/', {
      preferences: perferencesArray
    }).subscribe((response) => {
      console.log(response);
      localStorage.setItem('myData',JSON.stringify(response));

    });
  }

  updatePreferences(id:any) {
    let userid = firebase.auth().currentUser.uid;
    let perferencesArray = new Array;
    let documentId;
    for(let i = 0; i < this.rsi.length; i++) {
      if(this.rsi[i].isChecked) {
        perferencesArray.push(this.rsi[i].val);
      }
    }

    new Promise<any>((resolve, reject) => {

      this.firestore.collection('alerts').doc(userid).collection("alertsID").doc(id).update({
          preferences: perferencesArray
        }
      )  })


    // new Promise<any>((resolve, reject) => {

    //   this.firestore.collection('all_alerts').doc(id).collection("alertsID").add({
    //       userID : userid,
    //       preferences: perferencesArray
    //     }
    //   ) })
  }


  deletePreferences(id:any) {

    let userid = firebase.auth().currentUser.uid;

    new Promise<any>((resolve, reject) => {

      this.firestore.collection('alerts').doc(userid).collection("alertsID").doc(id).delete();
    })

    // new Promise<any>((resolve, reject) => {

    //   this.firestore.collection('all_alerts').doc(id).collection("alertsID")
    // })

  }

  displayPreferences() {
    let userid = firebase.auth().currentUser.uid;
    console.log(userid);
    this.alerts = this.firestore.collection("alerts").doc(userid).collection("alertsID").snapshotChanges();
    console.log(this.alerts.forEach(element => {
      console.log(element);
    })

    );

  }

  ngOnInit() {
    this.anonymouseSignIn();
  }

}

