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

require("dotenv").config();

const client = new AjaxClient();

/** gets 15 minute intervaled market data for the last 30 days
 */
async function getMinuteOHLC(symbol) {
  let url = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY_EXTENDED&symbol=IBM&interval=15min&slice=year1month1&apikey=SRAGEGTDQSII8BQG';

  ohlcData = undefined;
  await axios.get(url)
          .then((response) => {
            ohlcData = response;
          })
          .catch((error) => console.log(error));
  ohlcData = csvToJSON(ohlcData['data']);
  ohlcData = await parseRelevantOHLCMinuteData(ohlcData);

}

async function getDailyOHLC(symbol){
  console.log('');
}


/** returns MARKET HOUR (9:30 to 4 pm) ohlc minute data in a dict data structure with the following structure
 *  {'timestamp': {price: int}}
 */
function parseRelevantOHLCMinuteData(ohlcData){
  let relevantData = {};
  ohlcData = JSON.parse(ohlcData);

  //console.log(ohlcData);
  for(i=ohlcData.length-2; i>=0; i--){
    let time = ohlcData[i]['time'];
    time = new Date(time);
    if(time.getHours() == 9 && time.getMinutes() < 30){continue}
    if(time.getHours() < 9) {continue}
    if(time.getHours() == 16 && time.getMinutes() > 0) {continue}
    if(time.getHours() > 16) {continue}

    relevantData[time] = {price: ohlcData[i]['open']};
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
  getMinuteOHLC,
  getDailyOHLC,
};
