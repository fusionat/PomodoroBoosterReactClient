import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './app-style'
import Tomato from '../tomato';

class App extends Component {
	render() {
		const {classes} = this.props;
		return (
			<div className={classes.root}>
				<Tomato></Tomato>
			</div>						
		);
	}
}

export default withStyles(styles)(App);
