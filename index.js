const admin = require('firebase-admin');
const serviceAccount = require('./stock-key.json');
const alpha = require('alphavantage')({ key: 'SRAGEGTDQSII8BQG' });
const {pointsWithProfit} = require('./functions');

admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const db = admin.firestore();

async function run(){
  try{
    rsi_data = await alpha.technical.rsi('GME', '1min', 14, 'open');
  }
  catch(error){
    console.error(error);
  }

  try{
    intra_data = await alpha.data.intraday('GME', 'full');
  }
  catch(error){
    console.error(error);
  }

  const rsi = rsi_data['Technical Analysis: RSI'];
  const intra = intra_data['Time Series (1min)'];
  console.log(intra_data);
  modded_rsi = Object.fromEntries(
    Object.entries(rsi).slice(1, 650)
  )


  pointsWithProfit(intra, modded_rsi, 0.03, 20, 50);

// DO NOT DELETE || FIREBASE STUFF
//   const docRef = db.collection('stocks').doc('GME');
//   await docRef.set({
//     ticker: 'GME',
//     rsi: yesterday_rsi['RSI'],
//   });
// }
}

run();
