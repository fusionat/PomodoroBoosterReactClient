import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import styles from "./new-tomato-style";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import TextField from "@material-ui/core/TextField";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import tomatoIcon from "../icons/tomato.svg";

import { newTomatoStarted } from "../../actions";

class NewTomato extends Component {
  state = { newTomato: "" };

  handleChange = event => {
    this.setState({ newTomato: event.target.value });
  };

  render() {
    const { classes, onStartNewTomato } = this.props;
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
              onChange={this.handleChange}
            />
          </Typography>
          <div className={classes.buttons}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => onStartNewTomato(this.state.newTomato)}
            >
              Create
            </Button>
          </div>
        </CardContent>
        <CardContent className={classes.tomatoIcon}>
          <CardMedia
            className={classes.cover}
            image={tomatoIcon}
            title="Tomato Icon"
          />
        </CardContent>
      </Card>
    );
  }
}

class NewTomatoContainer extends Component {
  onStartNewTomato = newTomato => {
    const { newTomatoStarted } = this.props;
    newTomatoStarted({
      id: Math.random() * 100,
      name: newTomato,
      timerValue: "00:25:00",
      fullComplete: true
    });
  };

  render() {
    return (
      <div>
        <NewTomato {...this.props} onStartNewTomato={this.onStartNewTomato} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  newTomatoStarted
};
export default compose(
  connect(
    null,
    mapDispatchToProps
  ),
  withStyles(styles)
)(NewTomatoContainer);
