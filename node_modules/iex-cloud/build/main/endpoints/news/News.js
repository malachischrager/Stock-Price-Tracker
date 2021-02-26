"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.news = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * Provides intraday news from over 3,000 global news sources including major publications, regional media, and social.. This endpoint returns up to the last 50 articles. Use the historical news endpoint to fetch news as far back as January 2019
 * @param symbol
 * @param last Number between 1 and 50. Default is 10. (i.e. .../news/last/1)
 */
exports.news = (symbol, last = 10) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/news/last/${last}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvbmV3cy9OZXdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7OztHQUlHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQUUsT0FBZSxFQUFFLEVBQTRCLEVBQUU7SUFDbEYsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxjQUFjLElBQUksRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDIn0=