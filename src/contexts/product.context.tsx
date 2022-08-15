import { createContext, useContext, useState, useEffect } from 'react';
import { addCollectionAndDocuments } from '../utils/firebase/firebase';
import Product from '../model/product.model';
import SHOP_DATA from '../shop-data.js';

interface Props {
	children: React.ReactNode;
}

interface ProductContextProps {
	products: Product[];
}
export const ProductContext = createContext<ProductContextProps | undefined>(undefined);

const ProductContextProvider = ({ children }: Props) => {
	const [products, setProducts] = useState([]);

	// Batch data from shop-data.js file into firestore db
	// useEffect(() => {
	// 	addCollectionAndDocuments('categories', SHOP_DATA);
	// }, []);

	const contextValue = { products };
	return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

const useProductContext = () => {
	const context = useContext(ProductContext);
	if (context === undefined) {
		throw new Error('useProductContext must be used within a ProductContextProvider');
	}
	return context;
};

export { ProductContextProvider, useProductContext };
