"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.earningsToday = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Earnings Today](https://iexcloud.io/docs/api/#earnings-today)
 *
 * Returns earnings that will be reported today as three arrays: before the open `bto`, after market close `amc` and during the trading day `other`. Each array contains an object with all keys from `earnings`, a `quote` object, and a `headline` key.
 */
exports.earningsToday = () => {
    return ApiRequest_1.ApiRequest(`stock/market/today-earnings`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWFybmluZ3NUb2RheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvbWFya2V0LWluZm8vRWFybmluZ3NUb2RheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFHbkQ7Ozs7R0FJRztBQUNVLFFBQUEsYUFBYSxHQUFHLEdBQStCLEVBQUU7SUFDNUQsT0FBTyx1QkFBVSxDQUFDLDZCQUE2QixDQUFDLENBQUM7QUFDbkQsQ0FBQyxDQUFDIn0=