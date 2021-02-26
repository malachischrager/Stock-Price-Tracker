"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.securitySwap = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [SecuritySwap](https://iexcloud.io/docs/api/#security-swap)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.securitySwap = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_security_swap/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHlTd2FwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jb3Jwb3JhdGUtYWN0aW9ucy9TZWN1cml0eVN3YXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBSW5EOzs7Ozs7OztHQVFHO0FBQ1UsUUFBQSxZQUFZLEdBQUcsQ0FBQyxNQUFlLEVBQUUsS0FBYyxFQUFvQyxFQUFFO0lBQ2hHLE9BQU8sdUJBQVUsQ0FBQyxzQ0FBc0MsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDN0UsQ0FBQyxDQUFDIn0=