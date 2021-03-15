import { Component } from '@angular/core';

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
  constructor() {}

}
