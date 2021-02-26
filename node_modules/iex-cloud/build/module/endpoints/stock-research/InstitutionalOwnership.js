import { ApiRequest } from '../../core/ApiRequest';
/**
 * [InstitutionalOwnership](https://iexcloud.io/docs/api/#institutional-ownership)
 * Returns the top 10 institutional holders, defined as buy-side or sell-side firms.
 * Only included with paid subscription plans
 */
export const institutionalOwnership = (symbol) => {
    return ApiRequest(`stock/${symbol}/institutional-ownership`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zdGl0dXRpb25hbE93bmVyc2hpcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcmVzZWFyY2gvSW5zdGl0dXRpb25hbE93bmVyc2hpcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7Ozs7R0FJRztBQUNILE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLENBQ3BDLE1BQWMsRUFDOEIsRUFBRTtJQUM5QyxPQUFPLFVBQVUsQ0FBQyxTQUFTLE1BQU0sMEJBQTBCLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUMifQ==