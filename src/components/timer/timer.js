import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";

import EasyTimer from "easytimer.js";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withPomodoroService from "../hoc/with-pomodoro-service";
import styles from "./timer-style";
import { timerValueUpdated } from "../../actions";

class Timer extends Component {
  render = () => {
    const { classes, timerValue } = this.props;

    return (
      <CardContent className={classes.timer}>
        <Typography className={classes.timerText}>{timerValue}</Typography>
      </CardContent>
    );
  };
}

class TimeContainer extends Component {
  componentDidMount() {
    const { timerValueUpdated } = this.props;
    this.timer = new EasyTimer();
    this.timer.start();
    this.timer.addEventListener("secondsUpdated", e => {
        timerValueUpdated(this.timer.getTimeValues().toString());
    });
  }

  componentWillUnmount() {
    this.timer.stop();
    this.timer = null;
  }

  render() {
    let { timerValue } = this.props;
    return <Timer timerValue={timerValue} {...this.props} />;
  }
}

const mapStateToProps = ({ timerValue }) => {
  return { timerValue };
};

const mapDispatchToProps = {
  timerValueUpdated
};

export default compose(
  withPomodoroService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(TimeContainer);
