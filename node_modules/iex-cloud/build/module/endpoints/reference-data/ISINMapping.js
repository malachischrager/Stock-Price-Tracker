import { ApiRequest } from '../../core';
/**
 * [ISIN Mapping](https://iexcloud.io/docs/api/#isin-mapping)
 * Helper call to convert ISIN to IEX Cloud symbols. Note that due to licensing restrictions we are unable to return the ISIN.
 */
export const isinMapping = () => {
    return ApiRequest(`ref-data/isin`, { method: 'post' });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVNJTk1hcHBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3JlZmVyZW5jZS1kYXRhL0lTSU5NYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEM7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sV0FBVyxHQUFHLEdBQXlCLEVBQUU7SUFDcEQsT0FBTyxVQUFVLENBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDekQsQ0FBQyxDQUFDIn0=