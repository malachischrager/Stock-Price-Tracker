"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.analystRecommendations = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Analyst Recommendations](https://iexcloud.io/docs/api/#analyst-recommendations)
 * Pulls data from the last four months.
 */
exports.analystRecommendations = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/recommendation-trends`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5hbHlzdFJlY29tbWVuZGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcmVzZWFyY2gvQW5hbHlzdFJlY29tbWVuZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7OztHQUdHO0FBQ1UsUUFBQSxzQkFBc0IsR0FBRyxDQUNwQyxNQUFjLEVBQzBDLEVBQUU7SUFDMUQsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSx3QkFBd0IsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyJ9