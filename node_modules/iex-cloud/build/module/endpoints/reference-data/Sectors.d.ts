/**
 * [Sectors](https://iexcloud.io/docs/api/#sectors)
 * Returns an array of sectors.
 */
export declare const sectors: () => Promise<ReadonlyArray<Sector>>;
interface Sector {
    readonly name: string;
}
export {};
