"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceTarget = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [PriceTarget](https://iexcloud.io/docs/api/#price-target)
 * Provides the latest avg, high, and low analyst price target for a symbol.
 * Only included with paid subscription plans
 */
exports.priceTarget = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/price-target`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2VUYXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLXJlc2VhcmNoL1ByaWNlVGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7OztHQUlHO0FBQ1UsUUFBQSxXQUFXLEdBQUcsQ0FBQyxNQUFjLEVBQXdCLEVBQUU7SUFDbEUsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxlQUFlLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==