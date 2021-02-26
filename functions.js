async function probOfProfit(results){
  profits = 0;
  losses = 0;
  for(i=0; i<results.length; i++){
    dataPoint = results[i];
    if(dataPoint.profit){
      profits += 1;
    }
    else{
      losses += 1;
    }
  }

  prob = (profits)/(profits+losses)*100;
  console.log(profits, losses, results.length, prob);
}

async function pointsWithProfitRSIOverRange(data, profitThreshold, numCandles, rsiHighRange){
  var answers = [];
  for(i=0; i<data.length; i++){
    if(i+numCandles >= data.length){
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];

    if(rsi > rsiHighRange){
      for(j=1; j<=numCandles; j++){
        endingPrice = data[i+j][1];
        if(endingPrice > currPrice*(1+profitThreshold)){
          profitVal = endingPrice - currPrice;
          answers.push({timestamp: timestamp, profit: true, profitValue: profitVal});
          break;
        }

        if(j==numCandles){
          answers.push({timestamp: timestamp, profit: false, profitValue: 0});
        }
      }
    }
  }
  probOfProfit(answers);
}

async function pointsWithProfitRSIOverandMACD(data, profitThreshold, numCandles, rsiHighRange){
  var answers = [];
  for(i=0; i<data.length; i++){
    if(i+numCandles >= data.length){
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];
    macd = data[i][3];

    if(!macd){
      continue;
    }

    if(rsi > rsiHighRange && macd['histogram'] > 0){
      for(j=1; j<=numCandles; j++){
        endingPrice = data[i+j][1];
        if(endingPrice > currPrice*(1+profitThreshold)){
          profitVal = endingPrice - currPrice;
          answers.push({timestamp: timestamp, profit: true, profitValue: profitVal});
          break;
        }

        if(j==numCandles){
          answers.push({timestamp: timestamp, profit: false, profitValue: 0});
        }
      }
    }
  }
  probOfProfit(answers);
}

async function pointsWithProfitRSIUnderandMACD(data, profitThreshold, numCandles, rsiLowRange){
  var answers = [];
  for(i=0; i<data.length; i++){
    if(i+numCandles >= data.length){
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];
    macd = data[i][3];

    if(!macd){
      continue;
    }

    if(rsi < rsiLowRange && macd['histogram'] > 0){
      for(j=1; j<=numCandles; j++){
        endingPrice = data[i+j][1];
        if(endingPrice > currPrice*(1+profitThreshold)){
          profitVal = endingPrice - currPrice;
          answers.push({timestamp: timestamp, profit: true, profitValue: profitVal});
          break;
        }

        if(j==numCandles){
          answers.push({timestamp: timestamp, profit: false, profitValue: 0});
        }
      }
    }
  }
  probOfProfit(answers);
}

async function pointsWithProfitRSIUnderRange(data, profitThreshold, numCandles, rsiLowRange){
  var answers = [];
  for(i=0; i<data.length; i++){
    if(i+numCandles >= data.length){
      break;
    }

    timestamp = data[i][0];
    currPrice = data[i][1];
    rsi = data[i][2];

    if(rsi < rsiLowRange){
      for(j=1; j<=numCandles; j++){
        endingPrice = data[i+j][1];
        if(endingPrice > currPrice*(1+profitThreshold)){
          profitVal = endingPrice - currPrice;
          answers.push({timestamp: timestamp, profit: true, profitValue: profitVal});
          break;
        }

        if(j==numCandles){
          answers.push({timestamp: timestamp, profit: false, profitValue: 0});
        }
      }
    }
  }
  probOfProfit(answers);
}




module.exports = {
  pointsWithProfitRSIOverRange,
  pointsWithProfitRSIOverandMACD,
  pointsWithProfitRSIUnderRange,
  pointsWithProfitRSIUnderandMACD
};
