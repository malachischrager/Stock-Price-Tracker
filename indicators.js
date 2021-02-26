const alpha = require('alphavantage')({ key: 'SRAGEGTDQSII8BQG' });
const MACD = require('technicalindicators').MACD;
const RSI = require('technicalindicators').RSI;

async function getData(symbol, interval){
  let intraData = await getIntra(symbol);
  let emaData = await ema(symbol, interval);
  let macdData = await macd(emaData);
  let rsiData = await rsi(intraData);

  // console.log(macdData);
  // console.log(rsiData);

  //390 390 365 376
  //console.log(intraData.length, emaData.length, macdData.length, rsiData.length);

  dataArray = [];
  //because rsi and macd are calculated only later minutes into the trading day, we need to account for that
  for(i=intraData.length-rsiData.length; i<intraData.length; i++){
    if(i < 25){
        dataArray.push([intraData[i][0], intraData[i][1], rsiData[i-(intraData.length-rsiData.length)], undefined]);
    }
    else{
      dataArray.push([intraData[i][0], intraData[i][1], rsiData[i-(intraData.length-rsiData.length)], macdData[i-25]]);
    }
  }
  return dataArray;
}

// perhaps should change this to technicalindicators rather than using alphavantage
async function ema(symbol, interval){
  let emaData = null;
  try {
    emaData = await alpha.technical.ema(symbol, interval, 20, 'close');
  }
  catch(error){
    console.error(error);
  }
  emaData = emaData['Technical Analysis: EMA'];
  let emaTimestamp = Object.keys(emaData).reverse();
  let emaValue = Object.values(emaData).reverse();
  let emaArray = [];

  for(let i = 0; i < emaTimestamp.length; ++i){
    emaArray.push([emaTimestamp[i], parseFloat(emaValue[i]['EMA'])]);
  }
  // timestamps = Object.keys(ema_data);
  // console.log(typeof timestamps[1]);
  // return ema_data;
  emaArray = await parseMarketHours(emaArray);
  return emaArray;
  // ema_data = await parseMarketHours(ema_data['Technical Analysis: EMA']);
  // return ema_data;
}

async function macd(emaData){
  // grab just ema and exclude timestamp
  let pureEma = [];

  for(let i=0; i<emaData.length; i++){
    pureEma.push(emaData[i][1]);
  }
  // initialize parameters to get MACD
  let macdInput = {
    values: pureEma,
    fastPeriod: 12,
    slowPeriod: 26,
    signalPeriod: 9,
    SimpleMAOOscillator: false,
    SimpleMASignal: false
  }
  // macd_data has MACD, signal, and histogram data
  // if histogram value is positive, it is buy signal and vice versa
  let macd_data = await MACD.calculate(macdInput);

  return macd_data;
}


async function getIntra(symbol){
  try{
    intraData = await alpha.data.intraday(symbol, 'full');
  }
  catch(error){
    console.error(error);
  }

  intraData = intraData['Time Series (1min)'];

  let intradayTimestamp = Object.keys(intraData).reverse();
  let intradayValue = Object.values(intraData).reverse();
  let intraArray = [];

  for(let i = 0; i < intradayTimestamp.length; ++i){
    intraArray.push([intradayTimestamp[i], parseFloat(intradayValue[i]['4. close'])]);
  }

  intraArray = await parseMarketHours(intraArray);
  return intraArray;

}
// return rsi for given values
// assuming we have over 14 valid data points
async function rsi(intraData){
  let pureValues = [];

  for(let i=0; i<intraData.length; i++){
    pureValues.push(intraData[i][1]);
  }

  // calculating rsi for market values
  let inputRSI = {
    values : pureValues,
    period : 14
  };
  rsiValues = RSI.calculate(inputRSI);

  return rsiValues;
    // for(let i = 14; i < intradayTimestamp.length; ++i){
    //   rsiData[intradayTimestamp[i]] = rsiValue[i-14];
    // }
}

// dataType is
function parseMarketHours(data){
  // timestamps = Object.keys(data);
  // data = Object.entries(data);
  timestamp = data[data.length-1][0];
  //get relevant and latest open and close times
  let open_time = new Date(timestamp);
  let close_time = new Date(timestamp);
  open_time.setHours(9);
  open_time.setMinutes(30);
  close_time.setHours(16);
  close_time.setMinutes(00);
  data = data.reverse();
  parsedArray = [];

  // loop through data and only grab entries within open and close times
  for (const [time, value] of data){
    let date = new Date(time);
    // if get to a point where you are before today's start, break to avoid unnecessary compute
    if(date.getTime() < open_time.getTime()){
      break;
    }
    // if time is between open and close, add numerical value to parsedArray
    if(date.getTime() < close_time.getTime()){
      parsedArray.unshift([time, value]);
    }
  }

  return parsedArray;
}
module.exports = {ema, macd, rsi, getData};
