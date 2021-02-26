import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for one or more stocks.
 * @param symbol
 */
export const previousDayPrice = (symbol) => {
    return ApiRequest(`stock/${symbol}/previous`);
};
/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for all stocks.
 */
export const previousDayPrices = () => {
    return ApiRequest(`stock/market/previous`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJldmlvdXNEYXlQcmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL1ByZXZpb3VzRGF5UHJpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBR25EOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxnQkFBZ0IsR0FBRyxDQUFDLE1BQWMsRUFBcUMsRUFBRTtJQUNwRixPQUFPLFVBQVUsQ0FBQyxTQUFTLE1BQU0sV0FBVyxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsR0FBcUQsRUFBRTtJQUN0RixPQUFPLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQyJ9