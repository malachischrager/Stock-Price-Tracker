import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Estimates](https://iexcloud.io/docs/api/#estimates)
 * Provides the latest consensus estimate for the next fiscal period
 */
export const estimates = (symbol, params) => {
    return ApiRequest(`stock/${symbol}/estimates`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXN0aW1hdGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1yZXNlYXJjaC9Fc3RpbWF0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5EOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLFNBQVMsR0FBRyxDQUFDLE1BQWMsRUFBRSxNQUF3QixFQUEwQixFQUFFO0lBQzVGLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyJ9