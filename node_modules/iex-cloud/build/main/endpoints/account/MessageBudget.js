"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageBudget = void 0;
const ApiRequest_1 = require("../../core/ApiRequest");
/**
 * [Message Budget](https://iexcloud.io/docs/api/#message-budget)
 *
 * Used to set an upper limit, “message budget”, on pay as you go messages where you want to make sure not to go above a certain amount. Set the total messages you wish to consume for the month, and once that limit is reached, all API calls will stop until the limit is removed or increased.
 */
exports.messageBudget = (totalMessages) => {
    return ApiRequest_1.ApiRequest(`account/messagebudget`, {
        data: { totalMessages },
        method: 'POST',
        useSecret: true,
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWVzc2FnZUJ1ZGdldC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9lbmRwb2ludHMvYWNjb3VudC9NZXNzYWdlQnVkZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFtRDtBQUVuRDs7OztHQUlHO0FBQ1UsUUFBQSxhQUFhLEdBQUcsQ0FBQyxhQUFxQixFQUFnQixFQUFFO0lBQ25FLE9BQU8sdUJBQVUsQ0FBQyx1QkFBdUIsRUFBRTtRQUN6QyxJQUFJLEVBQUUsRUFBRSxhQUFhLEVBQUU7UUFDdkIsTUFBTSxFQUFFLE1BQU07UUFDZCxTQUFTLEVBQUUsSUFBSTtLQUNoQixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMifQ==