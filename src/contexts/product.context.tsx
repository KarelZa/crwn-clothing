import { createContext, useState } from 'react';
import SHOP_DATA from '../shop-data.json';

type Props = { children: React.ReactNode };
interface ProductContextProps {
	products: { id: number; name: string; imageUrl: string; price: number }[];
}
export const ProductContext = createContext<ProductContextProps>({
	products: [],
});

export const ProductContextProvider = ({ children }: Props) => {
	const [products, setProducts] = useState(SHOP_DATA);

	const contextValue = { products };
	return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export default ProductContextProvider;
