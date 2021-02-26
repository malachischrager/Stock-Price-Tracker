import { ApiRequest } from '../../core';
/**
 * [IEX Symbols](https://iexcloud.io/docs/api/#iex-symbols)
 *
 * This call returns an array of symbols the Investors Exchange supports for trading. This list is updated daily as of 7:45 a.m. ET. Symbols may be added or removed by the Investors Exchange after the list was produced.
 */
export const iexSymbols = () => {
    return ApiRequest(`ref-data/iex/symbols`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUVYU3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvcmVmZXJlbmNlLWRhdGEvSUVYU3ltYm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsR0FBa0MsRUFBRTtJQUM1RCxPQUFPLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyJ9