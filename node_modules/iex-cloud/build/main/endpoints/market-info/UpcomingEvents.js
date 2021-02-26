"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upcomingEvents = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Upcoming Events](https://iexcloud.io/docs/api/#sector-performance)
 *
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market.
 *   If market is passed for the symbol, IPOs will also be included.
 * Only included with paid subscription plans
 *
 * @param symbol
 * @param eventType
 */
exports.upcomingEvents = (eventType, symbol, params) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol || 'market'}/upcoming-${eventType}`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXBjb21pbmdFdmVudHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL21hcmtldC1pbmZvL1VwY29taW5nRXZlbnRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUduRDs7Ozs7Ozs7O0dBU0c7QUFDVSxRQUFBLGNBQWMsR0FBRyxDQUM1QixTQUE0QixFQUM1QixNQUFlLEVBQ2YsTUFBOEIsRUFDTCxFQUFFO0lBQzNCLE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0sSUFBSSxRQUFRLGFBQWEsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQ3JGLENBQUMsQ0FBQyJ9