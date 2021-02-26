import { ApiRequest } from '../../core/ApiRequest';
/**
 * [PriceTarget](https://iexcloud.io/docs/api/#price-target)
 * Provides the latest avg, high, and low analyst price target for a symbol.
 * Only included with paid subscription plans
 */
export const priceTarget = (symbol) => {
    return ApiRequest(`stock/${symbol}/price-target`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJpY2VUYXJnZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLXJlc2VhcmNoL1ByaWNlVGFyZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVuRDs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLENBQUMsTUFBYyxFQUF3QixFQUFFO0lBQ2xFLE9BQU8sVUFBVSxDQUFDLFNBQVMsTUFBTSxlQUFlLENBQUMsQ0FBQztBQUNwRCxDQUFDLENBQUMifQ==