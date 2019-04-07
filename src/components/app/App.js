import React, {Component} from 'react';
import {withStyles, MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import styles from './app-style'
import Tomato from '../tomato';
import NewTomato from '../new-tomato';
import theme from '../theme/theme'

class App extends Component {
		render() {
				const {classes} = this.props;

				return (
						<MuiThemeProvider theme={theme}>
								<div className={classes.root}>
										<Tomato></Tomato>
										<NewTomato></NewTomato>
								</div>
						</MuiThemeProvider>
				);
		}
}

export default withStyles(styles)(App);
