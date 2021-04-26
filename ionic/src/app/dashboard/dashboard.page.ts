import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(private router: Router) { 
    console.log("Calling Dashboard contructor()");
  }

  ngOnInit() {
  }


  viewAllRecentTrades() {
    console.log("Navigating to see all recent trades");
    this.router.navigateByUrl('recent-trades')
  }

  loadDashboardData() {
    console.log('Loading Dashboard Data');
  }


  formatTimeButtons() {

  }

}
