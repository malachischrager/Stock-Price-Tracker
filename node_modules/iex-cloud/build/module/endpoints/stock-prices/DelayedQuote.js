import { ApiRequest } from '../../core';
/**
 * [DelayedQuote](https://iexcloud.io/docs/api/#delayed-quote)
 *
 * This returns the 15 minute delayed market quote.
 * Only included with paid subscription plans
 */
export const delayedQuote = (symbol) => {
    return ApiRequest(`stock/${symbol}/delayed-quote`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVsYXllZFF1b3RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvRGVsYXllZFF1b3RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEM7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsQ0FBQyxNQUFjLEVBQXlCLEVBQUU7SUFDcEUsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLGdCQUFnQixDQUFDLENBQUM7QUFDckQsQ0FBQyxDQUFDIn0=