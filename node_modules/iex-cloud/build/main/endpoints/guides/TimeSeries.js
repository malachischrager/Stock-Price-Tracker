"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeSeriesById = exports.timeSeries = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * Time Series
 *
 * Time series is the most common type of data available, and consists of a collection of data points over a period of time. Time series data is indexed by a single date field, and can be retrieved by any portion of time.
 * To use this endpoint, you’ll first make a free call to get an inventory of available time series data.
 */
exports.timeSeries = () => {
    return ApiRequest_1.ApiRequest(`time-series`);
};
/**
 * Time Series by Id
 *
 * @param id ID used to identify a time series dataset.
 * @param key Key used to identify data within a dataset. A common example is a symbol such as AAPL.
 * @param subkey The optional subkey can used to further refine data for a particular key if available.
 */
exports.timeSeriesById = (id, key, subkey) => {
    return ApiRequest_1.ApiRequest(`time-series/${id}/${key}/${subkey || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGltZVNlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvZ3VpZGVzL1RpbWVTZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBRW5EOzs7OztHQUtHO0FBQ1UsUUFBQSxVQUFVLEdBQUcsR0FBbUMsRUFBRTtJQUM3RCxPQUFPLHVCQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDbkMsQ0FBQyxDQUFDO0FBRUY7Ozs7OztHQU1HO0FBQ1UsUUFBQSxjQUFjLEdBQUcsQ0FDNUIsRUFBVSxFQUNWLEdBQVcsRUFDWCxNQUFlLEVBQ1UsRUFBRTtJQUMzQixPQUFPLHVCQUFVLENBQUMsZUFBZSxFQUFFLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hFLENBQUMsQ0FBQyJ9