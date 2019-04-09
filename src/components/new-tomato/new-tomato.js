import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import styles from './new-tomato-style';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardMedia from "@material-ui/core/CardMedia";
import tomatoIcon from '../icons/tomato.svg'
import Button from "@material-ui/core/Button";

class NewTomato extends Component {

		render() {
				const {classes} = this.props;
				return (
						<Card className={classes.card}>
								<CardContent className={classes.content}>
										<Typography component="h5" variant="h5">
												<TextField
														id="outlined-with-placeholder"
														label="Tomato name"
														margin="normal"
														variant="outlined"
														className={classes.input}
												/>
										</Typography>
										<div className={classes.buttons}>
												<Button variant="contained" color="primary" className={classes.button}>
														Create
												</Button>
												<Button variant="contained" color="secondary" className={classes.button}>
														Cancel
												</Button>
										</div>

								</CardContent>
								<CardContent className={classes.tomatoIcon}>
										<CardMedia
												className={classes.cover}
												image={tomatoIcon}
												title="Live from space album cover"
										/>
								</CardContent>
						</Card>
				);

		}
}

export default withStyles(styles)(NewTomato);