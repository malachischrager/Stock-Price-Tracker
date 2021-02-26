import { ApiRequest } from '../../core/ApiRequest';
/**
 * Provides intraday news from over 3,000 global news sources including major publications, regional media, and social.. This endpoint returns up to the last 50 articles. Use the historical news endpoint to fetch news as far back as January 2019
 * @param symbol
 * @param last Number between 1 and 50. Default is 10. (i.e. .../news/last/1)
 */
export const news = (symbol, last = 10) => {
    return ApiRequest(`stock/${symbol}/news/last/${last}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmV3cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvbmV3cy9OZXdzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sSUFBSSxHQUFHLENBQUMsTUFBYyxFQUFFLE9BQWUsRUFBRSxFQUE0QixFQUFFO0lBQ2xGLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxjQUFjLElBQUksRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDIn0=