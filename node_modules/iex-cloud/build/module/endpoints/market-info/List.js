import { ApiRequest } from '../../core/ApiRequest';
/**
 * [List](https://iexcloud.io/docs/api/#list)
 * Returns an array of quotes for the top 10 symbols in a specified list.
 *
 * @param listType
 */
export const list = (listType, params) => {
    return ApiRequest(`stock/market/list/${listType}`, { params });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvbWFya2V0LWluZm8vTGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFLbkQ7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxRQUFrQixFQUFFLE1BQXFCLEVBQTZCLEVBQUU7SUFDM0YsT0FBTyxVQUFVLENBQUMscUJBQXFCLFFBQVEsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUNqRSxDQUFDLENBQUMifQ==