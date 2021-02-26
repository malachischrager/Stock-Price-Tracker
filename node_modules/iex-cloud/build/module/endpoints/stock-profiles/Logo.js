import { ApiRequest } from '../../core/ApiRequest';
/**
 * This is a helper function, but the Google APIs url is standardized.
 */
export const logo = (symbol) => {
    return ApiRequest(`stock/${symbol}/logo`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9nby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJvZmlsZXMvTG9nby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7O0dBRUc7QUFDSCxNQUFNLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQWlCLEVBQUU7SUFDcEQsT0FBTyxVQUFVLENBQUMsU0FBUyxNQUFNLE9BQU8sQ0FBQyxDQUFDO0FBQzVDLENBQUMsQ0FBQyJ9