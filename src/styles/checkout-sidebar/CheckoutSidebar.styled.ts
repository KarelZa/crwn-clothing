import { styled } from '@mui/material/styles';
interface StyledSidebarProps {}

export const StyledSidebar = styled('div')<StyledSidebarProps>(({ theme }) => ({
	'& .sticky-wrapper': {
		border: '1px solid #d1d1d1',
		padding: '1.3rem',
		display: 'flex',
		flexDirection: 'column',
		gap: '1rem',
		'& .discount-container': {
			'& form': {
				marginTop: '0',
				display: 'flex',
				// flexDirection: 'column',
				gap: '1rem',
				'& .MuiButton-root': {
					height: '2.7rem',
					width: '130px',
				},
				input: {
					padding: '.6rem',
				},
				'& .MuiFormControl-root': {
					'& p': {
						marginLeft: '.6rem',
					},
				},
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

	[theme.breakpoints.up('sm')]: {},
	[theme.breakpoints.up('md')]: {
		gridColumn: '2 / 3',
		position: 'sticky',
		top: 0,
		height: '100vh',

		'& .sticky-wrapper': {
			border: '1px solid #d1d1d1',
			padding: '1.3rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
			'& .discount-container': {
				'& form': {
					marginTop: '0',
					display: 'flex',
					input: {
						padding: '.6rem',
					},
					'& .MuiButton-root': {
						// padding: '.5rem',
					},
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

	[theme.breakpoints.up('lg')]: {},
}));
