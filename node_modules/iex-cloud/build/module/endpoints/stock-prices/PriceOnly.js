import { ApiRequest } from '../../core/ApiRequest';
/**
 * Returns a number. Refer to the latestPrice attribute in the quote endpoint for a description.
 */
export const priceOnly = (symbol) => {
    return ApiRequest(`stock/${symbol}/price`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2VPbmx5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvUHJpY2VPbmx5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQWMsRUFBbUIsRUFBRTtJQUMzRCxPQUFPLFVBQVUsQ0FBQyxTQUFTLE1BQU0sUUFBUSxDQUFDLENBQUM7QUFDN0MsQ0FBQyxDQUFDIn0=