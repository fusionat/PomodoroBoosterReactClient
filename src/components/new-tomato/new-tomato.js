import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './new-tomato-style';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardMedia from "@material-ui/core/CardMedia";
import tomatoIcon from './icons/tomato.svg'
import Button from "@material-ui/core/Button";

class NewTomato extends Component {

		render() {
				const { classes } = this.props;
				return (
								<Card className={classes.card}>
										<CardContent className={classes.content}>
												<Typography component="h5" variant="h5">
																<TextField
																		id="outlined-with-placeholder"
																		label="Tomato name"
																		margin="normal"
																		variant="outlined"
																/>
												</Typography>
												<Typography component="h5" variant="h5">
														00:25
												</Typography>
												<CardMedia
														className={classes.cover}
														image={tomatoIcon}
														title="Live from space album cover"
												/>
												<Button variant="contained" color="primary" className={classes.button}>
														Create
												</Button>
												<Button variant="contained" color="secondary" className={classes.button}>
														Cancel
												</Button>
										</CardContent>
								</Card>
				);

		}
}

export default withStyles(styles)(NewTomato);