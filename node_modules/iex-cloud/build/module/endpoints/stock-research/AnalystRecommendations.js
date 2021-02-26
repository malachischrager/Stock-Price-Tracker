import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Analyst Recommendations](https://iexcloud.io/docs/api/#analyst-recommendations)
 * Pulls data from the last four months.
 */
export const analystRecommendations = (symbol) => {
    return ApiRequest(`stock/${symbol}/recommendation-trends`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5hbHlzdFJlY29tbWVuZGF0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcmVzZWFyY2gvQW5hbHlzdFJlY29tbWVuZGF0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFbkQ7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sc0JBQXNCLEdBQUcsQ0FDcEMsTUFBYyxFQUMwQyxFQUFFO0lBQzFELE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSx3QkFBd0IsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyJ9