"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.institutionalOwnership = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [InstitutionalOwnership](https://iexcloud.io/docs/api/#institutional-ownership)
 * Returns the top 10 institutional holders, defined as buy-side or sell-side firms.
 * Only included with paid subscription plans
 */
exports.institutionalOwnership = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/institutional-ownership`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdGl0dXRpb25hbE93bmVyc2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcmVzZWFyY2gvSW5zdGl0dXRpb25hbE93bmVyc2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7Ozs7R0FJRztBQUNVLFFBQUEsc0JBQXNCLEdBQUcsQ0FDcEMsTUFBYyxFQUM4QixFQUFFO0lBQzlDLE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0sMEJBQTBCLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMifQ==