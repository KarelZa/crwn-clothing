import React from 'react';
import DirectoryItem from '../directory-item/DirectoryItem';

interface DirectoryProps {
	// categories: { id: number; title: string; imageUrl: string }[];
}

const CATEGORIES = [
	{
		id: 1,
		title: 'hats',
		imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
		route: 'shop/hats',
	},
	{
		id: 2,
		title: 'jackets',
		imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
		route: 'shop/jackets',
	},
	{
		id: 3,
		title: 'sneakers',
		imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
		route: 'shop/sneakers',
	},
	{
		id: 4,
		title: 'womens',
		imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
		route: 'shop/womens',
	},
	{
		id: 5,
		title: 'mens',
		imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
		route: 'shop/mens',
	},
];

const Directory = (props: DirectoryProps) => {
	return (
		<div
			style={{
				width: '100%',
				display: 'flex',
				flexWrap: 'wrap',
				gap: '0rem',
				padding: 0,
				margin: 0,
			}}
		>
			{CATEGORIES.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</div>
	);
};

export default Directory;
