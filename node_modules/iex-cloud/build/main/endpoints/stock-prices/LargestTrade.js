"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.largestTrades = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Largest Trades](https://iexcloud.io/docs/api/#largest-trades)
 * This returns 15 minute delayed, last sale eligible trades.
 * @param symbol
 */
exports.largestTrades = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/largest-trades`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFyZ2VzdFRyYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvTGFyZ2VzdFRyYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7OztHQUlHO0FBQ1UsUUFBQSxhQUFhLEdBQUcsQ0FBQyxNQUFjLEVBQW9DLEVBQUU7SUFDaEYsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9