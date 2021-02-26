"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ohlc = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [ohlc](https://iexcloud.io/docs/api/#ohlc)
 * Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices.
 *
 * Only available to paid subscribers
 */
exports.ohlc = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/ohlc`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2hsYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL09obGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBRW5EOzs7OztHQUtHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQWlCLEVBQUU7SUFDcEQsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMifQ==