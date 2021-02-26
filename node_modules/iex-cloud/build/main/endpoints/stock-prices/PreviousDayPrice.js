"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previousDayPrices = exports.previousDayPrice = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for one or more stocks.
 * @param symbol
 */
exports.previousDayPrice = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/previous`);
};
/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for all stocks.
 */
exports.previousDayPrices = () => {
    return ApiRequest_1.ApiRequest(`stock/market/previous`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlvdXNEYXlQcmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL1ByZXZpb3VzRGF5UHJpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBR25EOzs7O0dBSUc7QUFDVSxRQUFBLGdCQUFnQixHQUFHLENBQUMsTUFBYyxFQUFxQyxFQUFFO0lBQ3BGLE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0sV0FBVyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ1UsUUFBQSxpQkFBaUIsR0FBRyxHQUFxRCxFQUFFO0lBQ3RGLE9BQU8sdUJBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyJ9