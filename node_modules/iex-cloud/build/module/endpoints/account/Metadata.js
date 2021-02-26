import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Metadata](https://iexcloud.io/docs/api/#metadata)
 *
 * Used to retrieve account details such as current tier, payment status, message quote usage, etc.
 */
export const metadata = () => {
    return ApiRequest(`account/metadata`, { useSecret: true });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL2FjY291bnQvTWV0YWRhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRW5EOzs7O0dBSUc7QUFDSCxNQUFNLENBQUMsTUFBTSxRQUFRLEdBQUcsR0FBc0IsRUFBRTtJQUM5QyxPQUFPLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzdELENBQUMsQ0FBQyJ9