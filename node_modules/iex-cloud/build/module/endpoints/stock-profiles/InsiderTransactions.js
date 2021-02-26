import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Insider Transactions](https://iexcloud.io/docs/api/#insider-transactions)
 * Returns insider transactions.
 *
 * Only included with paid subscription plans
 * Insider transactions for the last 12 months on a rolling basis
 */
export const insiderTransactions = (symbol) => {
    return ApiRequest(`stock/${symbol}/insider-transactions`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zaWRlclRyYW5zYWN0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvSW5zaWRlclRyYW5zYWN0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxNQUFjLEVBQTJDLEVBQUU7SUFDN0YsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLHVCQUF1QixDQUFDLENBQUM7QUFDNUQsQ0FBQyxDQUFDIn0=