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
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const {
  findPointsWithProfit,
  probOfProfit
} = require('./functions');

const {
  getIntervaledOHLC,
  getOHLCData,
} = require('./fetchdata');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', async function(req, res) {
  let indicators = Object.values(req.body)[0];
  let response = {};
  for(let i = 0; i < indicators.length; ++i){
    switch(indicators[i]) {
      case 'RSI Hourly':
        response['hourly'] = await getIntervaledOHLC('GME', '60min');;
        break;
      case 'RSI Daily':
        response['daily'] = "in progress";
        break;
      case 'RSI 4 Hours':
        response['4 hours'] = "in progress";
        break;
      case 'RSI Monthly':
        response['monthly'] = "in progress";
        break;
      default:
        res.json("unknown indicator detected")
    }
  }
  res.json(response);
});

app.listen(process.env.PORT || 8080);

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
}

