import { getCategoriesAndDocuments } from '../../utils/firebase/firebaseInJS';
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
export const setCategoriesSuccess = (categoriesArray) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);

/**
 * Categories Failed Action
 * @param error - error object
 */
export const fetchCategoriesFailure = (error) =>
	createAction(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);

export const fetchCategoriesStartAsync = () => {
	return async (dispatch) => {
		dispatch(fetchCategoriesStart());
		try {
			const categories = await getCategoriesAndDocuments();
			dispatch(setCategoriesSuccess(categories));
		} catch (error) {
			dispatch(fetchCategoriesFailure(error));
		}
	};
};
