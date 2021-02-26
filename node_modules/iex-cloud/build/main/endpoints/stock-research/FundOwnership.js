"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fundOwnership = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [FundOwnership](https://iexcloud.io/docs/api/#fund-ownership)
 * Returns the top 10 fund holders, meaning any firm not defined as buy-side or sell-side such as mutual funds, pension funds, endowments, investment firms, and other large entities that manage funds on behalf of others.
 * Only included with paid subscription plans
 */
exports.fundOwnership = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/fund-ownership`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnVuZE93bmVyc2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcmVzZWFyY2gvRnVuZE93bmVyc2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7Ozs7R0FJRztBQUNVLFFBQUEsYUFBYSxHQUFHLENBQUMsTUFBYyxFQUFxQyxFQUFFO0lBQ2pGLE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0saUJBQWlCLENBQUMsQ0FBQztBQUN0RCxDQUFDLENBQUMifQ==