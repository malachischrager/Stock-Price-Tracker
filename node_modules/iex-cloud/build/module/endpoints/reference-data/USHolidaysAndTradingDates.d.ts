/**
 * [U.S. Holidays And Trading Dates](https://iexcloud.io/docs/api/#u-s-holidays-and-trading-dates)
 * This call allows you to fetch a number of trade dates or holidays from a given date. For example, if you want the next trading day, you would call /ref-data/us/dates/trade/next/1.
 *
 * param type       Required. Can be `trade` or `holiday`
 * param direction  Required. Can be `next` or `last`. Default is next. next will return today if today is a holiday.
 * param last       Optional. Number of days to go back or forward. Default is 1
 * param startDate  Optional. Used to specify the start date for next or last. Format is YYYYMMDD. Defaults to today.
 */
export declare const usHolidaysAndTradingDates: (type: TradingDatesType, direction?: TradingDatesDirection, last?: number, startDate?: string) => Promise<readonly USHolidaysAndTradingDate[]>;
export declare type TradingDatesType = 'trade' | 'holiday';
export declare type TradingDatesDirection = 'next' | 'last';
export interface USHolidaysAndTradingDate {
    /** Trading or holiday date depending on the type specified. Formatted as YYYY-MM-DD. */
    readonly date: string;
    /** T+2 trade settlement date depending on the type specified. Formatted as YYYY-MM-DD. */
    readonly settlementDate: string;
}
