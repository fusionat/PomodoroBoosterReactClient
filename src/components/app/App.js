import React, {Component} from 'react';
import PdAppBar from '../pd-app-bar'
import {withStyles} from '@material-ui/core/styles';
import styles from './app-style'
import PdSideBar from '../pd-side-bar'
import PdContent from "../pd-content";
import SimpleTable from '../pd-table/pd-table'
import BookstoreService from "../services/fakeService,js";

class App extends Component {

		render() {
				let service = new BookstoreService();
				const {classes} = this.props;
				return (
						<div className={classes.root}>
								<PdAppBar/>
								<PdSideBar/>
								<SimpleTable data={service.getPomodoros()}/>
						</div>
				);
		}
}

export default withStyles(styles)(App);
