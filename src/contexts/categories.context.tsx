import { createContext, useContext, useState, useEffect } from 'react';
import {
	addCollectionAndDocuments,
	getCategoriesAndDocuments,
} from '../utils/firebase/firebaseInJS';
import Product from '../model/product.model';
import SHOP_DATA from '../shop-data.js';

interface Props {
	children: React.ReactNode;
}

interface CategoriesContextProps {
	[key: string]: {
		[key: string]: Product[];
	};
}
export const CategoriesContext = createContext<CategoriesContextProps | undefined>(undefined);

const CategoriesContextProvider = ({ children }: Props) => {
	const [categories, setCategories] = useState({});

	// Batch data from shop-data.js file into firestore db
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);

	// Pulling data out of the firestore db
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			setCategories(categoryMap);
		};
		getCategoriesMap();
	}, []);

	console.log(categories);

	const contextValue = { categories };
	return <CategoriesContext.Provider value={contextValue}>{children}</CategoriesContext.Provider>;
};

const useCategoriesContext = () => {
	const context = useContext(CategoriesContext);
	if (context === undefined) {
		throw new Error('useCategoriesContext must be used within a CategoriesContextProvider');
	}
	return context;
};

export { CategoriesContextProvider, useCategoriesContext };
