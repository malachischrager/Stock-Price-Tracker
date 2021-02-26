// npm run test or npm run test test/pointwithProfit.test.js
// to run locally do npm install chai

var expect = require("chai").expect;
const assert = require('assert');
const {probOfProfit} = require('../functions');
const { pointsWithProfitRSIOverRange, pointsWithProfitRSIOverandMACD, pointsWithProfitRSIUnderRange, pointsWithProfitRSIUnderandMACD} = require('../functions');
const { indicators, rsi, getData } = require('../indicators');


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

describe('pointsWithProfitRSIOverRange with no data', () => {
    it('it should return nothing', () => {
        var pointsWithProfitRSIOverRange = pointsWithProfitRSIOverRange([]);
        //assert.equal(prob, "[object Promise]");
    });

});


/*******  OUTDATED TESTS  ********/

/****** 
 * 
 * const {pointsWithProfit} = require('../functions'); 
*******/

/****** 
 * describe('only one ohlc and rsi', () => {
    it('should return empty array', () => {
        
        let result = pointsWithProfit(
            {
                '2021-02-25 09:30:00': {
                    '1. open': '166.0000',
                    '2. high': '170.0000',
                    '3. low': '165.0000',
                    '4. close': '169.3600',
                    '5. volume': '131754'
                  }

            }
            ,

            {
                '2021-02-25 09:30': { RSI: '51.1293' }
            }

            , 0.03, 20, 50
        )
        
        console.log(result);

        expect(result).to.deep.equal([
            
        ]);
    });

});

describe('when invalid paramters passed in', () => {
    it('should return empty array', () => {
        
        var result = pointsWithProfit(
            {

            }
            ,
            {
                
            }

            , 0, 0, 0
        )

        expect(result).to.eql({});
    });

});

describe('when valid parameter passed in', () => {
    it('should return true', () => {
        
        var result = pointsWithProfit(
            {
                '2021-02-12 10:01:00': {
                    '1. open': '50.6672',
                    '2. high': '50.8100',
                    '3. low': '50.0400',
                    '4. close': '50.6380',
                    '5. volume': '35684'
                },
                '2021-02-12 10:00:00': {
                    '1. open': '50.5499',
                    '2. high': '50.9000',
                    '3. low': '50.4000',
                    '4. close': '50.7250',
                    '5. volume': '36884'
                },
                '2021-02-12 09:59:00': {
                    '1. open': '50.2100',
                    '2. high': '50.5250',
                    '3. low': '50.1700',
                    '4. close': '50.5250',
                    '5. volume': '12985'
                },
                '2021-02-12 09:58:00': {
                    '1. open': '50.1001',
                    '2. high': '50.4655',
                    '3. low': '50.1001',
                    '4. close': '50.2200',
                    '5. volume': '16172'
                },
                '2021-02-12 09:57:00': {
                    '1. open': '50.2500',
                    '2. high': '50.3200',
                    '3. low': '50.0417',
                    '4. close': '50.1221',
                    '5. volume': '10391'
                },
                '2021-02-12 09:56:00': {
                    '1. open': '50.3900',
                    '2. high': '50.5546',
                    '3. low': '50.0100',
                    '4. close': '50.1001',
                    '5. volume': '22060'
                },
                '2021-02-12 09:55:00': {
                    '1. open': '50.3950',
                    '2. high': '50.6039',
                    '3. low': '50.2600',
                    '4. close': '50.2600',
                    '5. volume': '17317'
                },
                '2021-02-12 09:54:00': {
                    '1. open': '50.6150',
                    '2. high': '50.7000',
                    '3. low': '50.1002',
                    '4. close': '50.2900',
                    '5. volume': '20620'
                },
                '2021-02-12 09:53:00': {
                    '1. open': '50.7796',
                    '2. high': '50.8799',
                    '3. low': '50.5100',
                    '4. close': '50.6862',
                    '5. volume': '30339'
                },
                '2021-02-12 09:52:00': {
                    '1. open': '50.2700',
                    '2. high': '50.9300',
                    '3. low': '50.2100',
                    '4. close': '50.5601',
                    '5. volume': '44074'
                },
                '2021-02-12 09:51:00': {
                    '1. open': '50.0800',
                    '2. high': '50.4899',
                    '3. low': '49.9000',
                    '4. close': '50.4800',
                    '5. volume': '38679'
                },
                '2021-02-12 09:50:00': {
                    '1. open': '50.0900',
                    '2. high': '50.1791',
                    '3. low': '49.8200',
                    '4. close': '50.1401',
                    '5. volume': '28521'
                },
                '2021-02-12 09:49:00': {
                    '1. open': '50.0300',
                    '2. high': '50.2151',
                    '3. low': '49.7501',
                    '4. close': '50.2000',
                    '5. volume': '39641'
                },
                '2021-02-12 09:48:00': {
                    '1. open': '49.4500',
                    '2. high': '50.2000',
                    '3. low': '49.4500',
                    '4. close': '50.0000',
                    '5. volume': '34412'
                },
                '2021-02-12 09:47:00': {
                    '1. open': '49.5595',
                    '2. high': '49.5877',
                    '3. low': '49.2000',
                    '4. close': '49.4001',
                    '5. volume': '22436'
                },
                '2021-02-12 09:46:00': {
                    '1. open': '49.3400',
                    '2. high': '49.6128',
                    '3. low': '49.2500',
                    '4. close': '49.5700',
                    '5. volume': '19129'
                },
                '2021-02-12 09:45:00': {
                    '1. open': '49.5700',
                    '2. high': '49.6400',
                    '3. low': '49.2500',
                    '4. close': '49.4350',
                    '5. volume': '24443'
                },
                '2021-02-12 09:44:00': {
                    '1. open': '49.6496',
                    '2. high': '49.8100',
                    '3. low': '49.4400',
                    '4. close': '49.6000',
                    '5. volume': '20640'
                },
                '2021-02-12 09:43:00': {
                    '1. open': '49.8600',
                    '2. high': '49.9500',
                    '3. low': '49.3300',
                    '4. close': '49.6500',
                    '5. volume': '39691'
                },
                '2021-02-12 09:42:00': {
                    '1. open': '49.7300',
                    '2. high': '49.9000',
                    '3. low': '49.6000',
                    '4. close': '49.8900',
                    '5. volume': '18460'
                },
                '2021-02-12 09:41:00': {
                    '1. open': '49.8118',
                    '2. high': '50.2400',
                    '3. low': '49.5200',
                    '4. close': '49.7277',
                    '5. volume': '37352'
                },
                '2021-02-12 09:40:00': {
                    '1. open': '49.4900',
                    '2. high': '49.9899',
                    '3. low': '49.3013',
                    '4. close': '49.9899',
                    '5. volume': '37739'
                },
                '2021-02-12 09:39:00': {
                    '1. open': '49.3880',
                    '2. high': '49.5000',
                    '3. low': '49.0200',
                    '4. close': '49.3100',
                    '5. volume': '35764'
                },
                '2021-02-12 09:38:00': {
                    '1. open': '49.4317',
                    '2. high': '49.7500',
                    '3. low': '49.0000',
                    '4. close': '49.5000',
                    '5. volume': '39172'
                },
                '2021-02-12 09:37:00': {
                    '1. open': '48.7776',
                    '2. high': '49.9900',
                    '3. low': '48.5000',
                    '4. close': '49.3200',
                    '5. volume': '95621'
                },
                '2021-02-12 09:36:00': {
                    '1. open': '50.2200',
                    '2. high': '50.2200',
                    '3. low': '48.0500',
                    '4. close': '48.7570',
                    '5. volume': '257756'
                },
                '2021-02-12 09:35:00': {
                    '1. open': '50.2340',
                    '2. high': '50.7000',
                    '3. low': '49.8700',
                    '4. close': '50.2200',
                    '5. volume': '87811'
                },
                '2021-02-12 09:34:00': {
                    '1. open': '52.1800',
                    '2. high': '52.3400',
                    '3. low': '50.0000',
                    '4. close': '50.1750',
                    '5. volume': '112440'
                },
                '2021-02-12 09:33:00': {
                    '1. open': '52.3700',
                    '2. high': '52.6100',
                    '3. low': '52.0300',
                    '4. close': '52.2950',
                    '5. volume': '60836'
                },
                '2021-02-12 09:32:00': {
                    '1. open': '52.6000',
                    '2. high': '53.8799',
                    '3. low': '52.0300',
                    '4. close': '52.2250',
                    '5. volume': '163948'
                },
                '2021-02-12 09:31:00': {
                    '1. open': '50.7500',
                    '2. high': '54.0000',
                    '3. low': '50.6000',
                    '4. close': '52.6100',
                    '5. volume': '282737'
                },
                '2021-02-12 09:30:00': {
                    '1. open': '50.7000',
                    '2. high': '50.7700',
                    '3. low': '50.6900',
                    '4. close': '50.7000',
                    '5. volume': '2477'
                },
                '2021-02-12 09:29:00': {
                    '1. open': '50.7000',
                    '2. high': '50.7500',
                    '3. low': '50.7000',
                    '4. close': '50.7000',
                    '5. volume': '2364'
                },
                '2021-02-12 09:28:00': {
                    '1. open': '50.7000',
                    '2. high': '50.7000',
                    '3. low': '50.6800',
                    '4. close': '50.6800',
                    '5. volume': '1232'
                },
                '2021-02-12 09:27:00': {
                    '1. open': '50.8000',
                    '2. high': '50.8000',
                    '3. low': '50.7000',
                    '4. close': '50.7000',
                    '5. volume': '1503'
                },
                '2021-02-12 09:26:00': {
                    '1. open': '50.6700',
                    '2. high': '50.7000',
                    '3. low': '50.6700',
                    '4. close': '50.7000',
                    '5. volume': '2540'
                },
                '2021-02-12 09:25:00': {
                    '1. open': '50.7900',
                    '2. high': '50.7900',
                    '3. low': '50.7500',
                    '4. close': '50.7500',
                    '5. volume': '981'
                },
                '2021-02-12 09:24:00': {
                    '1. open': '50.7900',
                    '2. high': '50.8000',
                    '3. low': '50.7900',
                    '4. close': '50.8000',
                    '5. volume': '1352'
                },
                '2021-02-12 09:23:00': {
                    '1. open': '50.8000',
                    '2. high': '50.8000',
                    '3. low': '50.6700',
                    '4. close': '50.8000',
                    '5. volume': '4484'
                },
                '2021-02-12 09:22:00': {
                    '1. open': '50.7800',
                    '2. high': '50.8700',
                    '3. low': '50.7800',
                    '4. close': '50.8700',
                    '5. volume': '2773'
                },
                '2021-02-12 09:21:00': {
                    '1. open': '50.8000',
                    '2. high': '50.8000',
                    '3. low': '50.5800',
                    '4. close': '50.7400',
                    '5. volume': '2145'
                },
                '2021-02-12 09:20:00': {
                    '1. open': '50.7100',
                    '2. high': '50.7100',
                    '3. low': '50.6500',
                    '4. close': '50.6500',
                    '5. volume': '4757'
                },
                '2021-02-12 09:18:00': {
                    '1. open': '50.8500',
                    '2. high': '50.8500',
                    '3. low': '50.7300',
                    '4. close': '50.7300',
                    '5. volume': '1268'
                },
                '2021-02-12 09:15:00': {
                    '1. open': '50.7600',
                    '2. high': '50.7600',
                    '3. low': '50.7500',
                    '4. close': '50.7500',
                    '5. volume': '969'
                },
                '2021-02-12 09:13:00': {
                    '1. open': '50.8900',
                    '2. high': '50.8900',
                    '3. low': '50.8900',
                    '4. close': '50.8900',
                    '5. volume': '1095'
                },
                '2021-02-12 09:12:00': {
                    '1. open': '50.7100',
                    '2. high': '50.7100',
                    '3. low': '50.7000',
                    '4. close': '50.7100',
                    '5. volume': '1693'
                },
                '2021-02-12 09:11:00': {
                    '1. open': '50.8000',
                    '2. high': '50.8000',
                    '3. low': '50.7900',
                    '4. close': '50.7900',
                    '5. volume': '804'
                },
                '2021-02-12 09:10:00': {
                    '1. open': '50.5000',
                    '2. high': '50.8000',
                    '3. low': '50.5000',
                    '4. close': '50.8000',
                    '5. volume': '8726'
                },
                '2021-02-12 09:09:00': {
                    '1. open': '50.5500',
                    '2. high': '50.6900',
                    '3. low': '50.5400',
                    '4. close': '50.6900',
                    '5. volume': '2495'
                },
                '2021-02-12 09:08:00': {
                    '1. open': '50.4100',
                    '2. high': '50.4100',
                    '3. low': '50.4100',
                    '4. close': '50.4100',
                    '5. volume': '382'
                },
                '2021-02-12 09:06:00': {
                    '1. open': '50.3604',
                    '2. high': '50.3604',
                    '3. low': '50.3604',
                    '4. close': '50.3604',
                    '5. volume': '717'
                },
                '2021-02-12 09:05:00': {
                    '1. open': '50.3600',
                    '2. high': '50.4000',
                    '3. low': '50.3600',
                    '4. close': '50.4000',
                    '5. volume': '1148'
                },
                '2021-02-12 09:04:00': {
                    '1. open': '50.4900',
                    '2. high': '50.5400',
                    '3. low': '50.3600',
                    '4. close': '50.3600',
                    '5. volume': '14936'
                },
                '2021-02-12 09:03:00': {
                    '1. open': '50.3400',
                    '2. high': '50.4100',
                    '3. low': '50.3301',
                    '4. close': '50.4100',
                    '5. volume': '1811'
                },
                '2021-02-12 09:02:00': {
                    '1. open': '50.5100',
                    '2. high': '50.6000',
                    '3. low': '50.3000',
                    '4. close': '50.3000',
                    '5. volume': '11275'
                },
                '2021-02-12 09:01:00': {
                    '1. open': '50.5590',
                    '2. high': '50.7200',
                    '3. low': '50.5100',
                    '4. close': '50.5400',
                    '5. volume': '3286'
                },
                '2021-02-12 09:00:00': {
                    '1. open': '50.9000',
                    '2. high': '50.9000',
                    '3. low': '50.9000',
                    '4. close': '50.9000',
                    '5. volume': '499'
                },
                '2021-02-12 08:59:00': {
                    '1. open': '50.7600',
                    '2. high': '50.9000',
                    '3. low': '50.5255',
                    '4. close': '50.5255',
                    '5. volume': '6867'
                },
                '2021-02-12 08:58:00': {
                    '1. open': '51.0000',
                    '2. high': '51.0000',
                    '3. low': '50.9000',
                    '4. close': '50.9500',
                    '5. volume': '1147'
                },
                '2021-02-12 08:57:00': {
                    '1. open': '50.9900',
                    '2. high': '51.0000',
                    '3. low': '50.9900',
                    '4. close': '51.0000',
                    '5. volume': '839'
                },
                '2021-02-12 08:56:00': {
                    '1. open': '50.9900',
                    '2. high': '50.9900',
                    '3. low': '50.9900',
                    '4. close': '50.9900',
                    '5. volume': '184'
                },
                '2021-02-12 08:55:00': {
                    '1. open': '50.9200',
                    '2. high': '50.9200',
                    '3. low': '50.9200',
                    '4. close': '50.9200',
                    '5. volume': '502'
                }
            }
            ,
            {
                '2021-02-25 10:02': { RSI: '40.8116' },
                '2021-02-25 09:57': { RSI: '36.7095' },
                '2021-02-25 09:56': { RSI: '25.9957' },
                '2021-02-25 09:55': { RSI: '27.4376' },
                '2021-02-25 09:54': { RSI: '25.9771' },
                '2021-02-25 09:49': { RSI: '33.6171' },
                '2021-02-25 09:48': { RSI: '33.0620' },
                '2021-02-25 09:43': { RSI: '36.2339' },
                '2021-02-25 09:42': { RSI: '34.4728' },
                '2021-02-25 09:41': { RSI: '43.0019' },
                '2021-02-25 09:40': { RSI: '39.4938' },
                '2021-02-25 09:39': { RSI: '31.5723' },
                '2021-02-25 09:34': { RSI: '41.7870' },
                '2021-02-25 09:33': { RSI: '47.6643' },
                '2021-02-25 09:32': { RSI: '38.2332' },
                '2021-02-25 09:31': { RSI: '55.9284' },
                '2021-02-25 09:30': { RSI: '51.1293' },
                '2021-02-25 09:29': { RSI: '65.5132' },
                '2021-02-25 09:28': { RSI: '65.5132' },
                '2021-02-25 09:27': { RSI: '67.7893' },
                '2021-02-25 09:26': { RSI: '60.9625' },
                '2021-02-25 09:25': { RSI: '58.3780' },
                '2021-02-25 09:24': { RSI: '59.9489' },
                '2021-02-25 09:23': { RSI: '58.0823' },
                '2021-02-25 09:22': { RSI: '60.8085' },
                '2021-02-25 09:21': { RSI: '59.9850' },
                '2021-02-25 09:20': { RSI: '54.5315' },
                '2021-02-25 09:19': { RSI: '61.9813' },
                '2021-02-25 09:18': { RSI: '64.0694' },
                '2021-02-25 09:17': { RSI: '62.5773' },
                '2021-02-25 09:16': { RSI: '68.9143' },
                '2021-02-25 09:15': { RSI: '68.2399' },
                '2021-02-25 09:14': { RSI: '65.1511' },
                '2021-02-25 09:13': { RSI: '61.2923' },
                '2021-02-25 09:12': { RSI: '53.1962' },
                '2021-02-25 09:11': { RSI: '52.3384' },
                '2021-02-25 09:10': { RSI: '52.6767' },
                '2021-02-25 09:09': { RSI: '55.8260' },
                '2021-02-25 09:08': { RSI: '53.4043' },
                '2021-02-25 09:07': { RSI: '49.4256' },
                '2021-02-25 09:06': { RSI: '48.6776' },
                '2021-02-25 09:05': { RSI: '50.6244' },
                '2021-02-25 09:04': { RSI: '51.3049' },
                '2021-02-25 09:03': { RSI: '54.7198' },
                '2021-02-25 09:02': { RSI: '50.8298' },
                '2021-02-25 09:01': { RSI: '70.7391' },
                '2021-02-25 09:00': { RSI: '60.6139' },

            }
            ,

            0.03, 20, 50
        )

        
    });

});
*******/
