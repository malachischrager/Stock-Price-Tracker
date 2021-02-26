"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.book = void 0;
const core_1 = require("../../core");
/**
 * [Book](https://iexcloud.io/docs/api/#book)
 */
exports.book = (symbol) => {
    return core_1.ApiRequest(`stock/${symbol}/book`);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm9vay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvc3RvY2stcHJpY2VzL0Jvb2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQXdDO0FBR3hDOztHQUVHO0FBQ1UsUUFBQSxJQUFJLEdBQUcsQ0FBQyxNQUFjLEVBQWlCLEVBQUU7SUFDcEQsT0FBTyxpQkFBVSxDQUFDLFNBQVMsTUFBTSxPQUFPLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMifQ==