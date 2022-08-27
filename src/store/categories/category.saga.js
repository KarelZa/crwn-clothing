import { takeLatest, all, call, put } from 'redux-saga/effects';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebaseInJS';
import { fetchCategoriesSuccess, fetchCategoriesFailure } from './category.action';
import { CATEGORY_ACTION_TYPES } from './category.types';

export function* fetchCategoriesAsync() {
	try {
		// through call method we turn function into effect for generator function
		const categories = yield call(getCategoriesAndDocuments);
		yield put(fetchCategoriesSuccess(categories));
	} catch (error) {
		yield put(fetchCategoriesFailure(error));
	}
}

// Responding on categoriesStart Action
export function* onFetchCategories() {
	yield takeLatest(CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

// Generator Accumulator for all of the Category Sagas
export function* categoriesSaga() {
	yield all([call(onFetchCategories)]);
}
