/**
 * [Peer Groups](https://iexcloud.io/docs/api/#peer-groups)
 * Returns an array of peer symbols.
 * Only included with paid subscription plans
 */
export declare const peerGroups: (symbol: string) => Promise<readonly string[]>;
