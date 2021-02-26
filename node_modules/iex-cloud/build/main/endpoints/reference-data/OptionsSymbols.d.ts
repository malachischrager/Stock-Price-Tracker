/**
 * [Options Symbols](https://iexcloud.io/docs/api/#options-symbols)
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 */
export declare const optionsSymbols: () => Promise<readonly OptionsSymbol[]>;
export interface OptionsSymbol {
    readonly [symbol: string]: readonly string[];
}
