// npm run test or npm run test test/pointwithProfit.test.js

var expect = require("chai").expect;
const {pointsWithProfit} = require('../functions');

describe('only one ohlc and rsi', () => {
    it('should return empty array', () => {
        
        var result = pointsWithProfit(
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

        console.log("HIHIHI" + result);

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

        console.log("HIHIHI" + result);

        expect(result).to.eql({});
    });

});

