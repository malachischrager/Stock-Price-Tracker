(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "8MT7":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title class = title>\n      Stock Price Tracker\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-header collapse=\"condense\">\n    <ion-toolbar>\n      <ion-title size=\"large\">Tab 1</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-list>\n  <ion-item *ngFor=\"let entry of rsi\">\n    <ion-label>{{entry.val}}</ion-label>\n    <ion-checkbox slot=\"end\" [(ngModel)]=\"entry.isChecked\"></ion-checkbox>\n  </ion-item>\n</ion-list>\n\n\n  <button ion-button (click) = \"addPreferences()\" icon-start large round color=\"dark\">\n    <ion-icon name=\"star\"></ion-icon>\n    Add Alert\n  </button>\n\n  <button ion-button (click) = \"displayPreferences()\" icon-start large round color=\"dark\">\n    <ion-icon name=\"star\"></ion-icon>\n    Display Preferences\n  </button>\n\n  <div *ngIf=\"alerts\" class=\"alert\">\n    <div *ngFor=\"let alert of alerts | async\">\n      {{alert.payload.doc.data().preferences}}\n\n\n      <button ion-button (click) = \"updatePreferences(alert.payload.doc.id)\" icon-start large round color=\"dark\">\n        <ion-icon name=\"star\"></ion-icon>\n        Update Alert\n      </button>\n\n      <button ion-button (click) = \"deletePreferences(alert.payload.doc.id)\" icon-start large round color=\"dark\">\n        <ion-icon name=\"star\"></ion-icon>\n        Delete Alert\n      </button>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "Mzl2":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "8MT7");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "rWyk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/auth */ "UbJi");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase/app */ "Jgta");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/auth */ "6nsN");










let Tab1Page = class Tab1Page {
    constructor(http, fireauth, afs, firestore) {
        this.http = http;
        this.fireauth = fireauth;
        this.afs = afs;
        this.firestore = firestore;
        this.alerts = undefined;
        this.rsi = [
            { val: 'RSI Hourly', isChecked: true },
            { val: 'RSI Daily', isChecked: false },
            { val: 'RSI 4 Hours', isChecked: false },
            { val: 'RSI Monthly', isChecked: false }
        ];
    }
    anonymouseSignIn() {
        return new Promise((resolve, reject) => {
            this.fireauth.signInAnonymously().then((data) => {
                resolve(data);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(`login failed ${error.message}`);
            });
        });
    }
    addPreferences() {
        let userid = firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].auth().currentUser.uid;
        let perferencesArray = new Array;
        let documentId;
        for (let i = 0; i < this.rsi.length; i++) {
            if (this.rsi[i].isChecked) {
                perferencesArray.push(this.rsi[i].val);
            }
        }
        new Promise((resolve, reject) => {
            this.firestore.collection('alerts').doc(userid).collection("alertsID").add({
                preferences: perferencesArray
            }).then((res) => {
                documentId = res;
                console.log(res);
                resolve(res);
            }, err => reject(err));
        });
        new Promise((resolve, reject) => {
            this.firestore.collection('all_alerts').doc().collection("alertsID").add({
                userID: userid,
                preferences: perferencesArray
            }).then((res) => {
                documentId = res;
                console.log(res);
                resolve(res);
            }, err => reject(err));
        });
        // http request to backend
        this.http.post('http://localhost:8080/', {
            preferences: perferencesArray
        }).subscribe((response) => {
            console.log(response);
        });
    }
    updatePreferences(id) {
        let userid = firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].auth().currentUser.uid;
        let perferencesArray = new Array;
        let documentId;
        for (let i = 0; i < this.rsi.length; i++) {
            if (this.rsi[i].isChecked) {
                perferencesArray.push(this.rsi[i].val);
            }
        }
        new Promise((resolve, reject) => {
            this.firestore.collection('alerts').doc(userid).collection("alertsID").doc(id).update({
                preferences: perferencesArray
            });
        });
        // new Promise<any>((resolve, reject) => {
        //   this.firestore.collection('all_alerts').doc(id).collection("alertsID").add({
        //       userID : userid,
        //       preferences: perferencesArray
        //     }
        //   ) })
    }
    deletePreferences(id) {
        let userid = firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].auth().currentUser.uid;
        new Promise((resolve, reject) => {
            this.firestore.collection('alerts').doc(userid).collection("alertsID").doc(id).delete();
        });
        // new Promise<any>((resolve, reject) => {
        //   this.firestore.collection('all_alerts').doc(id).collection("alertsID")
        // })
    }
    displayPreferences() {
        let userid = firebase_app__WEBPACK_IMPORTED_MODULE_7__["default"].auth().currentUser.uid;
        console.log(userid);
        this.alerts = this.firestore.collection("alerts").doc(userid).collection("alertsID").snapshotChanges();
        console.log(this.alerts.forEach(element => {
            console.log(element);
        }));
    }
    ngOnInit() {
        this.anonymouseSignIn();
    }
};
Tab1Page.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] },
    { type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestoreModule"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab1',
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "XOzS":
/*!*********************************************!*\
  !*** ./src/app/tab1/tab1-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "rWyk":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  color: navy;\n  font-family: \"Courier New\", monospace;\n  font-weight: bold;\n}\n\n.choose {\n  color: black;\n  font-family: \"Courier New\", monospace;\n  text-align: center;\n  margin: auto;\n  font-weight: bold;\n}\n\n.options {\n  color: white;\n  border-style: solid;\n  fill: gray;\n  height: 10px;\n  width: 200px;\n  margin: auto;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUVJLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQUFKIiwiZmlsZSI6InRhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBjb2xvcjogbmF2eTtcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uY2hvb3NlIHtcblxuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLm9wdGlvbnMge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGZpbGw6IGdyYXk7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcblxufSJdfQ== */");

/***/ }),

/***/ "tmrb":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "Mzl2");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab1-routing.module */ "XOzS");








let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab1PageRoutingModule"],
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map