import React from 'react';
import './categoryItem.styles.scss';

interface CategoryItemProps {
	category: {
		title: string;
		imageUrl: string;
	};
}

const CategoryItem = ({ category }: CategoryItemProps) => {
	return (
		<div className='category-container'>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${category.imageUrl})` }}
			></div>
			<div className='category-body'>
				<h2>{category.title}</h2>
				<p>Shop Now</p>
			</div>
		</div>
	);
};

export default CategoryItem;
