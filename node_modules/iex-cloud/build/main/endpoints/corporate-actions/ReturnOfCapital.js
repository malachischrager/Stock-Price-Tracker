"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnOfCapital = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Return of Capital](https://iexcloud.io/docs/api/#return-of-capital)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.returnOfCapital = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_return_of_capital/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmV0dXJuT2ZDYXBpdGFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jb3Jwb3JhdGUtYWN0aW9ucy9SZXR1cm5PZkNhcGl0YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBSW5EOzs7Ozs7OztHQVFHO0FBQ1UsUUFBQSxlQUFlLEdBQUcsQ0FDN0IsTUFBZSxFQUNmLEtBQWMsRUFDdUIsRUFBRTtJQUN2QyxPQUFPLHVCQUFVLENBQUMsMENBQTBDLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ2pGLENBQUMsQ0FBQyJ9