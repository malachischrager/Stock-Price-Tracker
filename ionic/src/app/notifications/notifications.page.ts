import { Component, OnInit } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  constructor(private emailComposer: EmailComposer) { }

  ngOnInit() {
  }


  sendEmail() {
    console.log("Sending email");

    let email = {
      to: 'gdalessa@usc.edu',
      cc: '',
      subject: 'Stock Price Tracker Email',
      body: 'I really hope this works so I can be done with this.',
      isHtml: false
    }

    this.emailComposer.open(email);
  }

}
