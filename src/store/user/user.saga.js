import { takeLatest, all, call, put } from 'redux-saga/effects';
import {
	createAuthUserWithEmailAndPassword,
	createUserDocFromAuth,
	getCurrentUser,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopup,
	signOutCurrentUser,
} from '../../utils/firebase/firebaseInJS';
import {
	signInSuccess,
	signInFailed,
	signUpSuccess,
	signUpFailed,
	signOutFailed,
	signOutSuccess,
} from './user.action';
import { USER_ACTION_TYPES } from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
	try {
		const userSnapshot = yield call(createUserDocFromAuth, userAuth, additionalDetails);
		console.log(userSnapshot);
		console.log(userSnapshot.data());
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser); // if successful it return user auth object
		if (!userAuth) return;
		yield call(getSnapshotFromUserAuth, userAuth, {});
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signUp({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield call(createAuthUserWithEmailAndPassword, email, password);
		console.log(user);
		// const user = res.user;
		yield put(signUpSuccess(user, { displayName: displayName })); // forwarding into signUpSuccess Action
	} catch (error) {
		yield put(signUpFailed(error));
	}
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }) {
	yield call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* signInWithGoogle() {
	try {
		const { user } = yield call(signInWithGooglePopup);
		// if (!user) return;
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

// the action is typically passed as argument - to get payload and from payload email & password --> need to destructor it
export function* signInWithEmailAndPasswd({ payload: { email, password } }) {
	try {
		const { user } = yield call(signInAuthUserWithEmailAndPassword, email, password);
		yield call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* signOutUser() {
	try {
		yield call(signOutCurrentUser);
		yield put(signOutSuccess());
	} catch (error) {
		yield put(signOutFailed(error));
	}
}

export function* onSignUpStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onGoogleSignInStart() {
	yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onEmailAndPasswordSignInStart() {
	yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmailAndPasswd);
}

export function* onCheckUserSession() {
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutUser);
}

export function* userSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailAndPasswordSignInStart),
		call(onSignUpStart),
		call(onSignUpSuccess),
		call(onSignOutStart),
	]);
}
