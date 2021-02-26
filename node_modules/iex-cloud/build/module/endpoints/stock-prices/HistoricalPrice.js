import { isString } from 'util';
import { ApiRequest } from '../../core/ApiRequest';
import { paramsToQuery } from '../../utils';
/**
 * [Historical Prices](https://iexcloud.io/docs/api/#historical-prices)
 * Returns adjusted and unadjusted historical data for up to 15 years. Useful for building charts.
 */
export const historicalPrices = (symbol, range, date, params) => {
    const path = `stock/${symbol}/chart/${[range, date].filter(x => isString(x)).join('/')}`;
    return ApiRequest(path + paramsToQuery(params, true));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGlzdG9yaWNhbFByaWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9zdG9jay1wcmljZXMvSGlzdG9yaWNhbFByaWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFaEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxhQUFhLENBQUM7QUFFNUM7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FDOUIsTUFBYyxFQUNkLEtBQWEsRUFDYixJQUFhLEVBQ2IsTUFBdUMsRUFDVyxFQUFFO0lBQ3BELE1BQU0sSUFBSSxHQUFHLFNBQVMsTUFBTSxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO0lBQ3pGLE9BQU8sVUFBVSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDeEQsQ0FBQyxDQUFDIn0=