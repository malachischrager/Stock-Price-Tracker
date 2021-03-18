/*--------------------------------------------------------------
This file contains all the necessary functions for our program.
---------------------------------------------------------------*/
const {
  indicators,
  rsi,
  getData,
  getOHLC
} = require('./indicators');
const EMA = require('technicalindicators').EMA;
const MACD = require('technicalindicators').MACD;
const RSI = require('technicalindicators').RSI;


/** given intervaled ohlc data, this function will calculate RSI for input point (distinguished by the index)
 * interval can either be 1 or 60 or 1440 (representing minutes)
 * @param ohlc: array
 * @param index: int index of starting point
 * @param interval: string (1min, 15min, 30min, 60min) this is the interval at which your OHLC data jumps
 * @param buyOrSell: string ('buy' or 'sell') depending on if you want to look for buy or sell signal
 * @param numHours: int the interval at which you would like to find RSI value
 */
async function getRSISignalByHour(ohlc, index, interval, buyOrSell, numHours) {
  pastOHLC = [];
  let skip = 0;

  // dependiing on input interval, calculate the number of indices to go back and the number of indexes you skip between data points
  if(interval == '60min'){
    interval = 14*numHours;
    skip = 1*numHours;
  }
  else if(interval == '30min'){
    interval = 28*numHours;
    skip = 2*numHours;
  }
  else if(interval == '15min'){
    interval = 56*numHours;
    skip = 4*numHours;
  }
  else if(interval == '1min'){
    interval = 840*numHours;
    skip = 60*numHours;
  }

  if(index-interval < 0){
    return 0;
  }

  // push the current and last 15 period data points by interval into an array
  for (i = index-interval; i <= index; i += skip) {
    pastOHLC.push(parseFloat(ohlc[i].price));
  }

  // create the data structure parameter used to calculate RSI with technicalindicators module
  let inputRSI = {
    values: pastOHLC,
    period: 14
  };
  let rsiValues = undefined;

  // call technicalindicators to calculate rsi value
  try {
    rsiValues = await RSI.calculate(inputRSI);
  }
  catch(error) {
    console.log(error);
  }

  // if rsi indicates either buy or sell, return 1
  // if rsi does not indicate action, return 0
  if(buyOrSell == 'buy' && rsiValues[0] <= 30){
    return 1;
  }
  else if(buyOrSell == 'sell' && rsiValues[0] >= 70){
    return 1;
  }
  else{
    return 0;
  }
}

/** given a list of indicators, this function will parse through start and end point and identify all buy/sell signals
 * and calculate to see if buying there would generate a profit and how much
 * @param indicators: array options include 'Daily', '4 hour', and '1 hour'
 * @param ohlcData: array ohlcData at datapoints every x intervals
 * @param interval: string (1min, 15min, 30min, 60min) this is the interval at which your OHLC data jumps
 * @param numCandles: int the number of candles to look forward for profitThreshold
 * @param profitThreshold: float the minimum profit required to make to sell your holding
 * results will be returned in an array with entries for every buy point:
 * [
     {
       buyAt: ohlcData
       sellAt: ohlcData
       profitable: true or false
       profit: float
     }
   ]
 */
async function findPointsWithProfit(indicators, ohlcData, interval, numCandles, profitThreshold) {
  let answers = [];
  let results = [];

  // get all relevant OHLC data depending on input parameter needs
  for (let i = 0; i < ohlcData.length; i++) {
    currentData = ohlcData[i];
    currentTime = currentData.time;
    currentPrice = currentData.price;

    // indicatorBooleans will hold buy or sell signals (0 or 1) for every interval indicator you originally input
    // interval indicators supports RSI 1 hour, RSI 4 hour, and RSI Daily currently
    let indicatorBooleans = [];
    for(let j=0; j < indicators.length; j++) {
      let bool = -1;
      let indicator = indicators[j];

      // depending on the interval indicator, call getRSISignal function and it will return a 0 or 1 depending on if you should make an action
      if(indicator == '1 hour'){
        try {
          bool = await getRSISignalByHour(ohlcData, i, interval, 'buy', 1);
        }
        catch(error){
          console.log(error);
        }
      }
      else if(indicator == '4 hour'){
        try {
          bool = await getRSISignalByHour(ohlcData, i, interval, 'buy', 4);
        }
        catch(error){
          console.log(error);
        }
      }
      // push returned bool into indicatorBooleans
      indicatorBooleans.push(bool);
    }

    // if indicatorBooleans does not include 0, it means you have a buy or sell signal for all inputted indicators
    if(!indicatorBooleans.includes(0)){
      buyPrice = parseFloat(ohlcData[i].price);

      // loop ahead numCandles and if you ever hit profit threshold, push {profit: true} result into results
      // if you never hit profit, it will push a {profit: false} into results
      for(let j = i+1; j < i + numCandles; j++){
        // if you get to the end of ohlc data, break out of loop
        if(j >= ohlcData.length)
        {
          break;
        }
        futurePrice = parseFloat(ohlcData[j].price);

        // profit found, push true to results
        if(futurePrice > (1 + profitThreshold) * buyPrice){
          results.push({buyAt: ohlcData[i], sellAt: ohlcData[j], profitable: true, profit: futurePrice - buyPrice});
          break;
        }

        // end of numCandles, no profit, push false to results
        if(j == i + numCandles - 1){
          results.push({buyAt: ohlcData[i], sellAt: undefined, profitable: false, profit: 0});
        }
      }
    }
  }

  return results;
}

/** calculates the profitability percentage given a results array returned from findPointsWithProfit
 */
function probOfProfit(results) {
  let profits = 0;
  let losses = 0;
  for (i = 0; i < results.length; i++) {
    dataPoint = results[i];
    if (dataPoint.profitable) {
      profits += 1;
    } else {
      losses += 1;
    }
  }

  prob = (profits) / (profits + losses) * 100;
  console.log("Profits:", profits, "Losses:", losses, "Probability of profit (in percent):", prob);
  return prob;
}

module.exports = {
  probOfProfit,
  findPointsWithProfit
};
