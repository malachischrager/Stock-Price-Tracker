import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavigationExtras, Router } from '@angular/router';



interface Stock {
    symbol: string;
    name: string;
}

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  public stockList: Observable<Stock[]>;



  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }


  async searchStocks(event) {
    const searchTerm = (event.srcElement.value).toLowerCase()
    
    if (!searchTerm) {
      return
    }

    let apiStr = "https://www.alphavantage.co/query?function=SYMBOL_SEARCH&"
    apiStr += "keywords=" + searchTerm
    apiStr += "&apikey=SRAGEGTDQSII8BQG"
    // console.log(apiStr)

    this.http.get<Stock[]>(apiStr)
      .subscribe(data => {
        this.stockList = data['bestMatches']
        // console.log(this.stockList)
      })
  }

  seeStockDetails(clickedStock) {
    const stockTitle = clickedStock.target.innerText

    let navExtras: NavigationExtras = {
      queryParams: {
        stock: stockTitle
      }
    }
    this.router.navigate(['stock-details-page'], navExtras)
  }

  


}
