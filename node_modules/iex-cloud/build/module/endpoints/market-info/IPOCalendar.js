import { ApiRequest } from '../../core/ApiRequest';
/**
 * [IPO Calendar](https://iexcloud.io/docs/api/#ipo-calendar)
 * This returns a list of upcoming or today IPOs scheduled for the current and next month. The response is split into two structures: `rawData` and `viewData`. `rawData` represents all available data for an IPO. `viewData` represents data structured for display to a user.
 *
 * Only included with paid subscription plans
 * @param today true if only for today
 */
export const ipoCalendar = (today) => {
    return ApiRequest(`stock/market/${today ? `today` : `upcoming`}-ipos`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBPQ2FsZW5kYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL21hcmtldC1pbmZvL0lQT0NhbGVuZGFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUcsQ0FBQyxLQUFlLEVBQXdCLEVBQUU7SUFDbkUsT0FBTyxVQUFVLENBQUMsZ0JBQWdCLEtBQUssQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxVQUFVLE9BQU8sQ0FBQyxDQUFDO0FBQ3pFLENBQUMsQ0FBQyJ9