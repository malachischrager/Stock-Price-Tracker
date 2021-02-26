"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.splitsBasic = void 0;
const core_1 = require("../../core");
/**
 * [SplitsBasic](https://iexcloud.io/docs/api/#splits-basic)
 *
 * Splits prior to last reported are only included with paid subscription plans
 *
 * @param symbol
 * @param range
 */
exports.splitsBasic = (symbol, range) => {
    return core_1.ApiRequest(`stock/${symbol}/splits/${range || ''}`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3BsaXRzQmFzaWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL3N0b2NrLWZ1bmRhbWVudGFscy9TcGxpdHNCYXNpYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBd0M7QUFFeEM7Ozs7Ozs7R0FPRztBQUNVLFFBQUEsV0FBVyxHQUFHLENBQ3pCLE1BQWMsRUFDZCxLQUF3QixFQUNTLEVBQUU7SUFDbkMsT0FBTyxpQkFBVSxDQUFDLFNBQVMsTUFBTSxXQUFXLEtBQUssSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyJ9