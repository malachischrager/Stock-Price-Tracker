"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.financials = void 0;
const core_1 = require("../../core");
/**
 * [Financials](https://iexcloud.io/docs/api/#financials)
 *
 * Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter.
 * Financial Firms report financials in a different format than our 3rd party processes therefore our data is limited
 * Only included with paid subscription plans
 *
 * @param symbol
 */
exports.financials = (symbol, params) => {
    return core_1.ApiRequest(`stock/${symbol}/financials`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluYW5jaWFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stZnVuZGFtZW50YWxzL0ZpbmFuY2lhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBRXhDOzs7Ozs7OztHQVFHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsQ0FDeEIsTUFBYyxFQUNkLE1BQXlCLEVBQ0ksRUFBRTtJQUMvQixPQUFPLGlCQUFVLENBQUMsU0FBUyxNQUFNLGFBQWEsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDOUQsQ0FBQyxDQUFDIn0=