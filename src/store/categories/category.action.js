import { createAction } from '../../utils/reducer/reducer.utils';
import { CATEGORY_ACTION_TYPES } from './category.types';

/**
 * Categories Start Action
 */
export const fetchCategoriesStart = () =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START);

/**
 * Successfull Action sets categories array
 * @param {User | null}  categoriesArray - Array with categories
 */
export const fetchCategoriesSuccess = (categoriesArray) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

/**
 * Categories Failed Action
 * @param error - error object
 */
export const fetchCategoriesFailure = (error) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
