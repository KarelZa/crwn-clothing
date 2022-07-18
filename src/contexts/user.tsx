import { Auth, User, UserCredential } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { createContext, useState } from 'react';

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
	const contextValue = { currentUser, setCurrentUser };
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};
