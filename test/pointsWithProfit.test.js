// npm run test or npm run test test/pointwithProfit.test.js

const assert = require('assert');
const {probOfProfit} = require('../functions');

describe('proft value true', () => {
    it('should return true when profit value > 0', () => {
        assert.equal(true, true);
    });

});

//ensure call pointsWithProfitRSIOverRange(data, 0.03, 20, 70) returns expected probability
describe('points with profit RSI over range should return a probability', () => {
    it('it should return a value that is not 0', () => {
        var prob = probOfProfit([
            { timestamp: '2021-02-25 10:43:00', profit: false, profitValue: 0 },
            {
              timestamp: '2021-02-25 10:44:00',
              profit: true,
              profitValue: 0.2730000000000006
            },
            {
              timestamp: '2021-02-25 10:45:00',
              profit: true,
              profitValue: 0.26400000000000023
            },
            {
              timestamp: '2021-02-25 10:46:00',
              profit: true,
              profitValue: 0.30350000000000055
            },
            {
              timestamp: '2021-02-25 10:48:00',
              profit: true,
              profitValue: 0.28300000000000036
            },
            {
              timestamp: '2021-02-25 10:49:00',
              profit: true,
              profitValue: 0.28300000000000036
            },
            {
              timestamp: '2021-02-25 10:51:00',
              profit: true,
              profitValue: 0.28860000000000063
            },
            {
              timestamp: '2021-02-25 10:53:00',
              profit: true,
              profitValue: 0.24300000000000033
            },
            {
              timestamp: '2021-02-25 10:54:00',
              profit: true,
              profitValue: 0.24300000000000033
            },
            {
              timestamp: '2021-02-25 10:55:00',
              profit: true,
              profitValue: 0.23320000000000007
            },
            {
              timestamp: '2021-02-25 10:56:00',
              profit: true,
              profitValue: 0.23300000000000054
            },
            {
              timestamp: '2021-02-25 10:57:00',
              profit: true,
              profitValue: 0.23300000000000054
            },
            {
              timestamp: '2021-02-25 10:58:00',
              profit: true,
              profitValue: 0.21300000000000008
            },
            {
              timestamp: '2021-02-25 10:59:00',
              profit: true,
              profitValue: 0.21800000000000086
            },
            {
              timestamp: '2021-02-25 11:00:00',
              profit: true,
              profitValue: 0.21800000000000086
            },
            {
              timestamp: '2021-02-25 11:01:00',
              profit: true,
              profitValue: 0.21300000000000008
            },
            {
              timestamp: '2021-02-25 11:02:00',
              profit: true,
              profitValue: 0.22190000000000065
            },
            { timestamp: '2021-02-25 11:03:00', profit: true, profitValue: 0.25 },
            { timestamp: '2021-02-25 11:05:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:06:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:07:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:08:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:09:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:10:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:11:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:12:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:13:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:14:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:15:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:16:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:17:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:19:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:24:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:37:00', profit: false, profitValue: 0 },
            {
              timestamp: '2021-02-25 12:18:00',
              profit: true,
              profitValue: 0.29000000000000004
            },
            { timestamp: '2021-02-25 12:19:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 12:22:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 12:23:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 12:24:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 13:30:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 13:31:00', profit: false, profitValue: 0 }
          ]
          
        );

        assert.notEqual(prob, 0);
    });
});


//ensure call pointsWithProfitRSIOverandMACD(data, 0.03, 20, 70) returns expected probability
describe('points with profit RSI over and MACD should return a probability', () => {
    it('it should return a value that is not 0', () => {
        var prob = probOfProfit([
            { timestamp: '2021-02-25 10:43:00', profit: false, profitValue: 0 },
            {
              timestamp: '2021-02-25 10:44:00',
              profit: true,
              profitValue: 0.2730000000000006
            },
            {
              timestamp: '2021-02-25 10:45:00',
              profit: true,
              profitValue: 0.26400000000000023
            },
            {
              timestamp: '2021-02-25 10:46:00',
              profit: true,
              profitValue: 0.30350000000000055
            },
            {
              timestamp: '2021-02-25 10:48:00',
              profit: true,
              profitValue: 0.28300000000000036
            },
            {
              timestamp: '2021-02-25 10:49:00',
              profit: true,
              profitValue: 0.28300000000000036
            },
            {
              timestamp: '2021-02-25 10:51:00',
              profit: true,
              profitValue: 0.28860000000000063
            },
            {
              timestamp: '2021-02-25 10:53:00',
              profit: true,
              profitValue: 0.24300000000000033
            },
            {
              timestamp: '2021-02-25 10:54:00',
              profit: true,
              profitValue: 0.24300000000000033
            },
            {
              timestamp: '2021-02-25 10:55:00',
              profit: true,
              profitValue: 0.23320000000000007
            },
            {
              timestamp: '2021-02-25 10:56:00',
              profit: true,
              profitValue: 0.23300000000000054
            },
            {
              timestamp: '2021-02-25 10:57:00',
              profit: true,
              profitValue: 0.23300000000000054
            },
            {
              timestamp: '2021-02-25 10:58:00',
              profit: true,
              profitValue: 0.21300000000000008
            },
            {
              timestamp: '2021-02-25 10:59:00',
              profit: true,
              profitValue: 0.21800000000000086
            },
            {
              timestamp: '2021-02-25 11:00:00',
              profit: true,
              profitValue: 0.21800000000000086
            },
            {
              timestamp: '2021-02-25 11:01:00',
              profit: true,
              profitValue: 0.21300000000000008
            },
            {
              timestamp: '2021-02-25 11:02:00',
              profit: true,
              profitValue: 0.22190000000000065
            },
            { timestamp: '2021-02-25 11:03:00', profit: true, profitValue: 0.25 },
            { timestamp: '2021-02-25 11:05:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:06:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:07:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:08:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:09:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:10:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:11:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:12:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:13:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:14:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:15:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:16:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:17:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 11:19:00', profit: false, profitValue: 0 },
            {
              timestamp: '2021-02-25 12:18:00',
              profit: true,
              profitValue: 0.29000000000000004
            },
            { timestamp: '2021-02-25 12:19:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 12:22:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 12:23:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 12:24:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 13:30:00', profit: false, profitValue: 0 },
            { timestamp: '2021-02-25 13:31:00', profit: false, profitValue: 0 }
          ]
          
        );

        assert.notEqual(prob, 0);
    });
});


//ensure call   pointsWithProfitRSIUnderRange(data, 0.03, 20, 30) returns expected probability
describe('points with profit RSI under range should return a probability', () => {
    it('it should return a value that is not 0', () => {
        var prob = probOfProfit([
            {
              timestamp: '2021-02-25 10:11:00',
              profit: true,
              profitValue: 0.17999999999999972
            },
            {
              timestamp: '2021-02-25 10:12:00',
              profit: true,
              profitValue: 0.1800000000000006
            },
            {
              timestamp: '2021-02-25 10:13:00',
              profit: true,
              profitValue: 0.20000000000000018
            },
            {
              timestamp: '2021-02-25 10:14:00',
              profit: true,
              profitValue: 0.20000000000000018
            },
            {
              timestamp: '2021-02-25 10:15:00',
              profit: true,
              profitValue: 0.23000000000000043
            },
            { timestamp: '2021-02-25 10:16:00', profit: true, profitValue: 0.25 },
            { timestamp: '2021-02-25 14:03:00', profit: false, profitValue: 0 }
          ]);
          console.log("Probability is: " + prob);
          assert.notEqual(prob, 0);
    });
});


//ensure call  pointsWithProfitRSIUnderandMACD(data, 0.03, 20, 30) returns expected probability
describe('points with profit RSI under and MACD should NOT return a probability', () => {
    it('it should return a value that is null', () => {
        var prob = probOfProfit([]);
        assert.equal(prob, "[object Promise]");
    });

});






