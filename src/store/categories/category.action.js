import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

/**
 * REDUCER FCE -> sets current categories
 * @param {User | null}  categoriesMap - categoriesMap object
 * @returns object with {type,action}
 */
export const setCategories = (categoriesArray) =>
	createAction(CATEGORY_ACTION_TYPES.SET_CATEGORIES_ARRAY, { categories: categoriesArray });
