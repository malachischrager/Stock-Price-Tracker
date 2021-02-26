"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insiderSummary = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Insider Summary](https://iexcloud.io/docs/api/#insider-summary)
 * Returns aggregated insiders summary data for the last 6 months.
 * Only included with paid subscription plans
 */
exports.insiderSummary = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/insider-summary`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zaWRlclN1bW1hcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLXByb2ZpbGVzL0luc2lkZXJTdW1tYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7OztHQUlHO0FBQ1UsUUFBQSxjQUFjLEdBQUcsQ0FBQyxNQUFjLEVBQXNDLEVBQUU7SUFDbkYsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQyJ9