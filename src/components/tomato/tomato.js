import React, { Component } from "react";
import { connect } from "react-redux";
import { compose, bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import styles from "./tomato-style";
import Timer from "../timer";
import TimerController from "../timer-controller";
import { tomatoNameUpdated } from "../../actions";

class MediaControlCard extends Component {
  handleChange = event => {
    const { tomatoNameUpdated } = this.props;
    tomatoNameUpdated(event.target.value)
  };

  render() {
    const { classes, name } = this.props;
    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              <TextField
                id="outlined-with-placeholder"
                value={name}
                label="Enter name of tomato"
                margin="normal"
                variant="outlined"
                className={classes.input}
                onChange={this.handleChange}
              />
            </Typography>
          </CardContent>

          <Timer />      

          <div className={classes.controls}>
            <TimerController/>
          </div>
        </div>     
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

const matStateToProps = ({ tomato : { name } }) => {
  return {
    name
  };
};

const mapMethodsToProps = ( dispatch ) => {
  return bindActionCreators({
    tomatoNameUpdated: setChangedName
  }, dispatch);
}

const setChangedName = (name) => (dispatch) => {
  dispatch(tomatoNameUpdated(name));
}

export default compose(
  connect(matStateToProps, mapMethodsToProps),
  withStyles(styles, { withTheme: true })
)(MediaControlCardContainer);
