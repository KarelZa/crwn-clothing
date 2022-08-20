import { User } from 'firebase/auth';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { createUserDocFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebaseInJS';

type Props = { children: React.ReactNode };
interface UserContextProps {
	currentUser: User | null;
	setCurrentUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export enum USER_ACTION_TYPES {
	SET_CURRENT_USER = 'set_current_user',
}

// Reducer fce
const userReducer = (
	state: { currentUser: User | null },
	action: { type: USER_ACTION_TYPES.SET_CURRENT_USER; payload?: any }
) => {
	console.log('Dispatched');
	console.log(action);

	const { type, payload } = action;

	switch (type) {
		case USER_ACTION_TYPES.SET_CURRENT_USER:
			return {
				...state, // Previous values
				currentUser: payload, // Modification
			};
		default:
			throw new Error(`Unhandled Type ${type} in userReducer`);
	}
};
// Initial state in reducer
const INITIAL_STATE = {
	currentUser: null,
};

const UserContextProvider = ({ children }: Props) => {
	// const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;
	console.log(state);

	const setCurrentUser = (user: User | null) => {
		dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: User) => {
			if (user !== null) {
				setCurrentUser(user);
				createUserDocFromAuth(user);
			} else {
				setCurrentUser(null);
			}
			// console.log(user);
		});

		return unsubscribe;
	}, []);

	const contextValue = { currentUser, setCurrentUser };
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

const useUserContext = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUserContext must be used within a UserContextProvider');
	}
	return context;
};

export { UserContextProvider, useUserContext };
