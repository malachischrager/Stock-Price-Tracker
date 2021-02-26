import { ApiRequest } from '../../core/ApiRequest';
import { paramsToQuery } from '../../utils';
/**
 * [Intraday Prices](https://iexcloud.io/docs/api/#intraday-prices)
 *
 * This endpoint will return aggregated intraday prices in one minute buckets
 * @param symbol Valid symbol
 * @param params
 */
export const intradayPrices = (symbol, params) => {
    return ApiRequest(`stock/${symbol}/intraday-prices` + paramsToQuery(params, true));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50cmFkYXlQcmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL0ludHJhZGF5UHJpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUM7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQzVCLE1BQWMsRUFDZCxNQUFxQyxFQUNGLEVBQUU7SUFDckMsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUNyRixDQUFDLENBQUMifQ==