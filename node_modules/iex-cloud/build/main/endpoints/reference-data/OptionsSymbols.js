"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.optionsSymbols = void 0;
const core_1 = require("../../core");
/**
 * [Options Symbols](https://iexcloud.io/docs/api/#options-symbols)
 * This call returns an object keyed by symbol with the value of each symbol being an array of available contract dates.
 */
exports.optionsSymbols = () => {
    return core_1.ApiRequest(`ref-data/options/symbols`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiT3B0aW9uc1N5bWJvbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3JlZmVyZW5jZS1kYXRhL09wdGlvbnNTeW1ib2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUV4Qzs7O0dBR0c7QUFDVSxRQUFBLGNBQWMsR0FBRyxHQUFzQyxFQUFFO0lBQ3BFLE9BQU8saUJBQVUsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyJ9