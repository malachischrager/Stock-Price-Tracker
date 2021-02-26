"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cashflow = void 0;
const core_1 = require("../../core");
/**
 * [Cash Flow](https://iexcloud.io/docs/api/#cash-flow)
 *
 * Pulls cash flow data. Available quarterly or annually, with the default being the last available quarter.
 * Only included with paid subscription plans.
 *
 * @param symbol
 * @param params
 */
exports.cashflow = (symbol, params) => {
    return core_1.ApiRequest(`stock/${symbol}/cash-flow`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2FzaEZsb3cuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9DYXNoRmxvdy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFFeEM7Ozs7Ozs7O0dBUUc7QUFDVSxRQUFBLFFBQVEsR0FBRyxDQUN0QixNQUFjLEVBQ2QsTUFBZ0MsRUFDTCxFQUFFO0lBQzdCLE9BQU8saUJBQVUsQ0FBQyxTQUFTLE1BQU0sWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUM3RCxDQUFDLENBQUMifQ==