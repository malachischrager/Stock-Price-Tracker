"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataPoints = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * Data Points
 *
 * Data points are available per symbol and return individual plain text values. Retrieving individual data points is useful for Excel and Google Sheet users, and applications where a single, lightweight value is needed. We also provide update times for some endpoints which allow you to call an endpoint only once it has new data.
 * @param symbol
 */
exports.dataPoints = (symbol, key) => {
    return ApiRequest_1.ApiRequest(`data-points/${symbol}/${key || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9ndWlkZXMvRGF0YVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7Ozs7R0FLRztBQUNVLFFBQUEsVUFBVSxHQUFHLENBQUMsTUFBYyxFQUFFLEdBQVksRUFBaUMsRUFBRTtJQUN4RixPQUFPLHVCQUFVLENBQUMsZUFBZSxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDIn0=