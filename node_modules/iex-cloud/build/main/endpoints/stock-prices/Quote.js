"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quote = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 *
 * @param symbol Symbol name.
 * @param field Optional. Case sensitive string matching a response attribute below. Specifying an attribute will return just the attribute value. This is useful for Excel Webservice calls.
 */
exports.quote = (symbol, field) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/quote/${field || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVvdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLXByaWNlcy9RdW90ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7Ozs7R0FJRztBQUNVLFFBQUEsS0FBSyxHQUFHLENBQUMsTUFBYyxFQUFFLEtBQWMsRUFBa0IsRUFBRTtJQUN0RSxPQUFPLHVCQUFVLENBQUMsU0FBUyxNQUFNLFVBQVUsS0FBSyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDIn0=