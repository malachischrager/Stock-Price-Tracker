const admin = require('firebase-admin');
const serviceAccount = require('./stock-key.json');
const alpha = require('alphavantage')({ key: 'SRAGEGTDQSII8BQG' });
const { pointsWithProfitRSIOverRange, pointsWithProfitRSIOverandMACD, pointsWithProfitRSIUnderRange, pointsWithProfitRSIUnderandMACD} = require('./functions');
const { indicators, rsi, getData } = require('./indicators');

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const db = admin.firestore();

async function run(){
  data = await getData('STXS', '1min');
  pointsWithProfitRSIOverRange(data, 0.03, 20, 70);
  pointsWithProfitRSIOverandMACD(data, 0.03, 20, 70);
  pointsWithProfitRSIUnderRange(data, 0.03, 20, 30);
  pointsWithProfitRSIUnderandMACD(data, 0.03, 20, 30);

// DO NOT DELETE || FIREBASE STUFF
//   const docRef = db.collection('stocks').doc('GME');
//   await docRef.set({
//     ticker: 'GME',
//     rsi: yesterday_rsi['RSI'],
//   });
// }
}

run();
