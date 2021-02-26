"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usHolidaysAndTradingDates = void 0;
const core_1 = require("../../core");
/**
 * [U.S. Holidays And Trading Dates](https://iexcloud.io/docs/api/#u-s-holidays-and-trading-dates)
 * This call allows you to fetch a number of trade dates or holidays from a given date. For example, if you want the next trading day, you would call /ref-data/us/dates/trade/next/1.
 *
 * param type       Required. Can be `trade` or `holiday`
 * param direction  Required. Can be `next` or `last`. Default is next. next will return today if today is a holiday.
 * param last       Optional. Number of days to go back or forward. Default is 1
 * param startDate  Optional. Used to specify the start date for next or last. Format is YYYYMMDD. Defaults to today.
 */
exports.usHolidaysAndTradingDates = (type, direction = 'next', last = 1, startDate) => {
    return core_1.ApiRequest(`ref-data/us/dates/${type}/${direction}/${last}/${startDate || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVVNIb2xpZGF5c0FuZFRyYWRpbmdEYXRlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvcmVmZXJlbmNlLWRhdGEvVVNIb2xpZGF5c0FuZFRyYWRpbmdEYXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFFeEM7Ozs7Ozs7O0dBUUc7QUFDVSxRQUFBLHlCQUF5QixHQUFHLENBQ3ZDLElBQXNCLEVBQ3RCLFlBQW1DLE1BQU0sRUFDekMsT0FBZSxDQUFDLEVBQ2hCLFNBQWtCLEVBQzRCLEVBQUU7SUFDaEQsT0FBTyxpQkFBVSxDQUFDLHFCQUFxQixJQUFJLElBQUksU0FBUyxJQUFJLElBQUksSUFBSSxTQUFTLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztBQUN6RixDQUFDLENBQUMifQ==