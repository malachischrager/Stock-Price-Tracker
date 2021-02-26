"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isinMapping = void 0;
const core_1 = require("../../core");
/**
 * [ISIN Mapping](https://iexcloud.io/docs/api/#isin-mapping)
 * Helper call to convert ISIN to IEX Cloud symbols. Note that due to licensing restrictions we are unable to return the ISIN.
 */
exports.isinMapping = () => {
    return core_1.ApiRequest(`ref-data/isin`, { method: 'post' });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVNJTk1hcHBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3JlZmVyZW5jZS1kYXRhL0lTSU5NYXBwaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUV4Qzs7O0dBR0c7QUFDVSxRQUFBLFdBQVcsR0FBRyxHQUF5QixFQUFFO0lBQ3BELE9BQU8saUJBQVUsQ0FBQyxlQUFlLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztBQUN6RCxDQUFDLENBQUMifQ==