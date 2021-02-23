

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

async function initRSI(dailyOHLC, rsi){
  const TIME_PERIODS = 14;
  if((Object.keys(dailyOHLC)).length >= TIME_PERIODS){
    let OHLCTimestamp = Object.keys(dailyOHLC);
    let OHLCValue = Object.values(dailyOHLC);
    let totalGain = 0;
    let totalLoss = 0;
    for(let i = 0; i < TIME_PERIODS; ++i){
      let open = OHLCValue[i]['1. open'];
      let close = OHLCValue[i]['4. close'];
      if(open <= close){
        totalGain += close - open;
      }
      else{
        totalLoss += open - close;
      }
    }
    let averageGain = totalGain/TIME_PERIODS;
    let averageLoss = totalLoss/TIME_PERIODS;
    let firstRSI = 100 - (100 / (1 + (averageGain/averageLoss)));
    console.log(firstRSI);
    rsi.push(firstRSI);
  }
}

module.exports = {
  pointsWithProfit,
  initRSI
};
