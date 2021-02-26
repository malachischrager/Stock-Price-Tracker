/**
 * Used to retrieve current month usage for your account.
 *
 * @param type Used to specify which quota to return.
 */
export declare const usage: (type?: UsageType) => Promise<any>;
export declare type UsageType = 'messages' | 'rules' | 'rule-records' | 'alerts' | 'alert-records' | string;
