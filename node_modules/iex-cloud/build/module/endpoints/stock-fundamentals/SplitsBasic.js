import { ApiRequest } from '../../core';
/**
 * [SplitsBasic](https://iexcloud.io/docs/api/#splits-basic)
 *
 * Splits prior to last reported are only included with paid subscription plans
 *
 * @param symbol
 * @param range
 */
export const splitsBasic = (symbol, range) => {
    return ApiRequest(`stock/${symbol}/splits/${range || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXRzQmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9TcGxpdHNCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDOzs7Ozs7O0dBT0c7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FDekIsTUFBYyxFQUNkLEtBQXdCLEVBQ1MsRUFBRTtJQUNuQyxPQUFPLFVBQVUsQ0FBQyxTQUFTLE1BQU0sV0FBVyxLQUFLLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUMifQ==