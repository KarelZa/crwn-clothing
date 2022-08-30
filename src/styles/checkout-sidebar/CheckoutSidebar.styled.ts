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
		height: '75vh',

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
			'& .delivery': {
				'& .delivery-message': {},
				'& .delivery-progress-bar': {},
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
