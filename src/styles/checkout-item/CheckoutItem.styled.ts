import { styled } from '@mui/material/styles';
import { keyframes } from '@mui/system';
interface StyledCheckoutItemProps {}

const buzz = keyframes`
  	10%, 90% {
	  transform: translate3d(-1px, 0, 0);
	}
	20%, 80% {
	  transform: translate3d(2px, 0, 0);
	}
	30%, 50%, 70% {
	  transform: translate3d(-4px, 0, 0);
	}
	40%, 60% {
	  transform: translate3d(4px, 0, 0);
	}
`;

export const StyledCheckoutItem = styled('div')<StyledCheckoutItemProps>(({ theme }) => ({
	width: '100%',
	height: 'auto',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	background: '#F3F7F6',
	boxShadow: '0px 5px 10px -2px rgba(31,31,31,.3)',
	border: '1px solid #d1d1d1',
	borderRadius: '7px',
	margin: '0 0 1rem 0',

	'& .cart-item-main': {
		position: 'relative',
		maxHeight: '250px',
		padding: '1rem',
		width: '100%',
		display: 'flex',
		flexDirection: 'row',
		gap: '1rem',

		'& .cart-item-image ': {
			width: '30%',
			height: '100%',
			// background: 'red',
			display: 'flex',

			img: {
				// background: 'green',
				maxWidth: '100%',
				maxHeight: '170px',
				margin: '0 auto',
				// padding: '1rem',
			},
		},
		'& .cart-item-desc': {
			// background: 'green',
			height: 'auto',
			width: '70%',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-between',

			'& .general-info': {
				display: 'flex',
				flexDirection: 'column',
				rowGap: '.5rem',
				'& .price': {
					display: 'flex',
					justifyContent: 'space-between',
					flexWrap: 'wrap',
					color: '#242424',
					// color: '#A24936',
					'& .quantity-controls': {
						display: 'flex',
						alignItems: 'center',
						userSelect: 'none',
						'& span': {
							width: '30px',
							textAlign: 'center',
						},
						'& svg': {
							cursor: 'pointer',
							'& path': {
								color: 'black',
							},
						},
					},
				},
				'& .actions': {
					display: 'flex',
					gap: '.4rem',
					flexWrap: 'wrap',
					'& .favourite,& .remove': {
						display: 'flex',
						alignItems: 'center',
						cursor: 'pointer',
						span: {
							marginTop: '.1rem',
						},
						'& svg': {
							marginRight: '.2rem',
						},
					},
					'& .remove': {
						'&:hover > svg': {
							animation: `${buzz} 0.82s cubic-bezier(.36,.07,.19,.97) both`,
						},
						'& span:hover': {},
					},
					'& .favourite': {
						'&:hover > svg': {
							// animation: `${buzz} 0.82s cubic-bezier(.36,.07,.19,.97) both`,
						},
						'& span:hover': {
							color: 'red',
						},
					},
				},
			},
		},
	},

	[theme.breakpoints.up('sm')]: {
		'& .cart-item-main': {
			'& .cart-item-desc': {
				'& .general-info': {
					'& .price': {
						justifyContent: 'flex-start',
						gap: '2rem',
					},
					'& .actions': {
						width: '100%',
						gap: '1rem',
						'& .favourite,& .remove': {
							span: {
								marginTop: '.2rem',
							},
							'& svg': {
								width: '1.2rem',
								height: '1.2rem',
							},
						},
					},
				},
			},
		},
	},
	[theme.breakpoints.up('md')]: {},
	[theme.breakpoints.up('lg')]: {},
}));
