import { styled } from '@mui/material/styles';

interface StyledProductCardProps {
	flexDir?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
}

export const StyledProductCard = styled('div', {
	shouldForwardProp: (prop) => prop !== 'flexDir',
})<StyledProductCardProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	height: 'auto',

	'& .product-card-image': {
		position: 'relative',
		display: 'flex',
		flexDirection: 'column',
		width: '100%',
		height: '190px',
		alignItems: 'center',
		'&:hover ': {
			img: {
				opacity: '0.8',
			},

			button: {
				opacity: '0.85',
				display: 'flex',
			},
		},
		'& img': {
			width: '100%',
			height: '100%',
			objectFit: 'cover',
		},
		'& button': {
			position: 'absolute',
			width: '80%',
			height: '45px',
			bottom: '4%',
			opacity: 0.7,
			color: '#14110F',
			'&:hover': {
				color: '#F3F3F4',
			},
		},
	},

	'& .product-card-footer': {
		margin: '1rem 0 1.5rem 0',
		width: '100%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},

	[theme.breakpoints.up('sm')]: {
		'& .product-card-image': {
			height: '280px',

			'& button': {
				height: '55px',
			},
		},
	},

	[theme.breakpoints.up('md')]: {
		'& .product-card-image': {
			height: '330px',
			'& button': {
				height: '55px',
			},
		},
	},
	[theme.breakpoints.up('lg')]: {},
}));
