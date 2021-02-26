"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.earnings = void 0;
const util_1 = require("util");
const core_1 = require("../../core");
/**
 * [Earnings](https://iexcloud.io/docs/api/#earnings)
 *
 * Earnings data for a given company including the actual EPS, consensus, and fiscal period. Earnings are available quarterly (last 4 quarters) and annually (last 4 years).
 * Earnings prior to last quarter are only included with paid subscription plans
 *
 * @param symbol
 * @param last Optional (Number) - Number of quarters or years to return. Default is 1.
 * @param field Optional (String) - case sensitive string matching a response attribute below. Returns raw value of field specified. Useful for Excel Webservice calls.
 */
exports.earnings = (symbol, last, field, params) => {
    return core_1.ApiRequest(`stock/${symbol}/earnings/${[last, field].filter(x => util_1.isString(x)).join('/')}`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFybmluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9FYXJuaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwrQkFBZ0M7QUFFaEMscUNBQXdDO0FBRXhDOzs7Ozs7Ozs7R0FTRztBQUNVLFFBQUEsUUFBUSxHQUFHLENBQ3RCLE1BQWMsRUFDZCxJQUFhLEVBQ2IsS0FBYyxFQUNkLE1BQXVCLEVBQ0ksRUFBRTtJQUM3QixPQUFPLGlCQUFVLENBQ2YsU0FBUyxNQUFNLGFBQWEsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsZUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQzlFLEVBQUUsTUFBTSxFQUFFLENBQ1gsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9