"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.estimates = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Estimates](https://iexcloud.io/docs/api/#estimates)
 * Provides the latest consensus estimate for the next fiscal period
 */
exports.estimates = (symbol, params) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/estimates`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXN0aW1hdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1yZXNlYXJjaC9Fc3RpbWF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBRW5EOzs7R0FHRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsTUFBYyxFQUFFLE1BQXdCLEVBQTBCLEVBQUU7SUFDNUYsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyJ9