import React from 'react';
import { useSelector } from 'react-redux';

import CategoryPreview from '../../components/category-preview/CategoryPreview';

import { selectCategories } from '../../store/categories/category.selector';

type CategoriesPreviewProps = {};

const CategoriesPreview = (props: CategoriesPreviewProps) => {
	// const { categories } = useContext(CategoriesContext);
	const categories = useSelector(selectCategories);

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
