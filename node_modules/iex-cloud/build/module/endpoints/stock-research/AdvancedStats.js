import { ApiRequest } from '../../core/ApiRequest';
/**
 * [AdvancedStats](https://iexcloud.io/docs/api/#advanced-stats)
 *
 * Returns everything in key stats plus additional advanced stats such as EBITDA, ratios, key financial data, and more.
 */
export const advancedStats = (symbol) => {
    return ApiRequest(`stock/${symbol}/advanced-stats`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2YW5jZWRTdGF0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcmVzZWFyY2gvQWR2YW5jZWRTdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHbkQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLGFBQWEsR0FBRyxDQUFDLE1BQWMsRUFBMEIsRUFBRTtJQUN0RSxPQUFPLFVBQVUsQ0FBQyxTQUFTLE1BQU0saUJBQWlCLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMifQ==