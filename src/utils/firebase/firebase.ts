// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithPopup,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	User as firebaseUser,
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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
// Set bahaviour of Google Provider through config
googleProvider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth(); // Auth instance innit
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const db = getFirestore(); // instance of db

export const createUserDocFromAuth = async (userAuth: firebaseUser, additionalInformation = {}) => {
	if (!userAuth) return;
	const userDocRef = doc(db, 'users', userAuth.uid); // reference of userDoc
	const userSnapshot = await getDoc(userDocRef); // getting data from document of users

	// if user does not exists in dataset
	if (!userSnapshot.exists()) {
		const { displayName, email } = userAuth; // getting nickname + email
		const createdAt = new Date(); // date of creation
		try {
			await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.log('❌ Error creating the user', error.message);
			}
		}
	}
	return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
	return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
	return await signInWithEmailAndPassword(auth, email, password);
};
