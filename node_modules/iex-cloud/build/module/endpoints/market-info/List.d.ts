import { Quote } from '../stock-prices';
export declare type ListType = 'mostactive' | 'gainers' | 'losers' | 'iexvolume' | 'iexpercent';
/**
 * [List](https://iexcloud.io/docs/api/#list)
 * Returns an array of quotes for the top 10 symbols in a specified list.
 *
 * @param listType
 */
export declare const list: (listType: ListType, params?: ListQSParams) => Promise<readonly Quote[]>;
export interface ListQSParams {
    /**
     * If set to `true`, all percentage values will be multiplied by a factor of 100 (Ex: `/stock/twtr/quote?displayPercent=true`)
     */
    readonly displayPercent?: boolean;
    /**
     * • Number of items to return, defaults to 10
     */
    readonly listLimit?: number;
}
