import { ApiRequest } from '../../core';
/**
 * [Income Statement](https://iexcloud.io/docs/api/#income-statement)
 *
 * Pulls income statement data. Available quarterly or annually with the default being the last available quarter.
 * Only included with paid subscription plans
 *
 * @param symbol
 */
export const incomeStatement = (symbol, params) => {
    return ApiRequest(`stock/${symbol}/income`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5jb21lU3RhdGVtZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1mdW5kYW1lbnRhbHMvSW5jb21lU3RhdGVtZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEM7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLGVBQWUsR0FBRyxDQUM3QixNQUFjLEVBQ2QsTUFBOEIsRUFDSSxFQUFFO0lBQ3BDLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxTQUFTLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzFELENBQUMsQ0FBQyJ9