/**
 * Takes an object and turns them into query parameters for a URL
 * @param params Object to convert to query parameters
 * @param addQuestionMark Optional: indicates whether to begin the query parameters with a question mark
 * @returns Query parameters in string format, ready to be used in a URL
 */
export const paramsToQuery = (params, addQuestionMark) => {
    return !params || params === {}
        ? ''
        : `${addQuestionMark ? '?' : ''}${Object.keys(params)
            .map(x => [x, params[x]].join('='))
            .join('&')}`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyYW1zVG9RdWVyeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy91dGlscy9wYXJhbXNUb1F1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sYUFBYSxHQUFHLENBQUMsTUFBVyxFQUFFLGVBQXlCLEVBQVUsRUFBRTtJQUM5RSxPQUFPLENBQUMsTUFBTSxJQUFJLE1BQU0sS0FBSyxFQUFFO1FBQzdCLENBQUMsQ0FBQyxFQUFFO1FBQ0osQ0FBQyxDQUFDLEdBQUcsZUFBZSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQzthQUNoRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7QUFDckIsQ0FBQyxDQUFDIn0=