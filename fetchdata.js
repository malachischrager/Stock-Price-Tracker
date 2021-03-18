/*--------------------------------------------------------------
This file is our modules that will be responsible for pulling the relevant
OHLC data for minute, hourly, and daily data.
---------------------------------------------------------------*/
const { metadata, historicalPrices} = require('iex-cloud');
const jQuery = require( "jquery" );
const {AjaxClient} = require('ajax-client');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();
const axios = require('axios');
const API_KEY = "SRAGEGTDQSII8BQG"
const alpha = require('alphavantage')({
    key: API_KEY
});

require("dotenv").config();

const client = new AjaxClient();

/** gets 15/30/60 minute intervaled market data for the last 90 days
 */
async function getIntervaledOHLC(symbol, interval) {
  ohlcData = [];

  // let listOfQueries = ['year1month1', 'year1month2', 'year1month3'];
  let listOfQueries = ['year1month3', 'year1month2', 'year1month1'];
  for(let i=0; i<listOfQueries.length; i++)
  {
    slice = listOfQueries[i];
    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=" + symbol + "&interval="+interval+"&slice=" + slice + "&apikey=" + API_KEY;
    sliceData = undefined;
    await axios.get(url)
            .then((response) => {
              sliceData = response;
            })
            .catch((error) => console.log(error));
    // console.log(sliceData['data']);
    sliceData = await csvToJSON(sliceData['data'].toString());
    try {
      sliceData = await parseRelevantOHLCMinuteData(sliceData);
    }
    catch(error) {
      console.log(error);
    }
    ohlcData.push.apply(ohlcData, sliceData);
  }

  // console.log(ohlcData);
  // obtaining daily OHLC daily 15 days prior to minute start time
  let minuteStartTime = new Date(ohlcData[0]['time']);
  await getDailyOHLC(minuteStartTime, symbol);
}

async function getDailyOHLC(startTime, symbol){
    let minuteStartMonth = startTime.getMonth();
    let minuteStartDate = startTime.getDate();
    let minuteStartYear = startTime.getFullYear();
    let dailyData = undefined;
    let dailyDataInRange = []
    let counter = 15;
    try{
        dailyData = await alpha.data.daily(symbol, 'compact', "json");
    }
    catch(error){
        console.error(error);
    }
    dailyData = dailyData['Time Series (Daily)'];
    let OHLCTimestamp = Object.keys(dailyData);
    let OHLCValues = Object.values(dailyData);
    for(let i = 0; i < OHLCTimestamp.length; ++i){
        let currTime = new Date(OHLCTimestamp[i]);
        let currMonth = currTime.getMonth();
        let currDate = currTime.getDate();
        let currYear = currTime.getFullYear();
        dailyDataInRange.push({time: currTime, 'OHLC': OHLCValues[i]})
        if(currYear <= minuteStartYear && currMonth <= minuteStartMonth && currDate < minuteStartDate){
            counter--;
            if(counter === 0){
                break;
            }
        }
    }
    console.log(dailyDataInRange);
}

/**
 * obtain OHLC data based on the following 3 params
 * @param symbol: Ticker Symbol e.g. "GME"
 * @param interval: Time interval between two data points, options include "1min, 5min, 15min, 30min & 60min"
 * @param slice: Particular segment of data from the past 2 year e.g. "year1month1"
 */
async function getOHLCData(symbol, interval, slice){

    let url = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + symbol + "&apikey=" + API_KEY;
    ohlcData = undefined;
    await axios.get(url)
        .then((response) => {
            ohlcData = response;
        })
        .catch((error) => console.log(error));
    // ohlcData = csvToJSON(ohlcData['data']);
    // ohlcData = await parseRelevantOHLCMinuteData(ohlcData);
    console.log(ohlcData);
}


/** returns MARKET HOUR (9:30 to 4 pm) ohlc minute data in a dict data structure with the following structure
 *  {'timestamp': {price: int}}
 */
function parseRelevantOHLCMinuteData(ohlcData){
  let relevantData = [];
  ohlcData = JSON.parse(ohlcData);
  //console.log(ohlcData);
  for(i=ohlcData.length-2; i>=0; i--){
    let time = ohlcData[i]['time'];
    time = new Date(time);

    // january is 0 so we add 1 to .getMonth()
    month = time.getMonth()+1;
    day = time.getDate();
    year = time.getFullYear();

    if(time.getHours() == 9 && time.getMinutes() < 30){continue}
    if(time.getHours() < 9) {continue}
    if(time.getHours() == 16 && time.getMinutes() > 0) {continue}
    if(time.getHours() > 16) {continue}

    relevantData.push({time: ohlcData[i]['time'], datetime: time, price: ohlcData[i]['open']});
    //console.log(ohlcData[i]);
  }
  return relevantData;
}

function csvToJSON(csv){
  var lines=csv.split("\n");

  var result = [];

  // NOTE: If your columns contain commas in their values, you'll need
  // to deal with those before doing the next step
  // (you might convert them to &&& or something, then covert them back later)
  // jsfiddle showing the issue https://jsfiddle.net/
  var headers=lines[0].split(",");

  for(var i=1;i<lines.length;i++){

      var obj = {};
      var currentline=lines[i].split(",");

      for(var j=0;j<headers.length;j++){
          obj[headers[j]] = currentline[j];
      }

      result.push(obj);

  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
}


module.exports = {
  getIntervaledOHLC,
  getOHLCData,
};
