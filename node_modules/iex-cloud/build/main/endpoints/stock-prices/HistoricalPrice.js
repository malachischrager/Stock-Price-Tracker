"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historicalPrices = void 0;
const util_1 = require("util");
const ApiRequest_1 = require("../../core/ApiRequest");
const utils_1 = require("../../utils");
/**
 * [Historical Prices](https://iexcloud.io/docs/api/#historical-prices)
 * Returns adjusted and unadjusted historical data for up to 15 years. Useful for building charts.
 */
exports.historicalPrices = (symbol, range, date, params) => {
    const path = `stock/${symbol}/chart/${[range, date].filter(x => util_1.isString(x)).join('/')}`;
    return ApiRequest_1.ApiRequest(path + utils_1.paramsToQuery(params, true));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlzdG9yaWNhbFByaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvSGlzdG9yaWNhbFByaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLCtCQUFnQztBQUVoQyxzREFBbUQ7QUFFbkQsdUNBQTRDO0FBRTVDOzs7R0FHRztBQUNVLFFBQUEsZ0JBQWdCLEdBQUcsQ0FDOUIsTUFBYyxFQUNkLEtBQWEsRUFDYixJQUFhLEVBQ2IsTUFBdUMsRUFDVyxFQUFFO0lBQ3BELE1BQU0sSUFBSSxHQUFHLFNBQVMsTUFBTSxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLGVBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ3pGLE9BQU8sdUJBQVUsQ0FBQyxJQUFJLEdBQUcscUJBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUN4RCxDQUFDLENBQUMifQ==