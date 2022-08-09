import { styled } from '@mui/material/styles';

interface StyledCheckoutProps {}
interface StyledCheckoutItemProps {}

export const StyledCheckout = styled('div')<StyledCheckoutProps>(({ theme }) => ({
	display: 'grid',
	gridTemplateColumns: '2fr 1fr',
	gridTemplateRows: 'auto',

	gap: '1rem',
	'& .checkout-items': {
		overflow: 'auto',
	},
	'& .sidebar': {
		gridColumn: '2 / 3',
		position: 'sticky',
		top: 0,
		height: '100vh',
		// background: 'yellow',

		'& .sticky-wrapper': {
			border: '1px solid #d1d1d1',
			padding: '1.3rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			'& .discount > form': {
				marginTop: '0',
				display: 'flex',
				flexDirection: 'column',
				gap: '.5rem',
				'& .discount-input-container': {
					input: {
						padding: '.6rem',
					},
					'& .MuiButton-root': {
						padding: '.5rem',
					},
					display: 'flex',
					gap: '1rem',
				},
			},
			'& .pricing': {
				'& > div': {
					// background: 'red',
					display: 'flex',
					paddingTop: '.5rem',
					justifyContent: 'space-between',
				},
			},
		},
	},
}));

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

			// '& .header': {
			// 	display: 'flex',
			// 	alignItems: 'center',
			// 	justifyContent: 'space-between',
			// },

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
						'& span': {
							width: '30px',
							textAlign: 'center',
						},
						'& svg': {
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
					'& .favourite,& .delete': {
						display: 'flex',
						alignItems: 'center',
						span: {
							marginTop: '.1rem',
						},
						'& svg': {
							marginRight: '.2rem',
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
						gap: '1rem',
						'& .favourite,& .delete': {
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
