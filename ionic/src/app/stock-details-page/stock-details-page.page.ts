import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-stock-details-page',
  templateUrl: './stock-details-page.page.html',
  styleUrls: ['./stock-details-page.page.scss'],
})
export class StockDetailsPagePage implements OnInit {

  public pageTitle: string;


  constructor(private route: ActivatedRoute, private router: Router) { 
    this.route.queryParams.subscribe(params => {
      console.log(params['stock'])
      this.pageTitle = params['stock']
    })
  }

  ngOnInit() {
  }

}
