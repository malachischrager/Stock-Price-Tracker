/**
 * Used to retrieve current system status.
 */
export declare const status: () => Promise<Status>;
export interface Status {
    readonly status: string;
    readonly version: string;
    readonly time: number;
}
