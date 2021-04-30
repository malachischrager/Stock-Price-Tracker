/*--------------------------------------------------------------
This file is our main/driver file that sets up the firebase
database, gets the data from the API data from Alphavantage, and
calls the functions in the funtions.js file.
---------------------------------------------------------------*/

const serviceAccount = require('./stock-key.json');
var express = require('express');
var cors = require('cors');

var app2 = express();
app2.use(cors({origin: '*'}));

const alpha = require('alphavantage')({
  key: 'SRAGEGTDQSII8BQG'
});
const bodyParser = require('body-parser');
const {
  findPointsWithProfit,
  probOfProfit
} = require('./functions');

const {
  getIntervaledOHLC,
  getOHLCData,
} = require('./fetchdata');



app2.get('/', async function (req, res) {
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
app2.listen(3000);


const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/', async function(req, res) {
  let preferences = Object.values(req.body)[0];
  let ticker = Object.values(req.body)[1];
  let buyOrSell = Object.values(req.body)[2];
  let numCandles = Object.values(req.body)[3];
  let profitThreshold = Object.values(req.body)[4];

  numCandles = parseInt(numCandles);
  profitThreshold = parseFloat(profitThreshold);

  console.log(ticker + " " + buyOrSell + " " + numCandles + " " + profitThreshold);
  let response = {};

  let ohlcData = await getIntervaledOHLC(ticker, '30min');
  let ohlcIntervaledData = ohlcData[0];
  let ohlcDailyData = ohlcData[1];
  let indicators = [];
  for(let i = 0; i < preferences.length; ++i){
    console.log(preferences[i]);
    switch(preferences[i]) {
      case 'RSI Hourly':
        indicators.push('1 hour');
        break;
      case 'RSI Daily':
        indicators.push('Daily');
        break;
      case 'RSI 4 Hours':
        indicators.push('4 hour');
        break;
      default:
        res.json("unknown indicator detected");
    }
  }
  let results = await findPointsWithProfit(indicators, ohlcIntervaledData, ohlcDailyData, '30min', numCandles, profitThreshold, buyOrSell);
  let labels = results[1];
  let graphData = results[2];
  let probProfData = probOfProfit(results[0]);
  let probProf = probProfData[0];
  let profits = probProfData[1];
  let losses = probProfData[2];
  response['Ticker'] = ticker;
  response['NumCandles'] = numCandles;
  response['ProfitThreshold'] = profitThreshold;
  response['Labels'] = labels;
  response['Graph Data'] = graphData;
  response['Interval Data'] = ohlcIntervaledData;
  response['Daily Data'] = ohlcDailyData;
  response['Results'] = results;
  response['Probability of Profit'] = probProf;
  response['Profits'] = profits;
  response['Losses'] = losses;
  response['Indicators'] = indicators;


  // console.log('hello');
  // console.log(probProf);
  // for(let i = 0; i < indicators.length; ++i){
  //   console.log(indicators[i]);
    // switch(indicators[i]) {
    //   case 'RSI Hourly':
    //     response['hourly'] = await getIntervaledOHLC('GME', '60min');;
    //     break;
    //   case 'RSI Daily':
    //     response['daily'] = "in progress";
    //     break;
    //   case 'RSI 4 Hours':
    //     response['4 hours'] = "in progress";
    //     break;
    //   case 'RSI Monthly':
    //     response['monthly'] = "in progress";
    //     break;
    //   default:
    //     res.json("unknown indicator detected")
  //   }
  // }
  res.json(response);
});

app.listen(process.env.PORT || 8080);


// async function run() {

  // let indicators = ['Daily'];
  // try {
    // let ohlcData = await getIntervaledOHLC('GME', '30min');
    // let ohlcIntervaledData = ohlcData[0];
    // let ohlcDailyData = ohlcData[1];
  //
    // let results = await findPointsWithProfit(indicators, ohlcDailyData, ohlcDailyData, '30min', 12, 0.03);
    // probOfProfit(results[0]);
  //   let labels = results[1];
  //   let graphData = results[2];
  //   console.log(labels);
  //   console.log(graphData);
  //
  // }
//   catch(error) {
//     console.log(error);
//   }
// }

//run();
