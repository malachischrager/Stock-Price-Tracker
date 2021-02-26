"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.distribution = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Distribution](https://iexcloud.io/docs/api/#distribution)
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.distribution = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_distribution/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jb3Jwb3JhdGUtYWN0aW9ucy9EaXN0cmlidXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBSW5EOzs7Ozs7R0FNRztBQUNVLFFBQUEsWUFBWSxHQUFHLENBQUMsTUFBZSxFQUFFLEtBQWMsRUFBb0MsRUFBRTtJQUNoRyxPQUFPLHVCQUFVLENBQUMscUNBQXFDLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQzVFLENBQUMsQ0FBQyJ9