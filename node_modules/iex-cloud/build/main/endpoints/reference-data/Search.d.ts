/**
 * [Search](https://iexcloud.io/docs/api/#search)
 *
 * Returns an array of symbols up to the top 10 matches. Results will be sorted for relevancy. Search currently defaults to equities only, where the symbol returned is supported by endpoints listed under the Stocks category.
 * Only included with paid subscription plans
 *
 * @param fragment URL encoded search string. Currently search by symbol or security name.
 */
export declare const search: (fragment: string) => Promise<readonly Search[]>;
export interface Search {
    /** refers to the symbol represented in Nasdaq Integrated symbology (INET). */
    readonly symbol: string;
    /** Name of the security */
    readonly securityName: string;
    /** refers to the common issue type */
    readonly securityType: SearchSecurityType;
    /** refers to the country code for the symbol using ISO 3166-1 alpha-2 */
    readonly region: string;
    /** refers to Exchange using IEX Supported Exchanges list */
    readonly exchange: string;
}
export declare type SearchSecurityType = 'AD' | 'RE' | 'CE' | 'SI' | 'LP' | 'CS' | 'ET' | 'WT' | 'OEF' | 'CEF' | 'PS' | 'UT' | 'TEMP';
