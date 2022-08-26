import React from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import {
	selectCategories,
	selectCategoryIsLoading,
} from '../../store/categories/category.selector';

type CategoriesPreviewProps = {};

const CategoriesPreview = (props: CategoriesPreviewProps) => {
	const categories = useSelector(selectCategories);
	const isLoading = useSelector(selectCategoryIsLoading);
	return (
		<div>
			{Object.keys(categories).map((title) => {
				const products = categories[title];
				return (
					<CategoryPreview
						key={title}
						title={title}
						products={products}
						isLoading={isLoading}
					/>
				);
			})}
		</div>
	);
};

export default CategoriesPreview;
