import { ApiRequest } from '../../core';
/**
 * [Cash Flow](https://iexcloud.io/docs/api/#cash-flow)
 *
 * Pulls cash flow data. Available quarterly or annually, with the default being the last available quarter.
 * Only included with paid subscription plans.
 *
 * @param symbol
 * @param params
 */
export const cashflow = (symbol, params) => {
    return ApiRequest(`stock/${symbol}/cash-flow`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzaEZsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9DYXNoRmxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHLENBQ3RCLE1BQWMsRUFDZCxNQUFnQyxFQUNMLEVBQUU7SUFDN0IsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFDIn0=