import { ApiRequest } from '../../core/ApiRequest';
/**
 * [ohlc](https://iexcloud.io/docs/api/#ohlc)
 * Returns the official open and close for a give symbol. The official open is available as soon as 9:45am ET and the official close as soon as 4:15pm ET. Some stocks can report late open or close prices.
 *
 * Only available to paid subscribers
 */
export const ohlc = (symbol) => {
    return ApiRequest(`stock/${symbol}/ohlc`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT2hsYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL09obGMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5EOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBYyxFQUFpQixFQUFFO0lBQ3BELE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMifQ==