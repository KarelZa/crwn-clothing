import React from 'react';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Product from '../../model/product.model';
import { StyledGridContainer } from '../../styles/shared/gridContainer';
import ProductCard from '../productCard/ProductCard';
import Divider from '@mui/material/Divider';

type CategoryPreviewProps = {
	title: string;
	products: Product[];
};

const CategoryPreview = ({ title, products }: CategoryPreviewProps) => {
	return (
		<div>
			<div
				className='category-preview-heading'
				style={{ display: 'flex', alignItems: 'center', gap: '.7rem', padding: '1rem 0' }}
			>
				<Typography variant='h4' fontWeight={500}>
					<Link to={title}>{title.toUpperCase()}</Link>
				</Typography>
				<Divider
					orientation='vertical'
					color='grey'
					role='presentation'
					flexItem
					sx={{ my: 0.7 }}
				/>
				<Typography variant='subtitle1'>
					<Link to={title}>{products.length} products</Link>
				</Typography>
			</div>
			<StyledGridContainer rowGap='0' colGap='20px'>
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
