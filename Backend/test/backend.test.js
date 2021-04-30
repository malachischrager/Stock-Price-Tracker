/*--------------------------------------------------------------
This file contains tests for functions in the functions.js file.
---------------------------------------------------------------*/


// npm run test or npm run test test/pointwithProfit.test.js
// to run locally do npm install chai

const assert = require('assert');
const { findPointsWithProfit, getRSISignalByHour, getRSISignalDaily } = require('../functions');
const { parseRelevantOHLCMinuteData, csvToJSON } = require('../fetchdata');

// load raw data for testing
let hourData;
let dailyData;
fs = require('fs')
fs.readFile('test/resource/extended_intraday_IBM_60min.csv', 'utf8', function (err,data) {
    if (err) {
        return console.log(err);
    }
    hourData = csvToJSON(data.toString());
    hourData = parseRelevantOHLCMinuteData(hourData);
    dailyData = hourData;
    dailyData.forEach(function (curr) {
        curr.time = curr.time.substring(0, 10);
    });
});


/*--------------------------------------------------------------
Tests for getRSISignalByHour
---------------------------------------------------------------*/
describe('test against index(10) that is smaller than the # of required rsi data points(14 for 60mins interval)', function() {
    describe('getRSISignalByHour()', function() {
        it('should return 0', function() {
            return getRSISignalByHour(hourData, 10, '60min', 'buy', 12).then(result => {
                assert.equal(result, 0);
            });
        });
    });
});

describe('test against perfect input for 30mins interval', function() {
    describe('getRSISignalByHour()', function() {
        it('should return 1, indicating actions (buy or sell)', function() {
            return getRSISignalByHour(hourData, 36, '30min', 'sell', 1).then(result => {
                assert.equal(result, 1);
            });
        });
    });
});

describe('test against perfect input for 30mins interval', function() {
    describe('getRSISignalByHour()', function() {
        it('should return 0, indicating no action', function() {
            return getRSISignalByHour(hourData, 55, '30min', 'buy', 9).then(result => {
                assert.equal(result, 0);
            });
        });
    });
});

describe('test against perfect input for 60mins interval', function() {
    describe('getRSISignalByHour()', function() {
        it('should return 1, indicating actions (buy or sell)', function() {
            return getRSISignalByHour(hourData, 28, '60min', 'sell', 1).then(result => {
                assert.equal(result, 1);
            });
        });
    });
});

describe('test against perfect input for 60mins interval', function() {
    describe('getRSISignalByHour()', function() {
        it('should return 1, indicating no action', function() {
            return getRSISignalByHour(hourData, 15, '60min', 'buy', 11).then(result => {
                assert.equal(result, 0);
            });
        });
    });
});

/*--------------------------------------------------------------
Tests for getRSISignalDaily
---------------------------------------------------------------*/
describe('test against date that is too early to have rsi value', function() {
    describe('getRSISignalDaily()', function() {
        it('should return 0', function() {
            return getRSISignalDaily(hourData, '2021-02-01','buy').then(result => {
                assert.equal(result, 0);
            });
        });
    });
});

describe('test against perfect input', function() {
    describe('getRSISignalDaily()', function() {
        it('should return 1, indicating actions (buy or sell)', function() {
            return getRSISignalDaily(hourData, '2021-02-24','sell').then(result => {
                assert.equal(result, 1);
            });
        });
    });
});

describe('test against perfect input', function() {
    describe('getRSISignalDaily()', function() {
        it('should return 0, indicating no action', function() {
            return getRSISignalDaily(hourData, '2021-02-17','buy').then(result => {
                assert.equal(result, 0);
            });
        });
    });
});

/*--------------------------------------------------------------
Tests for getRSISignalDaily
standard testcase{
    indicator: ['daily', '1 hour', '4 hour'],
    interval: '60min',
    numCandles: 20,
    profitThreshold: 0.02,
    buyOrSell: 'buy'
}
---------------------------------------------------------------*/
describe('test against standard testcase', function() {
    describe('findPointsWithProfit()', function() {
        it('should return return an array of [results, labels, graphData]', function() {
            return findPointsWithProfit(['daily', '1 hour', '4 hour'], hourData, dailyData, '60min', 20, 0.02, 'buy').then(result => {

            });
        });
    });
});

describe('test against perfect input for 60min interval', function() {
    describe('findPointsWithProfit()', function() {
        it('should return return an array of [results, labels, graphData]', function() {
            return findPointsWithProfit(['daily'], hourData, dailyData, '60min', 20, 0.02, 'buy').then(result => {

            });
        });
    });
});

describe('test against perfect input for 30min interval', function() {
    describe('findPointsWithProfit()', function() {
        it('should return return an array of [results, labels, graphData]', function() {
            return findPointsWithProfit(['daily'], hourData, dailyData, '30min', 20, 0.02, 'buy').then(result => {

            });
        });
    });
});

describe('test against perfect input for 20 candles', function() {
    describe('findPointsWithProfit()', function() {
        it('should return return an array of [results, labels, graphData]', function() {
            return findPointsWithProfit(['daily'], hourData, dailyData, '60min', 20, 0.02, 'buy').then(result => {

            });
        });
    });
});

describe('test against perfect input for 30 candles', function() {
    describe('findPointsWithProfit()', function() {
        it('should return return an array of [results, labels, graphData]', function() {
            return findPointsWithProfit(['daily'], hourData, dailyData, '60min', 30, 0.02, 'buy').then(result => {

            });
        });
    });
});

describe('test against perfect input for selling', function() {
    describe('findPointsWithProfit()', function() {
        it('should return return an array of [results, labels, graphData]', function() {
            return findPointsWithProfit(['daily'], hourData, dailyData, '60min', 20, 0.02, 'sell').then(result => {

            });
        });
    });
});

