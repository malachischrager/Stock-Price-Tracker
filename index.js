/*--------------------------------------------------------------
This file is our main/driver file that sets up the firebase
database, gets the data from the API data from Alphavantage, and
calls the functions in the funtions.js file.
---------------------------------------------------------------*/
const moment = require('moment');
const admin = require('firebase-admin');
const serviceAccount = require('./stock-key.json');
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

async function run() {
  let indicators = ['Daily', '1 hour', '4 hour'];
  try {
    let ohlcData = await getIntervaledOHLC('GME', '30min');
    let ohlcIntervaledData = ohlcData[0];
    let ohlcDailyData = ohlcData[1];
    console.log(ohlcIntervaledData.length);
    let results = await findPointsWithProfit(indicators, ohlcIntervaledData, ohlcDailyData, '30min', 12, 0.03);
    probOfProfit(results);
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

run();
