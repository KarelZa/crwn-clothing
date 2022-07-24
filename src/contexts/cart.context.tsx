import { createContext, useState } from 'react';

type Props = { children: React.ReactNode };
interface ShoppingCartContextProps {
	isOpened: boolean;
	OpenDropDown: () => void;
}
export const ShoppingCartContext = createContext<ShoppingCartContextProps>({
	isOpened: false,
	OpenDropDown: () => {},
});

export const ShoppingCartContextProvider = ({ children }: Props) => {
	const [isOpened, setIsOpened] = useState(false);

	const OpenDropDown = () => {
		setIsOpened((prevState) => !prevState);
	};

	const contextValue = { isOpened, OpenDropDown };
	return (
		<ShoppingCartContext.Provider value={contextValue}>{children}</ShoppingCartContext.Provider>
	);
};

export default ShoppingCartContextProvider;
