import { useMediaQuery } from '@mui/material';
import React from 'react';
import Product from '../../model/product.model';
import { theme } from '../../styles/appTheme/theme';
import { StyledGridContainer } from '../../styles/shared/gridContainer';
import ProductCard from '../productCard/ProductCard';

type CategoryPreviewProps = {
	title: string;
	products: Product[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
	const colWidth = useMediaQuery(theme.breakpoints.down('sm')) ? '160px' : '230px';

	return (
		<div>
			<h2>
				<span>{title.toUpperCase()}</span>
			</h2>
			<StyledGridContainer
				gridTemplateCol={`repeat(auto-fit, minmax(${colWidth}, 1fr))`}
				rowGap='0'
				colGap='20px'
			>
				{products
					.filter((_, index) => index < 4)
					.map((product) => (
						<ProductCard key={product.id} product={product} />
					))}
			</StyledGridContainer>
		</div>
	);
};

export default CategoryPreview;
