import { ApiRequest } from '../../core';
/**
 * [Dividends (Basic)](https://iexcloud.io/docs/api/#dividends-basic)
 *
 * Provides basic dividend data for US equities, ETFs, and Mutual Funds for the last 5 years. For 13+ years of history and comprehensive data, use the Advanced Dividends endpoint.
 *
 * Only included with paid subscription plans.
 *
 * @param symbol
 * @param range 1m default
 */
export const dividendsBasic = (symbol, range) => {
    return ApiRequest(`stock/${symbol}/dividends/${range}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGl2aWRlbmRzQmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9EaXZpZGVuZHNCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDOzs7Ozs7Ozs7R0FTRztBQUNILE1BQU0sQ0FBQyxNQUFNLGNBQWMsR0FBRyxDQUM1QixNQUFjLEVBQ2QsS0FBc0IsRUFDYyxFQUFFO0lBQ3RDLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxjQUFjLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDIn0=