// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	User as firebaseUser,
	signOut,
	onAuthStateChanged,
	updateProfile,
} from 'firebase/auth';
// doc ==> to get document instance
// getDoc,setDoc ==> to get / set doc data
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Firebase web-app configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBosKxzM-aD4MqScpqxH_V8UQgPmqp06k0',
	authDomain: 'crwn-db-c37a6.firebaseapp.com',
	projectId: 'crwn-db-c37a6',
	storageBucket: 'crwn-db-c37a6.appspot.com',
	messagingSenderId: '391864056997',
	appId: '1:391864056997:web:9ac15b01c86229a407a14c',
};

// Initialization of Firebase
const firebaseApp = initializeApp(firebaseConfig);
// sign-in Providers
const googleProvider = new GoogleAuthProvider();
// Set bahaviour of Google Provider through config
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth(); // Auth instance innit
export const db = getFirestore(); // instance of db in firestore

// user sign-in with google account
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

// Function to insert user into collection
export const createUserDocFromAuth = async (userAuth: firebaseUser, additionalInformation = {}) => {
	if (!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid); // reference of user's doc based on uid
	const userSnapshot = await getDoc(userDocRef); // getting data from document of users

	// if user's doc does not exists
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth; // getting nickname + email
		const createdAt = new Date(); // date of creation
		try {
			await setDoc(userDocRef, { displayName, email, createdAt });
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log('❌ Error creating the user', error.message);
			}
		}
	}
	return userDocRef;
};
// create user account with Email & Password
export const createAuthUserWithEmailAndPassword = async (
	email: string,
	password: string,
	userName: string
) => {
	const res = await createUserWithEmailAndPassword(auth, email, password);
	const user = res.user;
	return await updateProfile(user, { displayName: userName }); // updates profile with given userName
};
// log-in user account with Email & Password
export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
	return await signInWithEmailAndPassword(auth, email, password);
};
// sign-out functionality
export const signOutCurrentUser = async () => {
	return await signOut(auth);
};
// auth  Observer to listen on user account stream
export const onAuthStateChangedListener = (callback: any) => {
	onAuthStateChanged(auth, callback);
};
