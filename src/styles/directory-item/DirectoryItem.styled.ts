import { styled } from '@mui/material/styles';

interface StyledDirectoryItemProps {}

export const StyledDirectoryItem = styled('div')<StyledDirectoryItemProps>(({ theme }) => ({
	width: '100%',
	height: '150px',
	flex: '1 1 auto',
	display: 'flex',
	alignItems: 'center',
	justifyContent: ' center',
	border: ' 1px solid black',
	margin: '0 5px 10px',
	overflow: 'hidden',

	'&:hover': {
		cursor: 'pointer',

		' & .background-image': {
			transform: 'scale(1.1)',
			transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
		},

		'& .category-body-container': {
			opacity: '0.9',
		},
	},

	'&.large': {
		height: '380px',
	},

	'&:last-child': {
		marginLeft: '5px',
	},

	'.background-image': {
		width: '100%',
		height: '100%',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	'.category-body': {
		height: '90px',
		padding: '0 25px',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		border: '1px solid black',
		backgroundColor: 'white',
		opacity: '0.7',
		position: 'absolute',
		textTransform: 'capitalize',

		h2: {
			fontWeight: 'bold',
			margin: '0 6px 0',
			fontSize: '22px',
			color: '#4a4a4a',
			textTransform: 'uppercase',
		},

		p: {
			fontWeight: 'lighter',
			fontSize: '16px',
		},
	},

	[theme.breakpoints.up('sm')]: {
		width: '40%',
		height: '200px',
	},
	[theme.breakpoints.up('md')]: {
		width: '30%',
		height: '250px',
	},
	[theme.breakpoints.up('lg')]: {
		width: '30%',
		height: '300px',
	},
}));
