import { isString } from 'util';
import { ApiRequest } from '../../core';
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
export const earnings = (symbol, last, field, params) => {
    return ApiRequest(`stock/${symbol}/earnings/${[last, field].filter(x => isString(x)).join('/')}`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFybmluZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9FYXJuaW5ncy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEM7Ozs7Ozs7OztHQVNHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLENBQ3RCLE1BQWMsRUFDZCxJQUFhLEVBQ2IsS0FBYyxFQUNkLE1BQXVCLEVBQ0ksRUFBRTtJQUM3QixPQUFPLFVBQVUsQ0FDZixTQUFTLE1BQU0sYUFBYSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFDOUUsRUFBRSxNQUFNLEVBQUUsQ0FDWCxDQUFDO0FBQ0osQ0FBQyxDQUFDIn0=