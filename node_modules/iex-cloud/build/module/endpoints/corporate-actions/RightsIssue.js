import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Rights Issue](https://iexcloud.io/docs/api/#rights-issue)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const rightsIssue = (symbol, refid) => {
    return ApiRequest(`time-series/advanced_rights/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlnaHRzSXNzdWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL2NvcnBvcmF0ZS1hY3Rpb25zL1JpZ2h0c0lzc3VlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUluRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUFDLE1BQWUsRUFBRSxLQUFjLEVBQW1DLEVBQUU7SUFDOUYsT0FBTyxVQUFVLENBQUMsK0JBQStCLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQyJ9