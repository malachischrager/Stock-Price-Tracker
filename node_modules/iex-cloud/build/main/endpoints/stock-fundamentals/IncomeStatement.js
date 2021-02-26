"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incomeStatement = void 0;
const core_1 = require("../../core");
/**
 * [Income Statement](https://iexcloud.io/docs/api/#income-statement)
 *
 * Pulls income statement data. Available quarterly or annually with the default being the last available quarter.
 * Only included with paid subscription plans
 *
 * @param symbol
 */
exports.incomeStatement = (symbol, params) => {
    return core_1.ApiRequest(`stock/${symbol}/income`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5jb21lU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1mdW5kYW1lbnRhbHMvSW5jb21lU3RhdGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUV4Qzs7Ozs7OztHQU9HO0FBQ1UsUUFBQSxlQUFlLEdBQUcsQ0FDN0IsTUFBYyxFQUNkLE1BQThCLEVBQ0ksRUFBRTtJQUNwQyxPQUFPLGlCQUFVLENBQUMsU0FBUyxNQUFNLFNBQVMsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDIn0=