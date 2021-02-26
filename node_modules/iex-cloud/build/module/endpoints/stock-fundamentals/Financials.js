import { ApiRequest } from '../../core';
/**
 * [Financials](https://iexcloud.io/docs/api/#financials)
 *
 * Pulls income statement, balance sheet, and cash flow data from the most recent reported quarter.
 * Financial Firms report financials in a different format than our 3rd party processes therefore our data is limited
 * Only included with paid subscription plans
 *
 * @param symbol
 */
export const financials = (symbol, params) => {
    return ApiRequest(`stock/${symbol}/financials`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRmluYW5jaWFscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stZnVuZGFtZW50YWxzL0ZpbmFuY2lhbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLFlBQVksQ0FBQztBQUV4Qzs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sQ0FBQyxNQUFNLFVBQVUsR0FBRyxDQUN4QixNQUFjLEVBQ2QsTUFBeUIsRUFDSSxFQUFFO0lBQy9CLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQyJ9