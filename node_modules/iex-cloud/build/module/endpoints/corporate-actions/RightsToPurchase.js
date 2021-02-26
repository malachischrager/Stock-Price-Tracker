import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Right to Purchase](https://iexcloud.io/docs/api/#right-to-purchase)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const rightsToPurchase = (symbol, refid) => {
    return ApiRequest(`time-series/advanced_right_to_purchase/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmlnaHRzVG9QdXJjaGFzZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvY29ycG9yYXRlLWFjdGlvbnMvUmlnaHRzVG9QdXJjaGFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJbkQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUM5QixNQUFlLEVBQ2YsS0FBYyxFQUN3QixFQUFFO0lBQ3hDLE9BQU8sVUFBVSxDQUFDLDBDQUEwQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztBQUNqRixDQUFDLENBQUMifQ==