import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Insider Summary](https://iexcloud.io/docs/api/#insider-summary)
 * Returns aggregated insiders summary data for the last 6 months.
 * Only included with paid subscription plans
 */
export const insiderSummary = (symbol) => {
    return ApiRequest(`stock/${symbol}/insider-summary`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5zaWRlclN1bW1hcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLXByb2ZpbGVzL0luc2lkZXJTdW1tYXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQUMsTUFBYyxFQUFzQyxFQUFFO0lBQ25GLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3ZELENBQUMsQ0FBQyJ9