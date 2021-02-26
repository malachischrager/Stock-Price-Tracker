import { ApiRequest } from '../../core';
/**
 * Used to retrieve current month usage for your account.
 *
 * @param type Used to specify which quota to return.
 */
export const usage = (type) => {
    return ApiRequest(`account/usage/${type || ''}`, { useSecret: true });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL2FjY291bnQvVXNhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4Qzs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBZ0IsRUFBZ0IsRUFBRTtJQUN0RCxPQUFPLFVBQVUsQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7QUFDeEUsQ0FBQyxDQUFDIn0=