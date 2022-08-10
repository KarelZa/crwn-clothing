import { styled } from '@mui/material/styles';

interface StyledCheckoutProps {}
interface StyledCheckoutItemProps {}

export const StyledCheckout = styled('div')<StyledCheckoutProps>(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',

	'& .sidebar': {
		// background: 'yellow',
		'& .sticky-wrapper': {
			border: '1px solid #d1d1d1',
			padding: '1.3rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			'& .discount': {
				'& form': {
					marginTop: '0',
					display: 'flex',
					flexDirection: 'column',
				},
				'& .discount-input-container': {
					input: {
						padding: '.6rem',
					},
					'& .MuiButton-root': {
						padding: '.5rem',
						width: '130px',
					},
					display: 'flex',
					gap: '1rem',
				},
				'& .discount-badge': {
					display: 'flex',
					justifyContent: 'space-between',
					color: 'white',
					backgroundColor: '#041F1E',
					marginTop: '1rem',
					padding: '.8rem',
					span: {
						cursor: 'pointer',
					},
				},
			},
			'& .delivery': {
				// background: 'red',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				gap: '.5rem',
				'& .delivery-message': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					margin: '1rem 0 0 0',
					gap: '1rem',
					svg: {
						width: '25px',
						height: '25px',
					},
				},
				'& .delivery-progress-bar': {
					width: '93%',
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

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {
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
				'& .discount': {
					'& form': {
						marginTop: '0',
						display: 'flex',
						flexDirection: 'column',
					},
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
					'& .discount-badge': {
						display: 'flex',
						justifyContent: 'space-between',
						color: 'white',
						backgroundColor: '#041F1E',
						marginTop: '1rem',
						padding: '.8rem',
						span: {
							cursor: 'pointer',
						},
					},
				},
				'& .delivery-bonus': {
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-around',
					margin: '1rem 0 0 0',
					// gap: '1rem',
					svg: {
						width: '25px',
						height: '25px',
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
	},
	[theme.breakpoints.up('lg')]: {},
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
