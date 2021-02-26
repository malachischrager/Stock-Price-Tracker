import { ApiRequest } from '../../core';
/**
 * [Pay as you go](https://iexcloud.io/docs/api/#pay-as-you-go)
 * Used to toggle Pay-as-you-go on your account.
 *
 * @param allow Pass true to enable Pay-as-you-go, or false to disable.
 */
export const payAsYouGo = (allow) => {
    return ApiRequest(`account/payasyougo`, { method: 'POST', useSecret: true, data: { allow } });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF5QXNZb3VHby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYWNjb3VudC9QYXlBc1lvdUdvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFFeEM7Ozs7O0dBS0c7QUFDSCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQUcsQ0FBQyxLQUFjLEVBQWdCLEVBQUU7SUFDekQsT0FBTyxVQUFVLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2hHLENBQUMsQ0FBQyJ9