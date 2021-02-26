"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.internationalSymbols = void 0;
const core_1 = require("../../core");
/**
 * [International Symbols](https://iexcloud.io/docs/api/#international-symbols)
 * This call returns an array of international symbols that IEX Cloud supports for API calls.
 */
exports.internationalSymbols = ({ region, exchange, }) => {
    const path = region ? `region/${region}` : exchange ? `exchange/${exchange}` : null;
    return core_1.ApiRequest(`ref-data/${path}/symbols`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW50ZXJuYXRpb25hbFN5bWJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3JlZmVyZW5jZS1kYXRhL0ludGVybmF0aW9uYWxTeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUd4Qzs7O0dBR0c7QUFDVSxRQUFBLG9CQUFvQixHQUFHLENBQUMsRUFDbkMsTUFBTSxFQUNOLFFBQVEsR0FDRixFQUEyQyxFQUFFO0lBQ25ELE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsVUFBVSxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDcEYsT0FBTyxpQkFBVSxDQUFDLFlBQVksSUFBSSxVQUFVLENBQUMsQ0FBQztBQUNoRCxDQUFDLENBQUMifQ==