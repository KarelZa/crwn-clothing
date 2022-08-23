import { createSelector } from 'reselect';

// Input Selector - picks only categories slice out of redux store
const selectCategoryInputReducer = (state) => state.categories;

// Memoized selector
// 1st arg --> input selector
// 2nd arg --> output selector
export const selectCategoriesArray = createSelector(
	// Array of input selectors
	[selectCategoryInputReducer],
	// In output's selector arg we will use slice that is used in Input selector
	// Will run only if return of selectCategoryReducer(input selector) AND categories property is different
	(categoriesSlice) => categoriesSlice.categories
);

/**
 * @returns categories object from redux store
 */
export const selectCategories = createSelector([selectCategoriesArray], (categories) =>
	categories.reduce((acc, category) => {
		const { title, items } = category;
		acc[title.toLowerCase()] = items;
		return acc;
	}, {})
);
