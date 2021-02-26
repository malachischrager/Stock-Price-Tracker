import { ApiRequest } from '../../core';
/**
 * [U.S. Holidays And Trading Dates](https://iexcloud.io/docs/api/#u-s-holidays-and-trading-dates)
 * This call allows you to fetch a number of trade dates or holidays from a given date. For example, if you want the next trading day, you would call /ref-data/us/dates/trade/next/1.
 *
 * param type       Required. Can be `trade` or `holiday`
 * param direction  Required. Can be `next` or `last`. Default is next. next will return today if today is a holiday.
 * param last       Optional. Number of days to go back or forward. Default is 1
 * param startDate  Optional. Used to specify the start date for next or last. Format is YYYYMMDD. Defaults to today.
 */
export const usHolidaysAndTradingDates = (type, direction = 'next', last = 1, startDate) => {
    return ApiRequest(`ref-data/us/dates/${type}/${direction}/${last}/${startDate || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVNIb2xpZGF5c0FuZFRyYWRpbmdEYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvcmVmZXJlbmNlLWRhdGEvVVNIb2xpZGF5c0FuZFRyYWRpbmdEYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBRXhDOzs7Ozs7OztHQVFHO0FBQ0gsTUFBTSxDQUFDLE1BQU0seUJBQXlCLEdBQUcsQ0FDdkMsSUFBc0IsRUFDdEIsWUFBbUMsTUFBTSxFQUN6QyxPQUFlLENBQUMsRUFDaEIsU0FBa0IsRUFDNEIsRUFBRTtJQUNoRCxPQUFPLFVBQVUsQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLFNBQVMsSUFBSSxJQUFJLElBQUksU0FBUyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDekYsQ0FBQyxDQUFDIn0=