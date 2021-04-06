/*--------------------------------------------------------------
This file is our main/driver file that sets up the firebase
database, gets the data from the API data from Alphavantage, and
calls the functions in the funtions.js file.
---------------------------------------------------------------*/
const moment = require('moment');
const admin = require('firebase-admin');
const serviceAccount = require('./stock-key.json');
var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors({origin: '*'}));

const alpha = require('alphavantage')({
  key: 'SRAGEGTDQSII8BQG'
});

const {
  findPointsWithProfit,
  probOfProfit
} = require('./functions');

const {
  rsi,
  getData
} = require('./indicators');

const {
  getIntervaledOHLC,
  getOHLCData,
} = require('./fetchdata');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
// const indicators = [{
//     indicator: 'RSI',
//     intervals: ['min'],
//     rsi_params: {
//       high: 70,
//       low: 30
//     }
//   },
//   {
//     indicator: 'MACD',
//     intervals: ['min']
//   }
// ];
app.get('/', async function (req, res) {
  let indicators = ['1 hour'];
  try {
    let ohlcData = await getIntervaledOHLC('TSLA', '30min');
    let ohlcIntervaledData = ohlcData[0];
    let ohlcDailyData = ohlcData[1];

    let results = await findPointsWithProfit(indicators, ohlcIntervaledData, ohlcDailyData, '30min', 12, 0.03);
    let probProf = probOfProfit(results[0]);
    let labels = results[1];
    let graphData = results[2];
    results[0] = probProf;

    res.send(results);

  }
  catch(error) {
    console.log(error);
  }
})

app.listen(3000);
async function run() {

  let indicators = ['Daily'];
  try {
    let ohlcData = await getIntervaledOHLC('GME', '30min');
    let ohlcIntervaledData = ohlcData[0];
    let ohlcDailyData = ohlcData[1];

    let results = await findPointsWithProfit(indicators, ohlcDailyData, ohlcDailyData, '30min', 12, 0.03);
    probOfProfit(results[0]);
    let labels = results[1];
    let graphData = results[2];
    console.log(labels);
    console.log(graphData);


    // document.write('ha');
    //
    // const config = {
    //   type: 'bar',
    //   data: data,
    //   options: {
    //     responsive: true,
    //     plugins: {
    //       legend: {
    //         position: 'top',
    //       },
    //       title: {
    //         display: true,
    //         text: 'Chart.js Bar Chart'
    //       }
    //     }
    //   },
    // };
  }
  catch(error) {
    console.log(error);
  }


  // getOHLCData("GME", "60min", "year1month1")
  // data = await getData('STXS', '1min');
  // findPointsWithProfit(indicators, 10, 0.03, 'ZM');
  // pointsWithProfitRSIOverRange(data, 0.03, 20, 70);
  // pointsWithProfitRSIOverandMACD(data, 0.03, 20, 70);
  // pointsWithProfitRSIUnderRange(data, 0.03, 20, 30);
  // pointsWithProfitRSIUnderandMACD(data, 0.03, 20, 30);

  // DO NOT DELETE || FIREBASE STUFF
  //   const docRef = db.collection('stocks').doc('GME');
  //   await docRef.set({
  //     ticker: 'GME',
  //     rsi: yesterday_rsi['RSI'],
  //   });
  // }
}

//run();
