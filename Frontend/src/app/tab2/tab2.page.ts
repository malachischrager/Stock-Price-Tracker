import { Component, ViewChild } from '@angular/core';
import { Chart, BarController, BarElement, CategoryScale, LinearScale} from 'chart.js';
Chart.register(BarController, BarElement, CategoryScale, LinearScale);

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild('barChart') barChart;

  public bars:any = undefined;
  public ticker:string = "";
  public numCandles:string = "";
  public profitThreshold:string = "";
  public profits:string = "";
  public losses:string = "";
  public probProfit:string = "";
  colorArray: any;

  constructor() {
  }
  ionViewDidEnter() {
    let data = JSON.parse(localStorage.getItem('myData'));
    let labels = data['Labels'];
    let graphData = data['Graph Data'];
    let tickerVal = data['Ticker'];
    let numCandlesVal = data['NumCandles'];
    let profitThresholdVal = data['ProfitThreshold'];
    let probProfitVal = data['Probability of Profit'];
    let profitsVal = data['Profits'];
    let lossesVal = data['Losses'];
    this.createBarChart(labels, graphData);
    this.ticker = tickerVal;
    this.numCandles = numCandlesVal;
    this.profitThreshold = profitThresholdVal;
    this.profits = profitsVal;
    this.losses = lossesVal;
    this.probProfit = probProfitVal;
    console.log("Did data load? : ", data);
  }

  createBarChart(labels, graphData) {
    let pointBackgroundColors = [];
    for (let i = 0; i < graphData.length; i++) {
        if (graphData[i] > 0.03) {
            pointBackgroundColors.push("#00FF00");
        }
        else if (graphData[i] < 0.03) {
            pointBackgroundColors.push("#FF0000");
        }
        else{
            pointBackgroundColors.push("#000000");
        }
    }

    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Percentage Profit',
          data: graphData,
          backgroundColor: pointBackgroundColors, // array should have same number of elements as number of dataset
          borderColor: pointBackgroundColors,// array should have same number of elements as number of dataset
        }]
      }
    });
  }
}
