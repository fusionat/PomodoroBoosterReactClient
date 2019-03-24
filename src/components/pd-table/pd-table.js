import React, { Component }  from 'react';
import {compose} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styles from './pd-table-style';
import FakeService from "../services/fakeService,js";
import CircularProgress from "@material-ui/core/CircularProgress";


function SimpleTable(props) {
		const {classes, data = []} = props;
		return (
				<div>
						<Paper className={classes.paper}>
								<Table className={classes.table}>
										<TableHead>
												<TableRow>
														<TableCell>Pomodoro Name</TableCell>
														<TableCell align="right">Tomato Count</TableCell>
														<TableCell align="right">Status</TableCell>
														<TableCell align="right">Created At</TableCell>
												</TableRow>
										</TableHead>
										<TableBody>
												{data.map(row => (
														<TableRow key={row.id}>
																<TableCell component="th" scope="row">
																		{row.name}
																</TableCell>
																<TableCell align="right">{row.tomatoCount}</TableCell>
																<TableCell align="right">{row.status}</TableCell>
																<TableCell align="right">{row.createdAt}</TableCell>
														</TableRow>
												))}
										</TableBody>
								</Table>
						</Paper>
				</div>
		);
}

class TableContainer extends Component {

		state  = {
				data: [{}],
				isLoading: true
		};
		componentDidMount() {

				this.props.bookstoreService.getPomodoros().then((data) => {
						this.setState({data, isLoading: false})
				})
		}

		render() {
				const {classes} = this.props;

				if (this.state.isLoading){
						return (
										<div>
												<div className={classes.toolbar}/>
												<CircularProgress color="secondary" />
										</div>
								)
				}
				else {
						return (
								<div>
										<div className={classes.toolbar}/>
										<SimpleTable {...this.props} data={this.state.data}  />
								</div>
						);
				}

		}
}
SimpleTable.propTypes = {
		classes: PropTypes.object.isRequired,
};

const serviceUse = () => (Wrapped) => {
		return (props) =>  {
				let serv = new FakeService();
				return (<Wrapped {...props}
				                 bookstoreService={serv}/>)
		}
}

export default serviceUse()(withStyles(styles)(TableContainer));