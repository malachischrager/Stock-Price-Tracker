import { ApiRequest } from '../../core';
/**
 * [Search](https://iexcloud.io/docs/api/#search)
 *
 * Returns an array of symbols up to the top 10 matches. Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
 * Only included with paid subscription plans
 *
 * @param fragment URL encoded search string. Currently search by symbol or security name.
 */
export const search = (fragment) => {
    return ApiRequest(`search/${fragment}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9yZWZlcmVuY2UtZGF0YS9TZWFyY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4Qzs7Ozs7OztHQU9HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLENBQUMsUUFBZ0IsRUFBOEIsRUFBRTtJQUNyRSxPQUFPLFVBQVUsQ0FBQyxVQUFVLFFBQVEsRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDIn0=