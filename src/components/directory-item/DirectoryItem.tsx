import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledDirectoryItem } from '../../styles/directory-item/DirectoryItem.styled';

interface DirectoryItemProps {
	category: {
		title: string;
		imageUrl: string;
		route: string;
	};
}

const DirectoryItem = ({ category }: DirectoryItemProps) => {
	const navigate = useNavigate();

	const onNavigateHandler = () => {
		navigate(category.route);
	};

	return (
		<StyledDirectoryItem>
			<div
				className='background-image'
				style={{ backgroundImage: `url(${category.imageUrl})` }}
			></div>
			<div className='category-body' onClick={onNavigateHandler}>
				<h2>{category.title}</h2>
				<p>Shop Now</p>
			</div>
		</StyledDirectoryItem>
	);
};

export default DirectoryItem;
