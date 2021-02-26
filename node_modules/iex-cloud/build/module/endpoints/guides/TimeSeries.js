import { ApiRequest } from '../../core/ApiRequest';
/**
 * Time Series
 *
 * Time series is the most common type of data available, and consists of a collection of data points over a period of time. Time series data is indexed by a single date field, and can be retrieved by any portion of time.
 * To use this endpoint, you’ll first make a free call to get an inventory of available time series data.
 */
export const timeSeries = () => {
    return ApiRequest(`time-series`);
};
/**
 * Time Series by Id
 *
 * @param id ID used to identify a time series dataset.
 * @param key Key used to identify data within a dataset. A common example is a symbol such as AAPL.
 * @param subkey The optional subkey can used to further refine data for a particular key if available.
 */
export const timeSeriesById = (id, key, subkey) => {
    return ApiRequest(`time-series/${id}/${key}/${subkey || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVNlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvZ3VpZGVzL1RpbWVTZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5EOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sVUFBVSxHQUFHLEdBQW1DLEVBQUU7SUFDN0QsT0FBTyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sY0FBYyxHQUFHLENBQzVCLEVBQVUsRUFDVixHQUFXLEVBQ1gsTUFBZSxFQUNVLEVBQUU7SUFDM0IsT0FBTyxVQUFVLENBQUMsZUFBZSxFQUFFLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQyJ9