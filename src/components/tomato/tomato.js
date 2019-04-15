import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import TextField from "@material-ui/core/TextField";
import styles from "./tomato-style";
import Timer from "../timer";
import TimerController from "../timer-controller";


class MediaControlCard extends Component {
  state = { tomatoName: "" };

  handleChange = event => {
    this.setState({ tomatoName: event.target.value });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              <TextField
                id="outlined-with-placeholder"
                label="Enter name of tomato"
                margin="normal"
                variant="outlined"
                className={classes.input}
                onChange={this.handleChange}
              />
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <Chip
                label="MyProject"
                color="secondary"
                className={classes.chip}
              />
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <TimerController tomatoName={this.state.tomatoName} />
          </div>
        </div>
        <Timer />      
      </Card>
    );
  }
}



class MediaControlCardContainer extends Component {

  render() {
    return (
     <MediaControlCard onStartNewTomato={this.onStartNewTomato} {...this.props}/>
    )
  }
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const matStateToProps = ({ currentTomato }) => {
  return {
    currentTomato
  };
};



export default compose(
  connect(matStateToProps),
  withStyles(styles, { withTheme: true })
)(MediaControlCardContainer);
