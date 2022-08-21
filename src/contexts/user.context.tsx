import { User } from 'firebase/auth';
import { createContext, useContext, useEffect, useReducer } from 'react';
import { createUserDocFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebaseInJS';
import { createAction } from '../utils/reducer/reducer.utils';

type Props = { children: React.ReactNode };

interface UserContextProps {
	currentUser: User | null;
	setCurrentUser: (user: User | null) => void;
}

export const UserContext = createContext<UserContextProps | undefined>(undefined);

export enum USER_ACTION_TYPES {
	SET_CURRENT_USER = 'set_current_user',
}

// user reducer
const userReducer = (
	state: { currentUser: User | null },
	action: { type: USER_ACTION_TYPES.SET_CURRENT_USER; payload?: any }
) => {
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

// Initial state
const INITIAL_STATE = {
	currentUser: null,
};

/**
 * This component makes the UserContext available down the React tree. It should preferably be used at the root of your component tree.
 */
const UserContextProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
	const { currentUser } = state;

	/**
	 * REDUCER FCE -> sets current user
	 * @param {User | null}  user - user object
	 */
	const setCurrentUser = (user: User | null) => {
		dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, { user }));
	};

	// handling side effects
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user: User) => {
			if (user !== null) {
				setCurrentUser(user);
				createUserDocFromAuth(user);
			} else {
				setCurrentUser(null);
			}
		});

		return unsubscribe;
	}, []);

	const contextValue = { currentUser, setCurrentUser };
	return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

/**
 * Custom Hook for user context API ( throws error if not used inside correct provider)
 */
const useUserContext = () => {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUserContext must be used within a UserContextProvider');
	}
	return context;
};

export { UserContextProvider, useUserContext };
