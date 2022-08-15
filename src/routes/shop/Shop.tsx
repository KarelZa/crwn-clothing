import React from 'react';
import { useMediaQuery } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';
import { useCategoriesContext } from '../../contexts/categories.context';
import { theme } from '../../styles/appTheme/theme';
import { StyledGridContainer } from '../../styles/shared/gridContainer';

type ShopProps = {};

const Shop = (props: ShopProps) => {
	const { categoriesMap } = useCategoriesContext();
	return (
		<StyledGridContainer
			gridTemplateCol={`repeat(auto-fit, minmax(${
				useMediaQuery(theme.breakpoints.down('sm')) ? '160px' : '230px'
			}, 1fr))`}
			rowGap='0'
			colGap='20px'
		>
			{/* <h2>WELCOME {currentUser?.displayName}</h2> */}

			{categoriesMap.map((product) => (
				<ProductCard key={product.items.id} product={product.items} />
			))}
		</StyledGridContainer>
	);
};

export default Shop;
