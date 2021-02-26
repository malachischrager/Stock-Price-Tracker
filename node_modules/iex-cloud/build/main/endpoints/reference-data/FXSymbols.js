"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fxSymbols = void 0;
const core_1 = require("../../core");
/**
 * [FX Symbols](https://iexcloud.io/docs/api/#fx-symbols)
 *
 * This call returns a list of supported currencies and currency pairs.
 */
exports.fxSymbols = () => {
    return core_1.ApiRequest(`ref-data/fx/symbols`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRlhTeW1ib2xzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2VuZHBvaW50cy9yZWZlcmVuY2UtZGF0YS9GWFN5bWJvbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBRXhDOzs7O0dBSUc7QUFDVSxRQUFBLFNBQVMsR0FBRyxHQUF1QixFQUFFO0lBQ2hELE9BQU8saUJBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBQzNDLENBQUMsQ0FBQyJ9