/**
 * This is a helper function, but the Google APIs url is standardized.
 */
export declare const logo: (symbol: string) => Promise<Logo>;
export interface Logo {
    readonly url: string;
}
