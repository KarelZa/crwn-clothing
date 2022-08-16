import React from 'react';
import { useMediaQuery } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';
import { useCategoriesContext } from '../../contexts/categories.context';
import { theme } from '../../styles/appTheme/theme';
import { StyledGridContainer } from '../../styles/shared/gridContainer';
import CategoryPreview from '../../components/category-preview/CategoryPreview';

type ShopProps = {};

const Shop = (props: ShopProps) => {
	const { categories } = useCategoriesContext();
	return (
		<div>
			{Object.keys(categories).map((title) => {
				const products = categories[title];
				return <CategoryPreview key={title} title={title} products={products} />;
			})}
		</div>
	);
};

export default Shop;
