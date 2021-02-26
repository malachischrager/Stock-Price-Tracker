"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinoff = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Spinoff](https://iexcloud.io/docs/api/#spinoff)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
exports.spinoff = (symbol, refid) => {
    return ApiRequest_1.ApiRequest(`time-series/advanced_spinoff/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bpbm9mZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvY29ycG9yYXRlLWFjdGlvbnMvU3Bpbm9mZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFJbkQ7Ozs7Ozs7O0dBUUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxDQUFDLE1BQWUsRUFBRSxLQUFjLEVBQStCLEVBQUU7SUFDdEYsT0FBTyx1QkFBVSxDQUFDLGdDQUFnQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMifQ==