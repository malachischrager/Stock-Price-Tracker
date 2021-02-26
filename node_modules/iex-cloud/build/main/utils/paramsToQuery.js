"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paramsToQuery = void 0;
/**
 * Takes an object and turns them into query parameters for a URL
 * @param params Object to convert to query parameters
 * @param addQuestionMark Optional: indicates whether to begin the query parameters with a question mark
 * @returns Query parameters in string format, ready to be used in a URL
 */
exports.paramsToQuery = (params, addQuestionMark) => {
    return !params || params === {}
        ? ''
        : `${addQuestionMark ? '?' : ''}${Object.keys(params)
            .map(x => [x, params[x]].join('='))
            .join('&')}`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zVG9RdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9wYXJhbXNUb1F1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBOzs7OztHQUtHO0FBQ1UsUUFBQSxhQUFhLEdBQUcsQ0FBQyxNQUFXLEVBQUUsZUFBeUIsRUFBVSxFQUFFO0lBQzlFLE9BQU8sQ0FBQyxNQUFNLElBQUksTUFBTSxLQUFLLEVBQUU7UUFDN0IsQ0FBQyxDQUFDLEVBQUU7UUFDSixDQUFDLENBQUMsR0FBRyxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2FBQ2hELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNsQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztBQUNyQixDQUFDLENBQUMifQ==