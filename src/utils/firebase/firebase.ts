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
import {
	getFirestore,
	doc,
	getDoc,
	setDoc,
	collection,
	writeBatch,
	query,
	getDocs,
} from 'firebase/firestore';

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

// creating and writting into Collection inside FireStore
// colectionKey = name / id of the collection
// objectsToAdd = actual objects to add into specific collection
export const addCollectionAndDocuments = async (
	collectionKey: string,
	objectsToAdd: {
		title: string;
		items: { id: number; name: string; imageUrl: string; price: number }[];
	}[]
) => {
	const collectionRef = collection(db, collectionKey); // referencing
	// concept of transation --> batching entries
	const batch = writeBatch(db);
	// looping over objects in shop-data.js
	objectsToAdd.forEach(
		(object: {
			title: string;
			items: { id: number; name: string; imageUrl: string; price: number }[];
		}) => {
			const docRef = doc(collectionRef, object.title.toLowerCase());
			batch.set(docRef, object); // if given docReference does not exist in the collection it creates it
		}
	);

	await batch.commit();
	console.log('DONE');
};

export const getCategoriesAndDocuments = async () => {
	const collectionRef = collection(db, 'categories'); // referencing
	const q = query(collectionRef); // have to query collection Ref
	const querySnapshot = await getDocs(q); // executes query and return result in form of promise
	// const categoryMap = querySnapshot.docs.reduce(
	// 	(acc, docSnapshot) => {
	// 		const { title, items } = docSnapshot.data();
	// 		acc[
	// 			title.toLowerCase() as keyof {
	// 				title: string;
	// 			}
	// 		] = items;
	// 		return acc;
	// 	},
	// 	{ }
	// ); // shaping SnapShot into final object

	// return categoryMap;

	// return querySnapshot.docs.map(
	// 	(docSnapshot) =>
	// 		docSnapshot.data() as {
	// 			title: string;
	// 			items: Product;
	// 		}
	// ); // returning data

	return querySnapshot.docs.map((docSnapshot) => {
		const { title, items } = docSnapshot.data();
		return { title: title, items: items };
	}); // returning data
};

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
