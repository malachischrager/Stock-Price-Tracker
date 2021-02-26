import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Volume by Venue](https://iexcloud.io/docs/api/#volume-by-venue)
 * This returns 15 minute delayed and 30 day average consolidated volume percentage of a stock, by market. This call will always return 13 values, and will be sorted in ascending order by current day trading volume percentage.
 * @param symbol
 */
export const volumeByVenue = (symbol) => {
    return ApiRequest(`stock/${symbol}/volume-by-venue`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVm9sdW1lQnlWZW51ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL1ZvbHVtZUJ5VmVudWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5EOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxNQUFjLEVBQTBCLEVBQUU7SUFDdEUsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLGtCQUFrQixDQUFDLENBQUM7QUFDdkQsQ0FBQyxDQUFDIn0=