import { ApiRequest } from '../../core/ApiRequest';
/**
 * [Collections](https://iexcloud.io/docs/api/#collections)
 * Returns an array of `quote` objects for a given collection type. Currently supported collection types are `sector`, `tag`, and `list`
 *
 * @param collectionType
 * @param collectionName
 *   Name of the sector, tag, or list to return and is case sensitive.
 *   Supported lists can be found under the [list](https://iexcloud.io/docs/api/#list) section.
 *   Supported sectors can be found in the [sector ref data](https://iexcloud.io/docs/api/#sectors).
 *   Supported tags can be found in the [tag ref data](https://iexcloud.io/docs/api/#tags).
 *   You must URL encode the collection name before sending
 */
export const collections = (collectionType, collectionName) => {
    return ApiRequest(`stock/market/collection/${collectionType}`, { params: { collectionName } });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29sbGVjdGlvbnMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZW5kcG9pbnRzL21hcmtldC1pbmZvL0NvbGxlY3Rpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUtuRDs7Ozs7Ozs7Ozs7R0FXRztBQUNILE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBRyxDQUN6QixjQUE4QixFQUM5QixjQUFzQixFQUNLLEVBQUU7SUFDN0IsT0FBTyxVQUFVLENBQUMsMkJBQTJCLGNBQWMsRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ2pHLENBQUMsQ0FBQyJ9