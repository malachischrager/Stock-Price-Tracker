import { HistoricalPrice } from './HistoricalPrice';
/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for one or more stocks.
 * @param symbol
 */
export declare const previousDayPrice: (symbol: string) => Promise<Partial<HistoricalPrice>>;
/**
 * [Previous Day Price](https://iexcloud.io/docs/api/#previous-day-price)
 * This returns previous day adjusted price data for all stocks.
 */
export declare const previousDayPrices: () => Promise<ReadonlyArray<Partial<HistoricalPrice>>>;
