import React from 'react';
import { useMediaQuery } from '@mui/material';
import ProductCard from '../../components/productCard/ProductCard';
import { useCategoriesContext } from '../../contexts/categories.context';
import { theme } from '../../styles/appTheme/theme';
import { StyledGridContainer } from '../../styles/shared/gridContainer';

type ShopProps = {};

const Shop = (props: ShopProps) => {
	const { categories } = useCategoriesContext();
	const colWidth = useMediaQuery(theme.breakpoints.down('sm')) ? '160px' : '230px';
	return (
		<React.Fragment>
			{Object.keys(categories).map((title) => (
				<React.Fragment key={title}>
					<h2>{title}</h2>
					<StyledGridContainer
						gridTemplateCol={`repeat(auto-fit, minmax(${colWidth}, 1fr))`}
						rowGap='0'
						colGap='20px'
					>
						{categories[title].map(
							(product, index) =>
								index < 4 && <ProductCard key={product.id} product={product} />
						)}
						{/* <h2>WELCOME {currentUser?.displayName}</h2> */}

						{/* {categories.map((category) => (
						<div>
							<h5>{category.title}</h5>
							{category.items.map((item) => (
								<ProductCard key={category.title} product={item} />
							))}
						</div>
					))} */}
					</StyledGridContainer>
				</React.Fragment>
			))}
		</React.Fragment>
	);
};

export default Shop;
