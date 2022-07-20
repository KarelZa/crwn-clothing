import { Auth, User, UserCredential } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { createContext, useEffect, useState } from 'react';
import { createUserDocFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase';

type Props = { children: React.ReactNode };
interface UserContextProps {
	currentUser: User | null;
	setCurrentUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps>({
	currentUser: null,
	setCurrentUser: (user: User | null) => {},
});

export const UserContextProvider = ({ children }: Props) => {
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: User) => {
			if (user !== null) {
				setCurrentUser(user);
				createUserDocFromAuth(user);
			} else {
				setCurrentUser(null);
			}
			console.log(user);
		});

		return unsubscribe;
	}, []);

	const contextValue = { currentUser, setCurrentUser };
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
