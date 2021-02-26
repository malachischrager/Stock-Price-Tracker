"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.company = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * Company information [docs](https://iexcloud.io/docs/api/#company)
 */
exports.company = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/company`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGFueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvQ29tcGFueS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7O0dBRUc7QUFDVSxRQUFBLE9BQU8sR0FBRyxDQUFDLE1BQWMsRUFBb0IsRUFBRTtJQUMxRCxPQUFPLHVCQUFVLENBQUMsU0FBUyxNQUFNLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyJ9