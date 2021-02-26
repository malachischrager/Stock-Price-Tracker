"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payAsYouGo = void 0;
const core_1 = require("../../core");
/**
 * [Pay as you go](https://iexcloud.io/docs/api/#pay-as-you-go)
 * Used to toggle Pay-as-you-go on your account.
 *
 * @param allow Pass true to enable Pay-as-you-go, or false to disable.
 */
exports.payAsYouGo = (allow) => {
    return core_1.ApiRequest(`account/payasyougo`, { method: 'POST', useSecret: true, data: { allow } });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5QXNZb3VHby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYWNjb3VudC9QYXlBc1lvdUdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUF3QztBQUV4Qzs7Ozs7R0FLRztBQUNVLFFBQUEsVUFBVSxHQUFHLENBQUMsS0FBYyxFQUFnQixFQUFFO0lBQ3pELE9BQU8saUJBQVUsQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDaEcsQ0FBQyxDQUFDIn0=