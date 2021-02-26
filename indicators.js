const alpha = require('alphavantage')({ key: 'SRAGEGTDQSII8BQG' });
const MACD = require('technicalindicators').MACD;

async function ema(symbol, interval){
  let ema_data = null;
  try{
    ema_data = await alpha.technical.ema(symbol, interval, 20, 'close');
  }
  catch(error){
    console.error(error);
  }
  // timestamps = Object.keys(ema_data);
  // console.log(typeof timestamps[1]);
  //return ema_data;
  ema_data = await parseMarketHours(ema_data['Technical Analysis: EMA'], 'EMA');
  return ema_data;
}

async function macd(symbol, interval){
  let ema_data = await ema(symbol, interval);

  // grab just ema and exclude timestamp
  let pure_ema = Object.values(ema_data);

  // initialize parameters to get MACD
  let macdInput = {
    values: pure_ema,
    fastPeriod: 12,
    slowPeriod: 26,
    signalPeriod: 9,
    SimpleMAOOscillator: false,
    SimpleMASignal: false
  }
  // macd_data has MACD, signal, and histogram data
  // if histogram value is positive, it is buy signal and vice versa
  let macd_data = await MACD.calculate(macdInput);
  console.log(macd_data);

}

// dataType is
function parseMarketHours(data, dataType){
  timestamps = Object.keys(data);
  data = Object.entries(data);

  //get relevant and latest open and close times
  let open_time = new Date(timestamps[0]);
  let close_time = new Date(timestamps[0]);
  open_time.setHours(9);
  open_time.setMinutes(30);
  close_time.setHours(16);
  close_time.setMinutes(00);

  parsedDict = {};

  // loop through data and only grab entries within open and close times
  for (const [time, value] of data){
    let date = new Date(time);

    // if get to a point where you are before today's start, break to avoid unnecessary compute
    if(date.getTime() < open_time.getTime()){
      break;
    }

    // if time is between open and close, add numerical value to parsedArray
    if(date.getTime() < close_time.getTime()){
      parsedDict[time] = parseFloat(value[dataType]);
    }
  }

  //console.log(parsedDict);
  return parsedDict;
}
module.exports = {ema, macd};
