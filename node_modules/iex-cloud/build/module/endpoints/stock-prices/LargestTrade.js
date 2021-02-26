import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Largest Trades](https://iexcloud.io/docs/api/#largest-trades)
 * This returns 15 minute delayed, last sale eligible trades.
 * @param symbol
 */
export const largestTrades = (symbol) => {
    return ApiRequest(`stock/${symbol}/largest-trades`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGFyZ2VzdFRyYWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvTGFyZ2VzdFRyYWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBYyxFQUFvQyxFQUFFO0lBQ2hGLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxpQkFBaUIsQ0FBQyxDQUFDO0FBQ3RELENBQUMsQ0FBQyJ9