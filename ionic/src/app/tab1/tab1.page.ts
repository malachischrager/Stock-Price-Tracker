import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from "firebase/app";
import "firebase/auth";
import {
  findPointsWithProfit,
  probOfProfit
} from './../backend/functions.js';

import {getIntervaledOHLC, getOHLCData} from './../backend/fetchdata.js';

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


  async addPreferences() {
    let userid = firebase.auth().currentUser.uid;
    let perferencesArray = new Array;
    let documentId;
    for(let i = 0; i < this.rsi.length; i++) {
      if(this.rsi[i].isChecked) {
        perferencesArray.push(this.rsi[i].val);
      }
    }
    let indicators = ['Daily', '1 hour', '4 hour'];
    try {
      let ohlcData = await getIntervaledOHLC('GME', '30min');
      let ohlcIntervaledData = ohlcData[0];
      let ohlcDailyData = ohlcData[1];

      let results = await findPointsWithProfit(indicators, ohlcIntervaledData, ohlcDailyData, '30min', 12, 0.03);
      probOfProfit(results);
    }
    catch(error) {
        console.log(error);
    }

    new Promise<any>((resolve, reject) => {

      this.firestore.collection('alerts').doc(userid).collection("alertsID").add({
          preferences: perferencesArray
        }
      ).then(
          (res) => {
            documentId = res;
            console.log(res);
            resolve(res)
          },
          err => reject(err)
        )
        })

    new Promise<any>((resolve, reject) => {

      this.firestore.collection('all_alerts').doc().collection("alertsID").add({
          userID : userid,
          preferences: perferencesArray
        }
      ).then(
          (res) => {
            documentId = res;
            console.log(res);
            resolve(res)
          },
          err => reject(err)
        )
        })


  }

  updatePreferences() {
    let userid = firebase.auth().currentUser.uid;
    let perferencesArray = new Array;
    let documentId;
    for(let i = 0; i < this.rsi.length; i++) {
      if(this.rsi[i].isChecked) {
        perferencesArray.push(this.rsi[i].val);
      }
    }
    // return new Promise<any>((resolve, reject) => {

    //   this.firestore.collection('alerts').doc(userid).collection("alertsID").update({
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
  }


  ngOnInit() {
    this.anonymouseSignIn();
  }

}
