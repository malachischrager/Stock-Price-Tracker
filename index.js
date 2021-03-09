/*--------------------------------------------------------------
This file is our main/driver file that sets up the firebase
database, gets the data from the API data from Alphavantage, and
calls the functions in the funtions.js file.
---------------------------------------------------------------*/

const admin = require('firebase-admin');
const serviceAccount = require('./stock-key.json');
const alpha = require('alphavantage')({
  key: 'SRAGEGTDQSII8BQG'
});

const {
  findPointsWithProfit,
  pointsWithProfitRSIOverRange,
  pointsWithProfitRSIOverandMACD,
  pointsWithProfitRSIUnderRange,
  pointsWithProfitRSIUnderandMACD
} = require('./functions');

const {
  rsi,
  getData
} = require('./indicators');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();
const indicators = [{
    indicator: 'RSI',
    intervals: ['min'],
    rsi_params: {
      high: 70,
      low: 30
    }
  },
  {
    indicator: 'MACD',
    intervals: ['min']
  }
];

async function run() {
  // data = await getData('STXS', '1min');
  findPointsWithProfit(indicators, 10, 0.03, 'ZM');
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
