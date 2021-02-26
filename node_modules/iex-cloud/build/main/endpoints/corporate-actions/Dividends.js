"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dividends = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Dividends](https://iexcloud.io/docs/api/#dividends)
 *
 * Obtain up-to-date and detailed information on all new dividend announcements, as well as 12+ years of historical dividend records. This endpoint covers over 39,000 US equities, mutual funds, ADRs, and ETFs.
 * You’ll be provided with:
 *   Detailed information on both cash and stock dividends including record, payment, ex, and announce dates
 *   Gross and net amounts
 *   Details of all currencies in which a dividend can be paid
 *   Tax information
 *   The ability to keep up with the growing number of complex dividend distributions
 *
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.dividends = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_dividends/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGl2aWRlbmRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jb3Jwb3JhdGUtYWN0aW9ucy9EaXZpZGVuZHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBSW5EOzs7Ozs7Ozs7Ozs7Ozs7R0FlRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsTUFBZSxFQUFFLEtBQWMsRUFBZ0MsRUFBRTtJQUN6RixPQUFPLHVCQUFVLENBQUMsa0NBQWtDLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQyJ9