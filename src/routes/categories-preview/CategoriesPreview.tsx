import React from 'react';
import { useCategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/CategoryPreview';

type CategoriesPreviewProps = {};

const CategoriesPreview = (props: CategoriesPreviewProps) => {
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

export default CategoriesPreview;
