const styles = theme => ({
		card: {
				display: 'flex',
				flexDirection: 'row',
				margin: theme.myMarging
		},
		content: {
				display: 'flex',
				justifyContent: 'center',
				flexDirection: 'column',
				flex: 2
		},
		input: {
				width: '100%'
		},
		buttons: {
				display: 'flex',
				justifyContent: 'space-between'
		},

		cover: {
				width: '100px',
				height: '100px'
		},

		tomatoIcon: {
				display: 'flex',
				justifyContent: 'center',
				flex: 1
		},

});

export default styles;