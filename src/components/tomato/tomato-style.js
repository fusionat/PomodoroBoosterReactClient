const styles = theme => ({
		card: {
				display: 'flex',
				margin: theme.myMarging
		},

		details: {
				display: 'flex',
				flexDirection: 'column',
				flex: 2
		},

		content: {
				flex: '1 0 auto',
		},

		controls: {
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
		},

		input:{
			width: '100%'
		}
});

export default styles;