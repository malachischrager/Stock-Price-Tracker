"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.peerGroups = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Peer Groups](https://iexcloud.io/docs/api/#peer-groups)
 * Returns an array of peer symbols.
 * Only included with paid subscription plans
 */
exports.peerGroups = (symbol) => {
    return ApiRequest_1.ApiRequest(`stock/${symbol}/peers`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVlckdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvUGVlckdyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBbUQ7QUFFbkQ7Ozs7R0FJRztBQUNVLFFBQUEsVUFBVSxHQUFHLENBQUMsTUFBYyxFQUE4QixFQUFFO0lBQ3ZFLE9BQU8sdUJBQVUsQ0FBQyxTQUFTLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDIn0=