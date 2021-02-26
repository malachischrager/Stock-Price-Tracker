/**
 * Takes an object and turns them into query parameters for a URL
 * @param params Object to convert to query parameters
 * @param addQuestionMark Optional: indicates whether to begin the query parameters with a question mark
 * @returns Query parameters in string format, ready to be used in a URL
 */
export declare const paramsToQuery: (params: any, addQuestionMark?: boolean) => string;
