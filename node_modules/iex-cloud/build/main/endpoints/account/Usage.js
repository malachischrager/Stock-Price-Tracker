"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usage = void 0;
const core_1 = require("../../core");
/**
 * Used to retrieve current month usage for your account.
 *
 * @param type Used to specify which quota to return.
 */
exports.usage = (type) => {
    return core_1.ApiRequest(`account/usage/${type || ''}`, { useSecret: true });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL2FjY291bnQvVXNhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBRXhDOzs7O0dBSUc7QUFDVSxRQUFBLEtBQUssR0FBRyxDQUFDLElBQWdCLEVBQWdCLEVBQUU7SUFDdEQsT0FBTyxpQkFBVSxDQUFDLGlCQUFpQixJQUFJLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RSxDQUFDLENBQUMifQ==