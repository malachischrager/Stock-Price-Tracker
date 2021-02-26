"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.insiderRoster = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Insider Roster](https://iexcloud.io/docs/api/#insider-roster)
 * Returns the top 10 insiders, with the most recent information.
 */
exports.insiderRoster = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/insider-roster`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zaWRlclJvc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvSW5zaWRlclJvc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7OztHQUdHO0FBQ1UsUUFBQSxhQUFhLEdBQUcsQ0FBQyxNQUFjLEVBQXFDLEVBQUU7SUFDakYsT0FBTyx1QkFBVSxDQUFDLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9