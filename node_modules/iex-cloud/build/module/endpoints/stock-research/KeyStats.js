import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Key Stats](https://iexcloud.io/docs/api/#key-stats)
 *
 * @param symbol
 * @param stat Case sensitive string matching the name of a single key to return one value. Ex: If you only want the next earnings date, you would call `/stock/aapl/stats/nextEarningsDate`
 */
export const keyStats = (symbol, stat) => {
    return ApiRequest(`stock/${symbol}/stats/${stat || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiS2V5U3RhdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLXJlc2VhcmNoL0tleVN0YXRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7Ozs7R0FLRztBQUNILE1BQU0sQ0FBQyxNQUFNLFFBQVEsR0FBRyxDQUN0QixNQUFjLEVBQ2QsSUFBYSxFQUM4QixFQUFFO0lBQzdDLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxVQUFVLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzNELENBQUMsQ0FBQyJ9