"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splits = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Splits](https://iexcloud.io/docs/api/#splits)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.splits = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_splits/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jb3Jwb3JhdGUtYWN0aW9ucy9TcGxpdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBSW5EOzs7Ozs7OztHQVFHO0FBQ1UsUUFBQSxNQUFNLEdBQUcsQ0FBQyxNQUFlLEVBQUUsS0FBYyxFQUE2QixFQUFFO0lBQ25GLE9BQU8sdUJBQVUsQ0FBQywrQkFBK0IsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDdEUsQ0FBQyxDQUFDIn0=