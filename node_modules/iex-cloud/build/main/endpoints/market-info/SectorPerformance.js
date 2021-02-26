"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sectorPerformance = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Sector Performance](https://iexcloud.io/docs/api/#sector-performance)
 *
 * This returns an array of each sector and performance for the current trading day. Performance is based on each sector ETF.
 * Only included with paid subscription plans
 */
exports.sectorPerformance = () => {
    return ApiRequest_1.ApiRequest(`stock/market/sector-performance`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdG9yUGVyZm9ybWFuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL21hcmtldC1pbmZvL1NlY3RvclBlcmZvcm1hbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7Ozs7R0FLRztBQUNVLFFBQUEsaUJBQWlCLEdBQUcsR0FBMEMsRUFBRTtJQUMzRSxPQUFPLHVCQUFVLENBQUMsaUNBQWlDLENBQUMsQ0FBQztBQUN2RCxDQUFDLENBQUMifQ==