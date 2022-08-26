import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/productCard/ProductCard';
import {
	selectCategories,
	selectCategoryIsLoading,
} from '../../store/categories/category.selector';
import { StyledGridContainer } from '../../styles/shared/gridContainer';

interface CategoryProps {}

const Category = (props: CategoryProps) => {
	const categories = useSelector(selectCategories);
	const isLoading = useSelector(selectCategoryIsLoading);
	const { category } = useParams() as { category: string }; // casted
	const [products, setProducts] = useState(categories[category]);
	useEffect(() => {
		setProducts(categories[category]);
	}, [category, categories]);

	return (
		<>
			<Typography variant='h3' fontWeight={700} my={4}>
				{category.toUpperCase()}
			</Typography>
			<StyledGridContainer rowGap='0' colGap='20px'>
				{/* products is a safe-guard before async data are loaded in context otherwise value is undefined  */}
				{products &&
					products.map((product: any) => (
						<ProductCard key={product.id} product={product} isLoading={isLoading} />
					))}
			</StyledGridContainer>
		</>
	);
};

export default Category;
