/**
 * [DelayedQuote](https://iexcloud.io/docs/api/#delayed-quote)
 *
 * This returns the 15 minute delayed market quote.
 * Only included with paid subscription plans
 */
export declare const delayedQuote: (symbol: string) => Promise<DelayedQuote>;
export interface DelayedQuote {
    readonly symbol: string;
    readonly delayedPrice: number;
    readonly delayedSize: number;
    readonly delayedPriceTime: number;
    readonly high: number;
    readonly low: number;
    readonly totalVolume: number;
    readonly processedTime: number;
}
