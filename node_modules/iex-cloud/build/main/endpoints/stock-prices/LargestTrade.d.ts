/**
 * [Largest Trades](https://iexcloud.io/docs/api/#largest-trades)
 * This returns 15 minute delayed, last sale eligible trades.
 * @param symbol
 */
export declare const largestTrades: (symbol: string) => Promise<readonly LargestTrade[]>;
export interface LargestTrade {
    /** refers to the price of the trade. */
    readonly price: number;
    /** refers to the number of shares of the trade. */
    readonly size: number;
    /** refers to the time of the trade. */
    readonly time: number;
    /** formatted time string as HH:MM:SS */
    readonly timeLabel: string;
    /** refers to the venue where the trade occurred. None refers to a TRF (off exchange) trade. */
    readonly venue: string;
    /** formatted venue name where the trade occurred. */
    readonly venueName: string;
}
