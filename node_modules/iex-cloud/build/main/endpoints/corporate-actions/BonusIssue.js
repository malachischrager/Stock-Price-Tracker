"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bonusIssue = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Bonus Issue](https://iexcloud.io/docs/api/#bonus-issue)
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.bonusIssue = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_bonus/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9udXNJc3N1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvY29ycG9yYXRlLWFjdGlvbnMvQm9udXNJc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFJbkQ7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsVUFBVSxHQUFHLENBQUMsTUFBZSxFQUFFLEtBQWMsRUFBa0MsRUFBRTtJQUM1RixPQUFPLHVCQUFVLENBQUMsOEJBQThCLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQyJ9