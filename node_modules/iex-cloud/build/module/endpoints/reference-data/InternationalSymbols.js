import { ApiRequest } from '../../core';
/**
 * [International Symbols](https://iexcloud.io/docs/api/#international-symbols)
 * This call returns an array of international symbols that IEX Cloud supports for API calls.
 */
export const internationalSymbols = ({ region, exchange, }) => {
    const path = region ? `region/${region}` : exchange ? `exchange/${exchange}` : null;
    return ApiRequest(`ref-data/${path}/symbols`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJuYXRpb25hbFN5bWJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3JlZmVyZW5jZS1kYXRhL0ludGVybmF0aW9uYWxTeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFHeEM7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxFQUNuQyxNQUFNLEVBQ04sUUFBUSxHQUNGLEVBQTJDLEVBQUU7SUFDbkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFlBQVksUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUNwRixPQUFPLFVBQVUsQ0FBQyxZQUFZLElBQUksVUFBVSxDQUFDLENBQUM7QUFDaEQsQ0FBQyxDQUFDIn0=