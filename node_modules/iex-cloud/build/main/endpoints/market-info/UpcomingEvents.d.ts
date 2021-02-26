export declare type UpcomingEventType = 'events' | 'earnings' | 'dividends' | 'splits' | 'ipos';
/**
 * [Upcoming Events](https://iexcloud.io/docs/api/#sector-performance)
 *
 * This will return all upcoming estimates, dividends, splits for a given symbol or the market.
 *   If market is passed for the symbol, IPOs will also be included.
 * Only included with paid subscription plans
 *
 * @param symbol
 * @param eventType
 */
export declare const upcomingEvents: (eventType: UpcomingEventType, symbol?: string, params?: UpcomingEventQSParams) => Promise<readonly any[]>;
export interface UpcomingEventQSParams {
    /**
     * If set to true and passed to upcoming-events or upcoming-earnings, it will return the full estimate object at the full estimate weight.
     * This can cause the call to be in the millions of messages.
     */
    readonly fullUpcomingEarnings?: boolean;
}
