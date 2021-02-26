"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Metadata](https://iexcloud.io/docs/api/#metadata)
 *
 * Used to retrieve account details such as current tier, payment status, message quote usage, etc.
 */
exports.metadata = () => {
    return ApiRequest_1.ApiRequest(`account/metadata`, { useSecret: true });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL2FjY291bnQvTWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQW1EO0FBRW5EOzs7O0dBSUc7QUFDVSxRQUFBLFFBQVEsR0FBRyxHQUFzQixFQUFFO0lBQzlDLE9BQU8sdUJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyJ9