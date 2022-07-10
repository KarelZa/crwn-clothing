import React from 'react';
import CategoryItem from '../categoryItem/CategoryItem';
import './categories.styles.scss';

interface CategoriesProps {
	categories: { id: number; title: string; imageUrl: string }[];
}

const Categories = ({ categories }: CategoriesProps) => {
	return (
		<div className='categories-container'>
			{categories.map((category) => (
				<CategoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Categories;
