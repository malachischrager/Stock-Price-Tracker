"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.priceOnly = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * Returns a number. Refer to the latestPrice attribute in the quote endpoint for a description.
 */
exports.priceOnly = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/price`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2VPbmx5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvUHJpY2VPbmx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7R0FFRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsTUFBYyxFQUFtQixFQUFFO0lBQzNELE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDIn0=