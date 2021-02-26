import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Bonus Issue](https://iexcloud.io/docs/api/#bonus-issue)
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const bonusIssue = (symbol, refid) => {
    return ApiRequest(`time-series/advanced_bonus/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9udXNJc3N1ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvY29ycG9yYXRlLWFjdGlvbnMvQm9udXNJc3N1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJbkQ7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUFDLE1BQWUsRUFBRSxLQUFjLEVBQWtDLEVBQUU7SUFDNUYsT0FBTyxVQUFVLENBQUMsOEJBQThCLE1BQU0sSUFBSSxLQUFLLEVBQUUsQ0FBQyxDQUFDO0FBQ3JFLENBQUMsQ0FBQyJ9