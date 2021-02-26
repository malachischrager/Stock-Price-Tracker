/**
 * [ISIN Mapping](https://iexcloud.io/docs/api/#isin-mapping)
 * Helper call to convert ISIN to IEX Cloud symbols. Note that due to licensing restrictions we are unable to return the ISIN.
 */
export declare const isinMapping: () => Promise<ISINMapping>;
export interface ISINMapping {
    /** The ticker */
    readonly symbol: string;
    /** An identifier of where the symbol is listed */
    readonly exchange: string;
    /** The geographic identifier where the symbol is listed */
    readonly region: string;
}
