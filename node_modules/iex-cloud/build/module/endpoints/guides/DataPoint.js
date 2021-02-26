import { ApiRequest } from '../../core/ApiRequest';
/**
 * Data Points
 *
 * Data points are available per symbol and return individual plain text values. Retrieving individual data points is useful for Excel and Google Sheet users, and applications where a single, lightweight value is needed. We also provide update times for some endpoints which allow you to call an endpoint only once it has new data.
 * @param symbol
 */
export const dataPoints = (symbol, key) => {
    return ApiRequest(`data-points/${symbol}/${key || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YVBvaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9ndWlkZXMvRGF0YVBvaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQWMsRUFBRSxHQUFZLEVBQWlDLEVBQUU7SUFDeEYsT0FBTyxVQUFVLENBQUMsZUFBZSxNQUFNLElBQUksR0FBRyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDMUQsQ0FBQyxDQUFDIn0=