import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Security Reclassification](https://iexcloud.io/docs/api/#security-reclassification)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const securityReclassification = (symbol, refid) => {
    return ApiRequest(`time-series/advanced_security_reclassification/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VjdXJpdHlSZWNsYXNzaWZpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9jb3Jwb3JhdGUtYWN0aW9ucy9TZWN1cml0eVJlY2xhc3NpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBSW5EOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsQ0FDdEMsTUFBZSxFQUNmLEtBQWMsRUFDZ0MsRUFBRTtJQUNoRCxPQUFPLFVBQVUsQ0FBQyxrREFBa0QsTUFBTSxJQUFJLEtBQUssRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQyxDQUFDIn0=