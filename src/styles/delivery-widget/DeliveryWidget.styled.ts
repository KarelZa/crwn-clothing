import { styled } from '@mui/material/styles';

interface StyledDeliveryWidgetProps {}

export const StyledDeliveryWidget = styled('div')<StyledDeliveryWidgetProps>(({ theme }) => ({
	// background: 'red',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	gap: '.5rem',
	width: '95%',

	'& .delivery-message': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: '1rem 0 0 0',
		gap: '1rem',
		width: '100%',
		svg: {
			width: '25px',
			height: '25px',
		},
	},
	'& .delivery-progress-bar': {
		width: 'inherit',
		height: '12px',
		'& .delivery-progress--inner': {
			height: '100%',
			width: '100%',
			borderRadius: '6px',
			backgroundColor: '#eaeaea',
			overflow: 'hidden',
			display: 'flex',
			justifyContent: 'flex-start',
			'& .delivery-progress-bar--fill': {
				background: '#62AB37',
				width: '100%',
				transition: 'all 0.3s ease-out',
			},
		},
	},

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {
		'& .delivery-message': {},
		'& .delivery-progress-bar': {},
	},

	[theme.breakpoints.up('lg')]: {},
}));
