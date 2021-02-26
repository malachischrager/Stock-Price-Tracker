"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dividendsBasic = void 0;
const core_1 = require("../../core");
/**
 * [Dividends (Basic)](https://iexcloud.io/docs/api/#dividends-basic)
 *
 * Provides basic dividend data for US equities, ETFs, and Mutual Funds for the last 5 years. For 13+ years of history and comprehensive data, use the Advanced Dividends endpoint.
 *
 * Only included with paid subscription plans.
 *
 * @param symbol
 * @param range 1m default
 */
exports.dividendsBasic = (symbol, range) => {
    return core_1.ApiRequest(`stock/${symbol}/dividends/${range}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGl2aWRlbmRzQmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9EaXZpZGVuZHNCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFFeEM7Ozs7Ozs7OztHQVNHO0FBQ1UsUUFBQSxjQUFjLEdBQUcsQ0FDNUIsTUFBYyxFQUNkLEtBQXNCLEVBQ2MsRUFBRTtJQUN0QyxPQUFPLGlCQUFVLENBQUMsU0FBUyxNQUFNLGNBQWMsS0FBSyxFQUFFLENBQUMsQ0FBQztBQUMxRCxDQUFDLENBQUMifQ==