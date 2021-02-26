"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intradayPrices = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
const utils_1 = require("../../utils");
/**
 * [Intraday Prices](https://iexcloud.io/docs/api/#intraday-prices)
 *
 * This endpoint will return aggregated intraday prices in one minute buckets
 * @param symbol Valid symbol
 * @param params
 */
exports.intradayPrices = (symbol, params) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/intraday-prices` + utils_1.paramsToQuery(params, true));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50cmFkYXlQcmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL0ludHJhZGF5UHJpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBQ25ELHVDQUE0QztBQUU1Qzs7Ozs7O0dBTUc7QUFDVSxRQUFBLGNBQWMsR0FBRyxDQUM1QixNQUFjLEVBQ2QsTUFBcUMsRUFDRixFQUFFO0lBQ3JDLE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0sa0JBQWtCLEdBQUcscUJBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDLENBQUMifQ==