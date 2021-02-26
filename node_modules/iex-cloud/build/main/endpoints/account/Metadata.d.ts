/**
 * [Metadata](https://iexcloud.io/docs/api/#metadata)
 *
 * Used to retrieve account details such as current tier, payment status, message quote usage, etc.
 */
export declare const metadata: () => Promise<Metadata>;
export interface Metadata {
    readonly payAsYouGoEnabled: boolean;
    readonly effectiveDate: Date;
    readonly endDateEffective: Date;
    readonly subscriptionTermType: string;
    readonly tierName: string;
    readonly messageLimit: number;
    readonly messagesUsed: number;
    readonly circuitBreaker: number;
}
