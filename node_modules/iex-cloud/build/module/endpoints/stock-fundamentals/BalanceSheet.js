import { ApiRequest } from '../../core';
/**
 * [Balance Sheet](https://iexcloud.io/docs/api/#balance-sheet)
 *
 * Pulls balance sheet data. Available quarterly or annually with the default being the last available quarter.
 *
 * Only included with paid subscription plans.
 * Financial information is limited for some financial firms.
 *
 * @param symbol
 * @param params
 */
export const balanceSheet = (symbol, params) => {
    return ApiRequest(`stock/${symbol}/balance-sheet`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFsYW5jZVNoZWV0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1mdW5kYW1lbnRhbHMvQmFsYW5jZVNoZWV0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEM7Ozs7Ozs7Ozs7R0FVRztBQUNILE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUMxQixNQUFjLEVBQ2QsTUFBb0MsRUFDTCxFQUFFO0lBQ2pDLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDakUsQ0FBQyxDQUFDIn0=