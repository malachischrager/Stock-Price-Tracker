import { ApiRequest } from '../../core/ApiRequest';
/**
 * Company information [docs](https://iexcloud.io/docs/api/#company)
 */
export const company = (symbol) => {
    return ApiRequest(`stock/${symbol}/company`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tcGFueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvQ29tcGFueS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsQ0FBQyxNQUFjLEVBQW9CLEVBQUU7SUFDMUQsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLFVBQVUsQ0FBQyxDQUFDO0FBQy9DLENBQUMsQ0FBQyJ9