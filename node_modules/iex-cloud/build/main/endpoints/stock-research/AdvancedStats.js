"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.advancedStats = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [AdvancedStats](https://iexcloud.io/docs/api/#advanced-stats)
 *
 * Returns everything in key stats plus additional advanced stats such as EBITDA, ratios, key financial data, and more.
 */
exports.advancedStats = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/advanced-stats`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWR2YW5jZWRTdGF0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcmVzZWFyY2gvQWR2YW5jZWRTdGF0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFHbkQ7Ozs7R0FJRztBQUNVLFFBQUEsYUFBYSxHQUFHLENBQUMsTUFBYyxFQUEwQixFQUFFO0lBQ3RFLE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0saUJBQWlCLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMifQ==