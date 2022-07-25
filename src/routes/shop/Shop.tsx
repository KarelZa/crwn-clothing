import React from 'react';
import { useMediaQuery } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';
import { useProductContext } from '../../contexts/product.context';
import { theme } from '../../styles/appTheme/theme';
import { StyledGridContainer } from '../../styles/shared/gridContainer';

type ShopProps = {};

const Shop = (props: ShopProps) => {
	const { products } = useProductContext();
	return (
		<StyledGridContainer
			gridTemplateCol={`repeat(auto-fit, minmax(${
				useMediaQuery(theme.breakpoints.down('sm')) ? '160px' : '230px'
			}, 1fr))`}
			rowGap='0'
			colGap='20px'
		>
			{/* <h2>WELCOME {currentUser?.displayName}</h2> */}
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</StyledGridContainer>
	);
};

export default Shop;
