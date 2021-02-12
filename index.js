const admin = require('firebase-admin');
const serviceAccount = require('./stock-key.json');
const alpha = require('alphavantage')({ key: 'SRAGEGTDQSII8BQG' });


admin.initializeApp({credential: admin.credential.cert(serviceAccount)});

const db = admin.firestore();

async function run(){
  data = await alpha.technical.rsi('GME', 'daily', 60, 'open');
  const rsi = data['Technical Analysis: RSI'];

  // get yesterday's date
  let today = new Date();
  today.setDate(today.getDate()-1);
  string_date = today.toISOString().slice(0, 10);

  // get yesterday's rsi
  yesterday_rsi = rsi[string_date];
  console.log(rsi[string_date]);


  const docRef = db.collection('stocks').doc('GME');
  await docRef.set({
    ticker: 'GME',
    rsi: yesterday_rsi['RSI'],
  });
}

run();
