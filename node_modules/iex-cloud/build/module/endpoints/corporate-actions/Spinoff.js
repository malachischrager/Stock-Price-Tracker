import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Spinoff](https://iexcloud.io/docs/api/#spinoff)
 *
 * Obtain up-to-date and detailed information on all new announcements, as well as 12+ years of historical records.
 * @remark Only available to paid plans.
 *
 * @param symbol Optional. Symbol name.
 * @param refid Optional. Id that matches the refid field returned in the response object. This allows you to pull a specific event for a symbol.
 */
export const spinoff = (symbol, refid) => {
    return ApiRequest(`time-series/advanced_spinoff/${symbol}/${refid}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3Bpbm9mZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvY29ycG9yYXRlLWFjdGlvbnMvU3Bpbm9mZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFJbkQ7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFlLEVBQUUsS0FBYyxFQUErQixFQUFFO0lBQ3RGLE9BQU8sVUFBVSxDQUFDLGdDQUFnQyxNQUFNLElBQUksS0FBSyxFQUFFLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUMifQ==