

async function pointsWithProfit(dailyOHLC, rsis, profitThreshold, numCandles, rsiHighRange){
  var answers = [];

  timestamps = Object.keys(rsis);
  timestamps.reverse();
  ohlc_stamps = Object.keys(dailyOHLC);

  for(i=0; i < timestamps.length; i++){
    timestamp = timestamps[i];
    ohlc_timestamp = timestamp + ":00";

    ohlc = dailyOHLC[ohlc_timestamp];
    rsi = parseInt(rsis[timestamp]['RSI']);

    if(rsi > rsiHighRange){

      if(ohlc == null){
        continue;
      }

      starting_price = parseFloat(ohlc['4. close']);

      if(i+numCandles >= timestamps.length){
        break;
      }
      else{
        for(j=1; j<=numCandles; j++){
          temp_timestamp = timestamps[i+j];
          temp_ohlc_timestamp = temp_timestamp+":00";
          temp_ohlc = dailyOHLC[temp_ohlc_timestamp];

          if(temp_ohlc != null){
            ending_price = parseFloat(dailyOHLC[temp_ohlc_timestamp]['4. close']);

            if(ending_price > starting_price*(1+profitThreshold)){
              profit_val = ending_price - starting_price;
              answers.push({timestamp: timestamp, ohlc: ohlc, profit: true, profitValue: profit_val});
              break;
            }

            if(j==numCandles){
              answers.push({timestamp: timestamp, ohlc: ohlc, profit: false, profitValue: 0});
            }
          }
        }
      }
    }
  }
  console.log(answers);
}

// Currently Broken:
// API doesn't return values with consecutive time periods
// The dailyOHLC map is reverse-chronological order
async function initRSI(dailyOHLC, rsi){
  const TIME_PERIODS = 14;
  let OHLCTimestamp = Object.keys(dailyOHLC);
  let OHLCValue = Object.values(dailyOHLC);
  let averageGain, averageLoss;
  if((Object.keys(dailyOHLC)).length > TIME_PERIODS){
    let totalGain = 0;
    let totalLoss = 0;
    let close = 0;
    let previousClose = 0;
    for(let i = 1; i <= TIME_PERIODS; ++i){
      previousClose = OHLCValue[i-1]['4. close'];
      close = OHLCValue[i]['4. close'];
      if(previousClose <= close){
        totalGain += close - previousClose;
      }
      else{
        totalLoss += previousClose - close;
      }
    }
    averageGain = totalGain/TIME_PERIODS;
    averageLoss = totalLoss/TIME_PERIODS;
    let firstRSI = 100 - (100 / (1 + (averageGain/averageLoss)));
    rsi[OHLCTimestamp[TIME_PERIODS]] = firstRSI;
    await calculateRSI(rsi, OHLCTimestamp, OHLCValue, averageGain, averageLoss, TIME_PERIODS);
  }
}

async function calculateRSI(rsi, OHLCTimestamp, OHLCValue, averageGain, averageLoss, TIME_PERIODS){
  let currIndex = TIME_PERIODS + 1;
  while(currIndex < (Object.keys(OHLCTimestamp)).length){
    let previousClose = OHLCValue[currIndex - 1]['4. close'];
    let close = OHLCValue[currIndex]['4. close'];
    if(previousClose <= close){
      let totalGain = averageGain*13 + (close - previousClose);
      averageGain = totalGain/14;
      averageLoss = averageLoss*13/14;
    }
    else {
      let totalLoss = averageLoss*13 + (previousClose - close);
      averageLoss = totalLoss/14;
      averageGain = averageGain*13/14;
    }
    let currRSI = 100 - (100/ (1 + (averageGain/averageLoss)));
    rsi[OHLCTimestamp[currIndex]] = currRSI;
    currIndex++;
    // console.log(rsi);
  }
}

module.exports = {
  pointsWithProfit,
  initRSI
};
