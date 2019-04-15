import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./list-style";
import TomatoListItem from "../list-item/list-item";
import withPomodoroService from "../hoc/with-pomodoro-service";
import { tomatosLoaded } from "../../actions";

class TomatoItemsList extends Component {
  componentDidMount() {
    this.props.fetchTomatos();
  }

  render() {
    const { classes, tomatos, loading } = this.props;

    if (!loading) {
      return (
        <Card className={classes.progressBar}>
          <CardContent>
            <CircularProgress className={classes.progress} color="secondary" />
          </CardContent>
        </Card>
      );
    }

    return (
      <Card className={classes.card}>
        <CardContent>
          <List className={classes.root}>
            {tomatos.map(tomato => {
              return <TomatoListItem data={tomato} key={tomato.id} />;
            })}
          </List>
        </CardContent>
      </Card>
    );
  }
}

TomatoItemsList.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = ({ tomatos, loading }) => {
  return {
    tomatos,
    loading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { pomodoroService } = ownProps;
  return bindActionCreators({
    fetchTomatos: fetchTomatos(pomodoroService)
  }, dispatch);
};

const fetchTomatos = (pomodoroService) => () => (dispatch) => {
  pomodoroService.getTomatos().then(data => {
    dispatch(tomatosLoaded(data));
  });
}


export default compose(
  withPomodoroService(),
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withStyles(styles)
)(TomatoItemsList);
