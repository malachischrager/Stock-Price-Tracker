// npm run test or npm run test test/pointwithProfit.test.js
// to run locally do npm install chai

//var expect = require("chai").expect;
const assert = require('assert');
const {probOfProfit} = require('../functions');
const { pointsWithProfitRSIOverRange, pointsWithProfitRSIOverandMACD, pointsWithProfitRSIUnderRange, pointsWithProfitRSIUnderandMACD} = require('../functions');
const { indicators, rsi, getData } = require('../indicators');

//Test 0: Basic null checking test for an empty vector
describe('an empty vector', () => {
    it('it should not return anything', () => {
        var prob = probOfProfit([]);
          assert.equal(prob, NaN);
    });
});

//Test 1: a vector of all false values: expected value of 0
describe('a vector of all false values', () => {
    it('it should return a prob value that is 0', () => {
        var prob = probOfProfit([
            { timestamp: '2021-03-04 11:32:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:33:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:34:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:35:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:37:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:38:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:39:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:41:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:42:00', profit: false, profitValue: 0 },
            { timestamp: '2021-03-04 11:43:00', profit: false, profitValue: 0 }
          ]);
          assert.equal(prob, 0);
    });
});

//Test 2: a vector of all true values: expected value of 100
describe('a vector of all true values', () => {
    it('it should return a prob value that is 100', () => {
        var prob = probOfProfit([
            { timestamp: '2021-03-04 11:32:00', profit: true, profitValue: 0.1 },
            { timestamp: '2021-03-04 11:33:00', profit: true, profitValue: 0.2 },
            { timestamp: '2021-03-04 11:34:00', profit: true, profitValue: 0.3 },
            { timestamp: '2021-03-04 11:35:00', profit: true, profitValue: 0.4 },
            { timestamp: '2021-03-04 11:37:00', profit: true, profitValue: 0.5 },
            { timestamp: '2021-03-04 11:38:00', profit: true, profitValue: 0.6 },
            { timestamp: '2021-03-04 11:39:00', profit: true, profitValue: 0.7 },
            { timestamp: '2021-03-04 11:41:00', profit: true, profitValue: 0.8 },
            { timestamp: '2021-03-04 11:42:00', profit: true, profitValue: 0.9 },
            { timestamp: '2021-03-04 11:43:00', profit: true, profitValue: 1.0 }
          ]);
          assert.equal(prob, 100);
    });
});

//Test 3: a vector of 9 true values and 1 false value: expected value of 90
describe('a vector of 9 true values and 1 false value', () => {
    it('it should return a prob value that is 90', () => {
        var prob = probOfProfit([
            { timestamp: '2021-03-04 11:32:00', profit: true, profitValue: 0.1 },
            { timestamp: '2021-03-04 11:33:00', profit: true, profitValue: 0.2 },
            { timestamp: '2021-03-04 11:34:00', profit: true, profitValue: 0.3 },
            { timestamp: '2021-03-04 11:35:00', profit: true, profitValue: 0.4 },
            { timestamp: '2021-03-04 11:37:00', profit: true, profitValue: 0.5 },
            { timestamp: '2021-03-04 11:38:00', profit: true, profitValue: 0.6 },
            { timestamp: '2021-03-04 11:39:00', profit: true, profitValue: 0.7 },
            { timestamp: '2021-03-04 11:41:00', profit: true, profitValue: 0.8 },
            { timestamp: '2021-03-04 11:42:00', profit: true, profitValue: 0.9 },
            { timestamp: '2021-03-04 11:43:00', profit: false, profitValue: 0  }
          ]);
          assert.equal(prob, 90);
    });
});

//Test 4: a vector of 5 true values and 5 false value: expected value of 50
describe('a vector of 5 true values and 5 false values', () => {
    it('it should return a prob value that is 50', () => {
        var prob = probOfProfit([
            { timestamp: '2021-03-04 11:32:00', profit: true, profitValue: 0.1 },
            { timestamp: '2021-03-04 11:33:00', profit: true, profitValue: 0.2 },
            { timestamp: '2021-03-04 11:34:00', profit: true, profitValue: 0.3 },
            { timestamp: '2021-03-04 11:35:00', profit: true, profitValue: 0.4 },
            { timestamp: '2021-03-04 11:37:00', profit: true, profitValue: 0.5 },
            { timestamp: '2021-03-04 11:38:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:39:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:41:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:42:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:43:00', profit: false, profitValue: 0  }
          ]);
          assert.equal(prob, 50);
    });
});

//Test 5: a vector of 3 true values and 7 false value: expected value of 30
describe('a vector of 3 true values and 7 false values', () => {
    it('it should return a prob value that is 30', () => {
        var prob = probOfProfit([
            { timestamp: '2021-03-04 11:32:00', profit: true, profitValue: 0.1 },
            { timestamp: '2021-03-04 11:33:00', profit: true, profitValue: 0.2 },
            { timestamp: '2021-03-04 11:34:00', profit: true, profitValue: 0.3 },
            { timestamp: '2021-03-04 11:35:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:37:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:38:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:39:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:41:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:42:00', profit: false, profitValue: 0  },
            { timestamp: '2021-03-04 11:43:00', profit: false, profitValue: 0  }
          ]);
          assert.equal(prob, 30);
    });
});
