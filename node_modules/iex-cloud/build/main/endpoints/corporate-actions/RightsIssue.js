"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rightsIssue = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Rights Issue](https://iexcloud.io/docs/api/#rights-issue)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.rightsIssue = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_rights/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlnaHRzSXNzdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL2NvcnBvcmF0ZS1hY3Rpb25zL1JpZ2h0c0lzc3VlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUluRDs7Ozs7Ozs7R0FRRztBQUNVLFFBQUEsV0FBVyxHQUFHLENBQUMsTUFBZSxFQUFFLEtBQWMsRUFBbUMsRUFBRTtJQUM5RixPQUFPLHVCQUFVLENBQUMsK0JBQStCLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQyJ9