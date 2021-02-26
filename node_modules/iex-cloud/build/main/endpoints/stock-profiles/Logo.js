"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logo = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * This is a helper function, but the Google APIs url is standardized.
 */
exports.logo = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/logo`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvTG9nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7O0dBRUc7QUFDVSxRQUFBLElBQUksR0FBRyxDQUFDLE1BQWMsRUFBaUIsRUFBRTtJQUNwRCxPQUFPLHVCQUFVLENBQUMsU0FBUyxNQUFNLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyJ9