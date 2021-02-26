"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.keyStats = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Key Stats](https://iexcloud.io/docs/api/#key-stats)
 *
 * @param symbol
 * @param stat Case sensitive string matching the name of a single key to return one value. Ex: If you only want the next earnings date, you would call `/stock/aapl/stats/nextEarningsDate`
 */
exports.keyStats = (symbol, stat) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/stats/${stat || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5U3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLXJlc2VhcmNoL0tleVN0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7Ozs7R0FLRztBQUNVLFFBQUEsUUFBUSxHQUFHLENBQ3RCLE1BQWMsRUFDZCxJQUFhLEVBQzhCLEVBQUU7SUFDN0MsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxVQUFVLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyJ9