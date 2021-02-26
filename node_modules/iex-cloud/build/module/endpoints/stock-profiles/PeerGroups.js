import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Peer Groups](https://iexcloud.io/docs/api/#peer-groups)
 * Returns an array of peer symbols.
 * Only included with paid subscription plans
 */
export const peerGroups = (symbol) => {
    return ApiRequest(`stock/${symbol}/peers`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGVlckdyb3Vwcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvUGVlckdyb3Vwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQWMsRUFBOEIsRUFBRTtJQUN2RSxPQUFPLFVBQVUsQ0FBQyxTQUFTLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDIn0=