"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.volumeByVenue = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Volume by Venue](https://iexcloud.io/docs/api/#volume-by-venue)
 * This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage.
 * @param symbol
 */
exports.volumeByVenue = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/volume-by-venue`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVm9sdW1lQnlWZW51ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL1ZvbHVtZUJ5VmVudWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBRW5EOzs7O0dBSUc7QUFDVSxRQUFBLGFBQWEsR0FBRyxDQUFDLE1BQWMsRUFBMEIsRUFBRTtJQUN0RSxPQUFPLHVCQUFVLENBQUMsU0FBUyxNQUFNLGtCQUFrQixDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDIn0=