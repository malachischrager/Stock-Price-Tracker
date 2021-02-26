"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.balanceSheet = void 0;
const core_1 = require("../../core");
/**
 * [Balance Sheet](https://iexcloud.io/docs/api/#balance-sheet)
 *
 * Pulls balance sheet data. Available quarterly or annually with the default being the last available quarter.
 *
 * Only included with paid subscription plans.
 * Financial information is limited for some financial firms.
 *
 * @param symbol
 * @param params
 */
exports.balanceSheet = (symbol, params) => {
    return core_1.ApiRequest(`stock/${symbol}/balance-sheet`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jZVNoZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1mdW5kYW1lbnRhbHMvQmFsYW5jZVNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUV4Qzs7Ozs7Ozs7OztHQVVHO0FBQ1UsUUFBQSxZQUFZLEdBQUcsQ0FDMUIsTUFBYyxFQUNkLE1BQW9DLEVBQ0wsRUFBRTtJQUNqQyxPQUFPLGlCQUFVLENBQUMsU0FBUyxNQUFNLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMifQ==