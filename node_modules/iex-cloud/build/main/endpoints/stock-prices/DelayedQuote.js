"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.delayedQuote = void 0;
const core_1 = require("../../core");
/**
 * [DelayedQuote](https://iexcloud.io/docs/api/#delayed-quote)
 *
 * This returns the 15 minute delayed market quote.
 * Only included with paid subscription plans
 */
exports.delayedQuote = (symbol) => {
    return core_1.ApiRequest(`stock/${symbol}/delayed-quote`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsYXllZFF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvRGVsYXllZFF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUV4Qzs7Ozs7R0FLRztBQUNVLFFBQUEsWUFBWSxHQUFHLENBQUMsTUFBYyxFQUF5QixFQUFFO0lBQ3BFLE9BQU8saUJBQVUsQ0FBQyxTQUFTLE1BQU0sZ0JBQWdCLENBQUMsQ0FBQztBQUNyRCxDQUFDLENBQUMifQ==