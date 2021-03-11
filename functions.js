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



/** given minute ohlc data, this function will calculate the minute or hourly or daily RSI data for input minute (distinguished by the index)
 * interval can either be 1 or 60 or 1440 (representing minutes)
 */
async function calcRSI(ohlc, index, interval) {
  pastOHLC = [];

  // push the current and last 14 period data points by interval into an array
  for (i = 0; i < 15 * interval; i++) {
    pastOHLC.push(ohlc[index - (i * interval)]);
  }

  // create the data structure parameter used to calculate RSI with technicalindicators module
  let inputRSI = {
    values: pastOHLC,
    period: interval
  };

  rsiValues = RSI.calculate(inputRSI);

  // there will only be one value in return vector, return that value
  return rsiValues[0];
}

/** given a list of indicators, this function will parse through start and end point and identify all buy signals
 * and calculate to see if buying there would generate a profit and how much
 */
async function findPointsWithProfit(indicators, numCandles, profitThreshold, symbol, start, end) {
  let answers = [];

  // get all relevant OHLC data depending on input parameter needs
  let ohlcData = {};
  for (i = 0; i < indicators.length; i++) {
    indicator = indicators[i];
    for (interval of indicator.intervals) {
      if (!(interval in ohlcData)) {
        intervalData = await getOHLC(symbol, interval);
        ohlcData[interval] = intervalData;
      }
    }
  }

  // TO BE CONTINUED: loop through ohlc array from a given start til end and identify all buy opportunities based on input indicators
  // for every indicator call either getRSI or getMACD to determine if there is a buy signal at that point
  // if there is a buy signal, move forward and see if profit will be made

  console.log(ohlcData);
}

async function pointsWithProfitRSIOverRange(data, profitThreshold, numCandles, rsiHighRange) {
  var answers = [];
  for (i = 0; i < data.length; i++) {
    if (i + numCandles >= data.length) {
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];

    if (rsi > rsiHighRange) {
      for (j = 1; j <= numCandles; j++) {
        endingPrice = data[i + j][1];
        if (endingPrice > currPrice * (1 + profitThreshold)) {
          profitVal = endingPrice - currPrice;
          answers.push({
            timestamp: timestamp,
            profit: true,
            profitValue: profitVal
          });
          break;
        }

        if (j == numCandles) {
          answers.push({
            timestamp: timestamp,
            profit: false,
            profitValue: 0
          });
        }
      }
    }
  }
  probOfProfit(answers);
}

async function pointsWithProfitRSIOverandMACD(data, profitThreshold, numCandles, rsiHighRange) {
  var answers = [];
  for (i = 0; i < data.length; i++) {
    if (i + numCandles >= data.length) {
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];
    macd = data[i][3];

    if (!macd) {
      continue;
    }

    if (rsi > rsiHighRange && macd['histogram'] > 0) {
      for (j = 1; j <= numCandles; j++) {
        endingPrice = data[i + j][1];
        if (endingPrice > currPrice * (1 + profitThreshold)) {
          profitVal = endingPrice - currPrice;
          answers.push({
            timestamp: timestamp,
            profit: true,
            profitValue: profitVal
          });
          break;
        }

        if (j == numCandles) {
          answers.push({
            timestamp: timestamp,
            profit: false,
            profitValue: 0
          });
        }
      }
    }
  }
  probOfProfit(answers);
}

async function pointsWithProfitRSIUnderandMACD(data, profitThreshold, numCandles, rsiLowRange) {
  var answers = [];
  for (i = 0; i < data.length; i++) {
    if (i + numCandles >= data.length) {
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];
    macd = data[i][3];

    if (!macd) {
      continue;
    }

    if (rsi < rsiLowRange && macd['histogram'] > 0) {
      for (j = 1; j <= numCandles; j++) {
        endingPrice = data[i + j][1];
        if (endingPrice > currPrice * (1 + profitThreshold)) {
          profitVal = endingPrice - currPrice;
          answers.push({
            timestamp: timestamp,
            profit: true,
            profitValue: profitVal
          });
          break;
        }

        if (j == numCandles) {
          answers.push({
            timestamp: timestamp,
            profit: false,
            profitValue: 0
          });
        }
      }
    }
  }
  probOfProfit(answers);
}

async function pointsWithProfitRSIUnderRange(data, profitThreshold, numCandles, rsiLowRange) {
  var answers = [];
  for (i = 0; i < data.length; i++) {
    if (i + numCandles >= data.length) {
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];

    if (rsi < rsiLowRange) {
      for (j = 1; j <= numCandles; j++) {
        endingPrice = data[i + j][1];
        if (endingPrice > currPrice * (1 + profitThreshold)) {
          profitVal = endingPrice - currPrice;
          answers.push({
            timestamp: timestamp,
            profit: true,
            profitValue: profitVal
          });
          break;
        }

        if (j == numCandles) {
          answers.push({
            timestamp: timestamp,
            profit: false,
            profitValue: 0
          });
        }
      }
    }
  }
  probOfProfit(answers);
}

function probOfProfit(results) {
  profits = 0;
  losses = 0;
  for (i = 0; i < results.length; i++) {
    dataPoint = results[i];
    if (dataPoint.profit) {
      profits += 1;
    } else {
      losses += 1;
    }
  }

  prob = (profits) / (profits + losses) * 100;
  console.log(profits, losses, results.length, prob);
  return prob;
}

module.exports = {
  probOfProfit,
  pointsWithProfitRSIOverRange,
  pointsWithProfitRSIOverandMACD,
  pointsWithProfitRSIUnderRange,
  pointsWithProfitRSIUnderandMACD,
  findPointsWithProfit
};
