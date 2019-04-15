import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import styles from "./tomato-style";
import Timer from "../timer";
import TimerController from "../timer-controller";

function MediaControlCard(props) {
  const { classes, currentTomato } = props;

  if (currentTomato.name) {
    return (
      <Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {currentTomato.name}
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
            <TimerController />
          </div>
        </div>
        <Timer />
      </Card>
    );
  }
  
  return (<React.Fragment/>);
}

MediaControlCard.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const matStateToProps = ({currentTomato}) => {
  return {
    currentTomato
  }
}

export default compose(
  connect(matStateToProps),
  withStyles(styles, { withTheme: true })
)(MediaControlCard);
