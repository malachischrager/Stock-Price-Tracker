"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iexSymbols = void 0;
const core_1 = require("../../core");
/**
 * [IEX Symbols](https://iexcloud.io/docs/api/#iex-symbols)
 *
 * This call returns an array of symbols the Investors Exchange supports for trading. This list is updated daily as of 7:45 a.m. ET. Symbols may be added or removed by the Investors Exchange after the list was produced.
 */
exports.iexSymbols = () => {
    return core_1.ApiRequest(`ref-data/iex/symbols`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSUVYU3ltYm9scy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvcmVmZXJlbmNlLWRhdGEvSUVYU3ltYm9scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFFeEM7Ozs7R0FJRztBQUNVLFFBQUEsVUFBVSxHQUFHLEdBQWtDLEVBQUU7SUFDNUQsT0FBTyxpQkFBVSxDQUFDLHNCQUFzQixDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUFDIn0=