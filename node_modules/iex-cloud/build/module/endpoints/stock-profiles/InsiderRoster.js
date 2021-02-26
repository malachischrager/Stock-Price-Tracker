import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Insider Roster](https://iexcloud.io/docs/api/#insider-roster)
 * Returns the top 10 insiders, with the most recent information.
 */
export const insiderRoster = (symbol) => {
    return ApiRequest(`stock/${symbol}/insider-roster`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zaWRlclJvc3Rlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvSW5zaWRlclJvc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBYyxFQUFxQyxFQUFFO0lBQ2pGLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9