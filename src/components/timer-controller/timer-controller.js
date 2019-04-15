import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withStyles } from "@material-ui/core/styles";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import Stop from "@material-ui/icons/Stop";
import EasyTimer from "easytimer.js";
import styles from "./timer-controller-style";
import IconButton from "@material-ui/core/IconButton";
import withPomodoroService from "../hoc/with-pomodoro-service";
import { timerValueUpdated, tomatoAddedInList } from "../../actions";

const TimeController = props => {
  const { classes, onStart, onPause, onStop } = props;

  return (
    <React.Fragment>
      <IconButton aria-label="Start" onClick={() => onStart()}>
        <PlayArrowIcon className={classes.play} />
      </IconButton>

      <IconButton aria-label="pause" onClick={() => onPause()}>
        <Pause className={classes.pause} />
      </IconButton>

      <IconButton aria-label="stop" onClick={() => onStop()}>
        <Stop className={classes.stop} />
      </IconButton>
    </React.Fragment>
  );
};

class TimeControllerContainer extends Component {
  componentDidMount() {
    this.timer = new EasyTimer();
  }

  componentWillUnmount() {
    this.timer.stop();
    this.timer = null;
  }

  onStart = () => {
    const { timerValueUpdated } = this.props;
    this.timer.addEventListener("secondsUpdated", e => {
      timerValueUpdated(this.timer.getTimeValues().toString());
    });
    this.timer.start();
  };

  onPause = () => {
    this.timer.pause();  
  };

  onStop = () => {
    const { tomatoAddedInList } = this.props;
    this.timer.stop();
    tomatoAddedInList()
  };

  render() {
    let { timerValue } = this.props;
    return (
      <TimeController
        timerValue={timerValue}
        onStart={this.onStart}
        onPause={this.onPause}
        onStop={this.onStop}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ timerValue }) => {
  return { timerValue };
};

const mapDispatchToProps = {
  timerValueUpdated,
  tomatoAddedInList
};

export default compose(
  withPomodoroService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(TimeControllerContainer);
