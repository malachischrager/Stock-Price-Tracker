"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.list = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [List](https://iexcloud.io/docs/api/#list)
 * Returns an array of quotes for the top 10 symbols in a specified list.
 *
 * @param listType
 */
exports.list = (listType, params) => {
    return ApiRequest_1.ApiRequest(`stock/market/list/${listType}`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvbWFya2V0LWluZm8vTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFLbkQ7Ozs7O0dBS0c7QUFDVSxRQUFBLElBQUksR0FBRyxDQUFDLFFBQWtCLEVBQUUsTUFBcUIsRUFBNkIsRUFBRTtJQUMzRixPQUFPLHVCQUFVLENBQUMscUJBQXFCLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMifQ==