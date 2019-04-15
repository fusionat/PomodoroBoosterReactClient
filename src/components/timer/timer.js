import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import withPomodoroService from "../hoc/with-pomodoro-service";
import styles from "./timer-style";

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
    debugger;
  }

  render() {
    debugger;
    let { timerValue } = this.props;
    return <Timer timerValue={timerValue} {...this.props} />;
  }
}

const mapStateToProps = ({ timerValue }) => {
  return { timerValue };
};


export default compose(
  withPomodoroService(),
  connect(
    mapStateToProps
  ),
  withStyles(styles)
)(TimeContainer);
